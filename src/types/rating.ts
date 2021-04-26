export enum RatingType {
  SELF = 'self',
  STAR = 'star'
}

export type Rating = {
  ratingValue: number;
  ratingType: RatingType;
};
