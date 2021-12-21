import { screen } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';

import Header from './';

describe('<Header />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Header />);

    expect(screen.getByLabelText(/ir para a home/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/ir para os posts/i)).toBeInTheDocument();
  });
});
