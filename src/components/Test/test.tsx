import { render, screen } from '@testing-library/react';

import { Test } from '.';

describe('<Main />', () => {
  it('Testar titulo', () => {
    render(<Test />);

    expect(
      screen.getByRole('heading', { name: /Example 2/i })
    ).toBeInTheDocument();
  });
});
