import { render, screen } from '@testing-library/react';

import StatusFooter from '.';

describe('<StatusFooter />', () => {
  it('should render the heading', () => {
    const { container } = render(<StatusFooter />);

    expect(
      screen.getByRole('heading', {
        name: /StatusFooter/i,
      })
    ).toBeInTheDocument();
  });
});
