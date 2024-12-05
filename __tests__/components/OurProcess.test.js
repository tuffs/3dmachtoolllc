import { render, screen } from '@testing-library/react';
import OurProcess from '@/components/OurProcess';
import '../../__mocks__/intersectionObserverMock';

describe("OurProcess", () => {
  it('renders the OurProcess component', () => {
    render(<OurProcess />);
    const ourProcess = screen.getByTestId('our_process__container');

    expect(ourProcess).toBeInTheDocument();
  });

  xit('renders the Logo Mark in the Hero component', () => {
    // render(<Hero />);
    // const logoMark = screen.getByTestId('hero__logo_mark');

    // expect(logoMark).toBeInTheDocument();
  });
});