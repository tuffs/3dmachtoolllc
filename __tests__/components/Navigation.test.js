import { render, screen } from '@testing-library/react';
import Navbar from '@/components/global/Navbar';

describe("Ensure that a Desktop and Mobile Navbar are available", () => {
  it('renders the Desktop Navigation Bar', () => {
    render(<Navbar />);
    const desktopNavbar = screen.getByTestId('desktop_navbar');
    const mobileNavbar = screen.getByTestId('mobile_navbar');

    expect(desktopNavbar).toBeInTheDocument();
    expect(mobileNavbar).toBeInTheDocument();
  });
});