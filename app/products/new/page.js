import Hero from '@/components/Hero';
import { RxPlus } from 'react-icons/rx';

export default function NewProductPage() {
  return (
    <>
      <div className="my-24">
        <Hero />
        <div className="mt-24 text-white pt-0 p-8">
          <section className="mb-10">
            <h1 className="text-4xl font-bold text-center">
              Create New Product
            </h1>
          </section>

          <section className="mx-3 md:mx-32">
            <p className="text-gray-300 mt-3">
              The following are IMPORTANT details which will make or break the product's listing. Deviate at your own peril.<br />
            </p>
            <ul className="text-gray-300 mt-3 list-disc list-inside ml-4">
              <li>Fill out the form appropriately with a unique and descriptive Product Name and Model Number</li>
              <li>Product details should be concise and understandable, yet descriptive for users to read. This will boost our SEO.</li>
              <li className="mb-3">After these are covered, the most important steps are below.</li>
              <li className="ml-4 list-none">
                <strong>ALL IMAGES SHOULD BE</strong>
              </li>
              <ol className="list-disc list-inside ml-4">
                <li>1920 WIDTH x 1080 HEIGHT</li>
                <li>72 DPI (Dots per Inch)</li>
                <li>RGB Color Mode</li>
                <li>File Type: .JPG or .PNG - <i>Zero Exceptions!</i></li>
              </ol>
            </ul>
            <p className="text-gray-300 mt-3">
              In order to have a consistent, professional look across the website your images must adhere to the above guidelines. Once they are added to the form below and the form is submitted the Product will be saved to the database, a reference to the images will be added to the database as well after they are uploaded to Cloudinary for proper media storage and distribution via Amazon S3 servers with rigorous rulesets.
            </p>
            <p className="text-gray-300 mt-3">
              In addition, be sure to enter the quantity on hand so that inventory count can be tracked and production can begin when pieces on hand are at refill levels.
            </p>

            <p className="text-gray-300 mt-3">
              If you have any trouble inserting new products, please message Devon Kiss at <a href="mailto:devon@3dmandt.com" className="underline text-gray-200">devon@3dmandt.com</a> for further assistance.
            </p>

            <form className="mt-8">
              <div className="mb-10">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="name">
                  Product Name
                </label>
                <input className="w-full p-4 text-gray-300 bg-gray-700 rounded" id="name" type="text" placeholder="Product Name" />
              </div>

              <div className="mb-10">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="modelNumber">
                  Product Model Number
                </label>
                <input className="w-full p-4 text-gray-300 bg-gray-700 rounded" id="modelNumber" type="text" placeholder="Model Number" />
              </div>

              <div className="mb-10">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="shortDescription">
                  Product Short Description
                </label>
                <input className="w-full p-4 text-gray-300 bg-gray-700 rounded" id="shortDescription" type="text" placeholder="Short Description" />
              </div>

              <div className="mb-10">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="quantityOnHand">
                  Quantity on Hand
                </label>
                <input className="w-full p-4 text-gray-300 bg-gray-700 rounded" id="quantityOnHand" type="number" min="0" placeholder="Quantity on Hand" />
              </div>

              <div className="mb-10">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="price">
                  Product Price
                </label>
                <input className="w-full p-4 text-gray-300 bg-gray-700 rounded" id="price" type="text" placeholder="Product Price" />
              </div>

              <div className="mb-10">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="tags">
                  Product Tags <span className="text-xs">(comma seperated)</span>
                </label>
                <input className="w-full p-4 text-gray-300 bg-gray-700 rounded" id="tags" type="text" placeholder="Product Tags" />
              </div>

              <div className="mb-10">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="image">
                  Product Images <span className="text-xs">(comma seperated)</span>
                </label>
                <input className="w-full p-4 text-gray-300 bg-gray-700 rounded" id="image" type="text" placeholder="Product Image" />
              </div>

              <div className="mb-6">
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