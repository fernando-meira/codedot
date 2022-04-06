import { screen } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';

import Input from '.';

describe('<Input />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Input />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
