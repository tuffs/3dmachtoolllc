import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';

describe("Hero", () => {
  it('renders the Hero component', () => {
    render(<Hero />);
    const heroContainer = screen.getByTestId('hero__container');

    expect(heroContainer).toBeInTheDocument();
  });

  it('renders the Logo Mark in the Hero component', () => {
    render(<Hero />);
    const logoMark = screen.getByTestId('hero__logo_mark');

    expect(logoMark).toBeInTheDocument();
  })
});