import { render, screen } from '@testing-library/react';
import BaseServices from '@/components/BaseServices';

describe("BaseServices", () => {
  it('renders the BaseServices component', () => {
    render(<BaseServices />);
    const baseServicesContainer = screen.getByTestId('base_services__container');

    expect(baseServicesContainer).toBeInTheDocument();
  });

  it('renders base services provided, there are 3 (three) base services', () => {
    render(<BaseServices />);
    const service_one = screen.getByTestId('base_services__service_0');
    const service_two = screen.getByTestId('base_services__service_1');
    const service_three = screen.getByTestId('base_services__service_2');

    expect(service_one).toBeInTheDocument();
    expect(service_two).toBeInTheDocument();
    expect(service_three).toBeInTheDocument();
  });
});