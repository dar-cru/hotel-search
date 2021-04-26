import { Hotel } from '../types/hotel';

export enum SortOrder {
  ASCENDING,
  DESCENDING
}

export enum SortCategory {
  DISPLAY_PRICE
}

export const sortHotelsBy = (hotels: Hotel[], category: SortCategory, order: SortOrder) => {
  return hotels.sort((hotel1, hotel2) => {
    const obj1 = order === SortOrder.ASCENDING ? hotel1 : hotel2;
    const obj2 = order === SortOrder.ASCENDING ? hotel2 : hotel1;

    if (category === SortCategory.DISPLAY_PRICE) {
      return obj1.offer.displayPrice.amount - obj2.offer.displayPrice.amount;
    } else {
      return 0;
    }
  });
};
