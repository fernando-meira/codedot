import { screen } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';

import SignInButton from '.';

describe('<SignInButton />', () => {
  it('should render correctly', () => {
    renderWithTheme(<SignInButton />);

    expect(
      screen.getByRole('button', {
        name: 'Sign in with Github',
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: 'Sign in with Github',
      })
    ).toHaveStyleRule('filter', 'brightness(0.9)', {
      modifier: ':hover',
    });
  });
});
