import { render, screen } from '@testing-library/react';

import SignInButton from '.';

describe('<SignInButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<SignInButton />);

    expect(
      screen.getByRole('heading', {
        name: /SignInButton/i,
      })
    ).toBeInTheDocument();
  });
});
