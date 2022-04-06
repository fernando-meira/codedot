import { screen } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';

import Button from '.';

describe('<Button />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Button title="button" />);

    expect(screen.getByRole('button', { name: /button/i })).toBeInTheDocument();
  });
});
