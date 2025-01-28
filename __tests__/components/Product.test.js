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

  it("renders the product description accurately", () => {
    const product = productMock;
    render(<ProductDetails product={product} />);
    const productDescription = screen.getByTestId('product__description');

    expect(productDescription).toHaveTextContent(product.description);
  });

  it('renders the product details array', () => {
    const product = productMock;
    render(<ProductDetails product={product} />);
    const productDetailsArray = screen.getByTestId('product__details_array');

    expect(productDetailsArray).toBeInTheDocument();
  });
});