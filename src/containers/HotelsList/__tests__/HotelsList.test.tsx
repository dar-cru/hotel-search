import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SortValues } from '../../../utils/sortyHotelsBy';
import HotelsList from '../HotelsList';
import { CancellationType, Hotel, PromotionType, RatingType } from '../../../types';

const hotels: Hotel[] = [
  {
    id: 'cxd650nuyo',
    property: {
      propertyId: 'P107801',
      title: 'Courtyard by Marriott Sydney-North Ryde',
      address: ['7-11 Talavera Rd', 'North Ryde'],
      previewImage: {
        url: 'https://unsplash.it/145/125/?random',
        caption: 'Image of Courtyard by Marriott Sydney-North Ryde',
        imageType: 'PRIMARY'
      },
      rating: {
        ratingValue: 4.5,
        ratingType: RatingType.SELF
      }
    },
    offer: {
      promotion: {
        title: 'Exclusive Deal',
        type: PromotionType.MEMBER
      },
      name: 'Deluxe Balcony Room',
      displayPrice: {
        amount: 329.0,
        currency: 'AUD'
      },
      savings: {
        amount: 30.0,
        currency: 'AUD'
      },
      cancellationOption: {
        cancellationType: CancellationType.NOT_REFUNDABLE
      }
    }
  },
  {
    id: 'mesq6mggyn',
    property: {
      propertyId: 'P107802',
      title: 'Primus Hotel Sydney',
      address: ['339 Pitt St', 'Sydney'],
      previewImage: {
        url: 'https://unsplash.it/145/126/?random',
        caption: 'Image of Primus Hotel Sydney',
        imageType: 'PRIMARY'
      },
      rating: {
        ratingValue: 5,
        ratingType: RatingType.STAR
      }
    },
    offer: {
      promotion: {
        title: 'Exclusive Deal',
        type: PromotionType.CAMPAIGN
      },
      name: 'Deluxe King',
      displayPrice: {
        amount: 375.0,
        currency: 'AUD'
      },
      savings: {
        amount: 28.0,
        currency: 'AUD'
      },
      cancellationOption: {
        cancellationType: CancellationType.FREE_CANCELLATION
      }
    }
  }
];

describe('HotelsList container', () => {
  it('renders the hotels list in the order of API response', () => {
    const tree: RenderResult = render(<HotelsList hotels={hotels} />);

    const { container } = tree;
    expect(container).toMatchSnapshot();

    const hotelResultsSummary = screen.getByTestId('hotel-results-summary');
    const hotelCardItems = screen.getAllByTestId('hotel-name');

    expect(hotelResultsSummary?.textContent).toEqual('2 hotels in Sydney');
    expect(hotelCardItems.length).toBe(2);
    expect(hotelCardItems[0].textContent).toEqual('Courtyard by Marriott Sydney-North Ryde');
    expect(hotelCardItems[1].textContent).toEqual('Primus Hotel Sydney');
  });

  it('should sort the hotels by price - high to low, then low to high', () => {
    render(<HotelsList hotels={hotels} />);

    // ACT: Trigger a select event with value - high to low
    userEvent.selectOptions(screen.getByTestId('hotel-sort-selector'), [SortValues.PRICE_HIGH_TO_LOW]);

    let hotelCardItems = screen.getAllByTestId('hotel-name');
    expect(hotelCardItems.length).toBe(2);
    expect(hotelCardItems[0].textContent).toEqual('Primus Hotel Sydney');
    expect(hotelCardItems[1].textContent).toEqual('Courtyard by Marriott Sydney-North Ryde');

    // ACT: Retrigger the selector event but with a different value - low to high
    userEvent.selectOptions(screen.getByTestId('hotel-sort-selector'), [SortValues.PRICE_LOW_TO_HIGH]);

    hotelCardItems = screen.getAllByTestId('hotel-name');
    expect(hotelCardItems.length).toBe(2);
    expect(hotelCardItems[0].textContent).toEqual('Courtyard by Marriott Sydney-North Ryde');
    expect(hotelCardItems[1].textContent).toEqual('Primus Hotel Sydney');
  });
});
