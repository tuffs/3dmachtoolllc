import Hero from '@/components/Hero';
import { RxPlus } from 'react-icons/rx';

export default function NewProductPage() {
  return (
    <>
      <div className="my-24">
        <Hero />
        <div className="mt-24 text-white pt-0 p-8">
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-center">
              Create New Product
            </h1>
          </section>

          <section className="mx-3 md:mx-32">
            <p className="text-gray-300">
              To add a product to the inventory, fill out the form below with the product details. Your image files will be uploaded to Cloudinary and stored there. It is best to ensure all images have the same aspect ratio, height and width. This will ensure a consistent look and feel to the product listing. Be sure to enter the quantity on hand so that inventory count can be tracked and production can begin when pieces on hand are at refill levels.
            </p>

            <p className="text-gray-300 mt-3">
              If you have any trouble inserting new products, please message Devon Kiss at <a href="mailto:devon@3dmandt.com" className="underline text-gray-200">devon@3dmandt.com</a> or call at <a href="tel:14482566963" className="underline text-gray-200">1-448-256-6963</a> for further assistance.
            </p>

            <form className="mt-8">
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="name">
                  Product Name
                </label>
                <input className="w-full p-4 text-gray-300 bg-gray-700 rounded" id="name" type="text" placeholder="Product Name" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="modelNumber">
                  Product Model Number
                </label>
                <input className="w-full p-4 text-gray-300 bg-gray-700 rounded" id="modelNumber" type="text" placeholder="Model Number" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="shortDescription">
                  Product Short Description
                </label>
                <input className="w-full p-4 text-gray-300 bg-gray-700 rounded" id="shortDescription" type="text" placeholder="Short Description" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="quantityOnHand">
                  Quantity on Hand
                </label>
                <input className="w-full p-4 text-gray-300 bg-gray-700 rounded" id="quantityOnHand" type="number" min="0" placeholder="Quantity on Hand" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="price">
                  Product Price
                </label>
                <input className="w-full p-4 text-gray-300 bg-gray-700 rounded" id="price" type="text" placeholder="Product Price" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="tags">
                  Product Tags <span className="text-xs">(comma seperated)</span>
                </label>
                <input className="w-full p-4 text-gray-300 bg-gray-700 rounded" id="tags" type="text" placeholder="Product Tags" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="image">
                  Product Images <span className="text-xs">(comma seperated)</span>
                </label>
                <input className="w-full p-4 text-gray-300 bg-gray-700 rounded" id="image" type="text" placeholder="Product Image" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="description">
                  Product Description
                </label>
                <textarea className="w-full p-4 text-gray-300 bg-gray-700 rounded min-h-[175px]" id="description" placeholder="Product Description"></textarea>
              </div>

              <button className="w-full mt-2 md:mt-3 p-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-1000" type="submit">
                Create New Product
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}