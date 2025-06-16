import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <div className="my-24 mx-auto">
        <Hero />
        <h1 className="text-4xl font-bold text-center mt-12">404 Page Not Found!</h1>
        <p className="text-lg text-center text-gray-300 mt-2">
          Please check the URL or return to the <a href="/products" className="underline">Products List</a> to continue shoppping.
        </p>
      </div>
    </>
  );
}