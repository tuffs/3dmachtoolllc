import { render, screen } from '@testing-library/react';
import ProductDetails from '@/components/ProductDetails';
import { productMock } from '@/__mocks__/productMock';

describe("Product Page", () => {
  it('renders the ProductDetails component', () => {
    const product = productMock;
    render(<ProductDetails product={product} />);
    const prooductDetails = screen.getByTestId('main_product_details__container');

    expect(prooductDetails).toBeInTheDocument();
  });

  it("renders the product name accurately", () => {
    const product = productMock;
    render(<ProductDetails product={product} />);
    const productName = screen.getByTestId('product__name');

    expect(productName).toHaveTextContent(product.name);
  });

  it("renders the product short description accurately", () => {
    const product = productMock;
    render(<ProductDetails product={product} />);
    const productShortDescription = screen.getByTestId('product__short_description');

    expect(productShortDescription).toHaveTextContent(product.shortDescription);
  });
});