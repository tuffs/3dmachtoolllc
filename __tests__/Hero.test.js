import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe("Hero", () => {
  it('renders the Hero component', () => {
    render(<Hero />);
    const heroContainer = screen.getByTestId('hero__container');

    expect(heroContainer).toBeInTheDocument();
  });
});