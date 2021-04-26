import { Hotel } from '../types/hotel';

enum SortOrder {
  ASCENDING,
  DESCENDING
}

enum SortCategory {
  DISPLAY_PRICE
}

export enum SortValues {
  PRICE_HIGH_TO_LOW = 'PRICE_HIGH_LOW',
  PRICE_LOW_TO_HIGH = 'PRICE_LOW_HIGH'
}

export const sortHotelsBy = (hotels: Hotel[], sortValue: SortValues) => {
  let order: SortOrder = SortOrder.ASCENDING;
  const category: SortCategory = SortCategory.DISPLAY_PRICE;

  if (sortValue === SortValues.PRICE_HIGH_TO_LOW) {
    order = SortOrder.DESCENDING;
  }

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
