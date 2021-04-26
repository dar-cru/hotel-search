import { Offer } from './offer';
import { Property } from './property';

export type Hotel = {
  id: string;
  property: Property;
  offer: Offer;
};
