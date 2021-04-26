import { render, RenderResult } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  it('renders with the header logo', () => {
    const tree: RenderResult = render(<Header />);

    const { container } = tree;
    expect(container).toMatchSnapshot();
  });
});
