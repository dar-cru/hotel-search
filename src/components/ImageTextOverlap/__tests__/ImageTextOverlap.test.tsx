import { render, RenderResult } from '@testing-library/react';
import ImageTextOverlap from '../ImageTextOverlap';

describe('ImageTextOverlap component', () => {
  it('renders with correct styling and all values', () => {
    const tree: RenderResult = render(
      <ImageTextOverlap url="https://foo.com" imgDesc="An image of foo" text="Grab the latest deals!" />
    );

    const { container } = tree;
    expect(container).toMatchSnapshot();
  });
});
