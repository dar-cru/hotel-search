import { Rating } from './rating';

export type Property = {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: {
    url: string;
    caption: string;
    imageType: string;
  };
  rating: Rating;
};
