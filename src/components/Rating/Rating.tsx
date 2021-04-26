import { RatingType } from '../../types/rating';
import { StarsRating } from './Rating.styled';

export type RatingProps = {
  ratingType: RatingType;
  ratingValue: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
};

const Rating = ({ ratingType, ratingValue }: RatingProps) => {
  const percentageRating = (ratingValue / 5) * 100;
  return <StarsRating ratingType={ratingType} rating={percentageRating} />;
};

export default Rating;
