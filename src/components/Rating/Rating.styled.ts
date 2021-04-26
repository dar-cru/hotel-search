import styled from 'styled-components';
import { RatingType } from '../../types';

export const StarsRating = styled.div<{ ratingType: RatingType; rating: number }>`
  display: inline-block;
  font-size: ${(props) => (props.ratingType === RatingType.STAR ? '1rem' : '1.5rem')};
  font-family: Times;
  line-height: 1;

  :before {
    ${(props) => (props.ratingType === RatingType.STAR ? `content: '★★★★★'` : `content: '●●●●●'`)};
    letter-spacing: ${(props) => (props.ratingType === RatingType.STAR ? '3px' : '1px')};;
    background: linear-gradient(90deg, gold ${(props) => props.rating}%, grey ${(props) => props.rating}%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
