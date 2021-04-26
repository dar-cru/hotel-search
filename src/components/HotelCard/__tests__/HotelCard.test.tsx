import { render, RenderResult, screen } from '@testing-library/react';
import { CancellationType, Offer, PromotionType, Property, RatingType } from '../../../types';
import HotelCard from '../HotelCard';

const mockHotelProperty: Property = {
  propertyId: 'P107802',
  title: 'Primus Hotel Sydney',
  address: ['339 Pitt St', 'Sydney'],
  previewImage: {
    url: 'https://mockUrl.com',
    caption: 'Image of Primus Hotel Sydney',
    imageType: 'PRIMARY'
  },
  rating: {
    ratingValue: 5,
    ratingType: RatingType.SELF
  }
};

const mockHotelOffer: Offer = {
  promotion: {
    title: 'Exclusive Deal',
    type: PromotionType.MEMBER
  },
  name: 'Deluxe King',
  displayPrice: {
    // eslint-disable-next-line prettier/prettier
    amount: 375.000000,
    currency: 'AUD'
  },
  savings: {
    amount: 28.0,
    currency: 'AUD'
  },
  cancellationOption: {
    cancellationType: CancellationType.FREE_CANCELLATION
  }
};

describe('Hotel Card component', () => {
  it('renders with the correct values through props', () => {
    const tree: RenderResult = render(<HotelCard property={mockHotelProperty} offer={mockHotelOffer} />);

    const { container } = tree;
    const hotelAddress = screen.queryByTestId('hotel-address-text');
    const nightTotalCurrency = screen.queryByTestId('hotel-night-total-text');
    const pricePerNight = screen.queryByTestId('hotel-price-text');
    const hotelSavings = screen.queryByTestId('hotel-savings-text');
    const freeCancellation = screen.queryByTestId('hotel-free-cancellation');

    expect(container).toMatchSnapshot();
    expect(hotelAddress?.textContent).toEqual('339 Pitt St, Sydney');
    expect(pricePerNight?.textContent).toEqual('375');
    expect(nightTotalCurrency?.textContent).toEqual('1 night total (AUD)');
    expect(hotelSavings?.textContent).toEqual('Save $28');
    expect(freeCancellation?.textContent).toEqual('Free Cancellation');
  });

  it('should nicely format all of all address values', () => {
    render(
      <HotelCard
        property={{ ...mockHotelProperty, address: ['121 Pitt St', 'Sydney', 'NSW'] }}
        offer={mockHotelOffer}
      />
    );

    const hotelAddress = screen.queryByTestId('hotel-address-text');
    expect(hotelAddress?.textContent).toEqual('121 Pitt St, Sydney, NSW');
  });

  it('should not render the address if the values are empty', () => {
    render(<HotelCard property={{ ...mockHotelProperty, address: [] }} offer={mockHotelOffer} />);

    const hotelAddress = screen.queryByTestId('hotel-address-text');
    expect(hotelAddress?.textContent).toEqual('');
  });

  it('should render the correct currency and rounded off display price', () => {
    render(
      <HotelCard
        property={mockHotelProperty}
        offer={{
          ...mockHotelOffer,
          displayPrice: {
            currency: 'NZD',
            amount: 299.99
          }
        }}
      />
    );

    const nightTotalCurrency = screen.queryByTestId('hotel-night-total-text');
    const pricePerNight = screen.queryByTestId('hotel-price-text');

    expect(pricePerNight?.textContent).toEqual('300');
    expect(nightTotalCurrency?.textContent).toEqual('1 night total (NZD)');
  });

  it('should round the savings value correctly', () => {
    const { rerender } = render(
      <HotelCard
        property={mockHotelProperty}
        offer={{
          ...mockHotelOffer,
          savings: {
            amount: 99.29,
            currency: 'AUD'
          }
        }}
      />
    );

    let savingsPrice = screen.queryByTestId('hotel-savings-text');
    expect(savingsPrice).not.toBeNull();
    expect(savingsPrice?.textContent).toEqual('Save $99');

    rerender(
      <HotelCard
        property={mockHotelProperty}
        offer={{
          ...mockHotelOffer,
          savings: {
            amount: 99.79,
            currency: 'AUD'
          }
        }}
      />
    );

    savingsPrice = screen.queryByTestId('hotel-savings-text');
    expect(savingsPrice).not.toBeNull();
    expect(savingsPrice?.textContent).toEqual('Save $100');

    rerender(
      <HotelCard
        property={mockHotelProperty}
        offer={{
          ...mockHotelOffer,
          savings: {
            amount: 99.5111119,
            currency: 'AUD'
          }
        }}
      />
    );

    savingsPrice = screen.queryByTestId('hotel-savings-text');
    expect(savingsPrice).not.toBeNull();
    expect(savingsPrice?.textContent).toEqual('Save $100');
  });

  it('should not display the savings text if the value is null', () => {
    render(
      <HotelCard
        property={mockHotelProperty}
        offer={{
          ...mockHotelOffer,
          savings: undefined
        }}
      />
    );

    const savingsPrice = screen.queryByTestId('hotel-savings-text');
    expect(savingsPrice).toBeNull();
    expect(savingsPrice?.textContent).toBeUndefined();
  });

  it('should not render the free cancellation text if cancellation type is non-refundable', () => {
    render(
      <HotelCard
        property={mockHotelProperty}
        offer={{
          ...mockHotelOffer,
          cancellationOption: {
            cancellationType: CancellationType.NOT_REFUNDABLE
          }
        }}
      />
    );

    const freeCancellation = screen.queryByTestId('hotel-free-cancellation');
    expect(freeCancellation).toBeNull();
    expect(freeCancellation?.textContent).toBeUndefined();
  });
});
