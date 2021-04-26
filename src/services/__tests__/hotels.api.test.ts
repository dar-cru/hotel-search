import axios from 'axios';
import { RatingType, PromotionType, CancellationType } from '../../types';
import { getHotels } from '../hotels.api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getHotels', () => {
  it('should return the hotel data on a successful request', async () => {
    const hotels = [
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
      }
    ];
    mockedAxios.get.mockResolvedValue({ data: hotels });
    expect(await getHotels()).toEqual(hotels);
  });

  it('should throw the error received from the request', async () => {
    mockedAxios.get.mockRejectedValue('404');
    try {
      const result = await getHotels();
      if (result) {
        fail('Unexpected result when an error should have been thrown.');
      }
    } catch (e) {
      expect(e.message).toEqual('There was an error while processing your request. Please try again later.');
    }
  });
});
