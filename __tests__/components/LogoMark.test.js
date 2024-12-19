import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';

describe("Logo Mark is Visible", () => {
  it('renders the Logo Mark in the Hero component', () => {
    render(<Hero />);
    const logoMark = screen.getByTestId('hero__logo_mark');

    expect(logoMark).toBeInTheDocument();
  });
});