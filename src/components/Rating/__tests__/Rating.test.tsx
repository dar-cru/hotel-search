import { render, RenderResult } from '@testing-library/react';
import { RatingType } from '../../../types';
import Rating, { RatingProps } from '../Rating';

describe('Rating component', () => {
  it('renders the component with star rating', () => {
    const props: RatingProps = {
      ratingType: RatingType.STAR,
      ratingValue: 4
    };
    const tree: RenderResult = render(<Rating {...props} />);

    const { container } = tree;
    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('content', `'★★★★★'`, { modifier: ':before' });
    expect(container.firstChild).toHaveStyleRule('background', 'linear-gradient(90deg,gold 80%,grey 80%)', {
      modifier: ':before'
    });
  });

  it.each`
    rating | gradientPercentage
    ${1}   | ${'20'}
    ${1.5} | ${'30'}
    ${2}   | ${'40'}
    ${2.5} | ${'50'}
    ${3}   | ${'60'}
    ${3.5} | ${'70'}
    ${4}   | ${'80'}
    ${4.5} | ${'90'}
    ${5}   | ${'100'}
  `('renders the correct background gradient for each star rating value', ({ rating, gradientPercentage }) => {
    const props: RatingProps = {
      ratingType: RatingType.STAR,
      ratingValue: rating
    };
    const { container }: RenderResult = render(<Rating {...props} />);
    expect(container.firstChild).toHaveStyleRule('content', `'★★★★★'`, { modifier: ':before' });
    expect(container.firstChild).toHaveStyleRule(
      'background',
      `linear-gradient(90deg,gold ${gradientPercentage}%,grey ${gradientPercentage}%)`,
      {
        modifier: ':before'
      }
    );
  });

  it('renders the component with self rating', () => {
    const props: RatingProps = {
      ratingType: RatingType.SELF,
      ratingValue: 5
    };
    const tree: RenderResult = render(<Rating {...props} />);

    const { container } = tree;
    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('content', `'●●●●●'`, { modifier: ':before' });
    expect(container.firstChild).toHaveStyleRule('background', 'linear-gradient(90deg,gold 100%,grey 100%)', {
      modifier: ':before'
    });
  });

  it.each`
    rating | gradientPercentage
    ${1}   | ${'20'}
    ${1.5} | ${'30'}
    ${2}   | ${'40'}
    ${2.5} | ${'50'}
    ${3}   | ${'60'}
    ${3.5} | ${'70'}
    ${4}   | ${'80'}
    ${4.5} | ${'90'}
    ${5}   | ${'100'}
  `('renders the correct background gradient for each self rating value', ({ rating, gradientPercentage }) => {
    const props: RatingProps = {
      ratingType: RatingType.SELF,
      ratingValue: rating
    };
    const { container }: RenderResult = render(<Rating {...props} />);
    expect(container.firstChild).toHaveStyleRule('content', `'●●●●●'`, { modifier: ':before' });
    expect(container.firstChild).toHaveStyleRule(
      'background',
      `linear-gradient(90deg,gold ${gradientPercentage}%,grey ${gradientPercentage}%)`,
      {
        modifier: ':before'
      }
    );
  });
});
