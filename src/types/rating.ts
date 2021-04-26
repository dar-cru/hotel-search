export enum RatingType {
  SELF = 'self',
  STAR = 'star'
}

export type Rating = {
  ratingValue: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  ratingType: RatingType;
};
