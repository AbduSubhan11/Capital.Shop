"use client";
import Image from "next/image";
import ProductsData from "../../../../ProductsData";
import { useParams } from "next/navigation";
import { useCart } from "../../../../context/cartContext";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  brand: string;
  stock: number;
  description: string;
  rating: number;
  images: string;
};

function Page() {
  const params = useParams();
  const productId = Number(params.id);
  const productData = ProductsData.filter((filt) => filt !== undefined);
  const filterData = productData.filter((pro) => pro.id == productId);
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <>
      {filterData.map((product) => (
        <section
          key={product.id}
          className="grid md:grid-cols-2 gap-10 md:p-20 p-5"
        >
          <div className="h-[500px]">
            <Image
              src={product.images}
              alt="img"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
          <div className="space-y-4 ">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <h1 className="text-gray-500 font-bold">
                Category: <span className="text-black">{product.category}</span>
              </h1>
              <h2 className="font-bold">$ {product.price}</h2>
              <div className="font-bold flex items-center text-xl">
                <div className="flex">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="text-yellow-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="text-yellow-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="text-yellow-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="text-yellow-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 536 512"
                    className="text-yellow-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"></path>
                  </svg>
                </div>
                {product.rating}
              </div>
            </div>
            <div>
              <h2 className="text-gray-500 font-bold">
                Brand: <span className="text-black">{product.brand}</span>
              </h2>
              <h2>{product.stock} Pieces Available</h2>
            </div>
            <div>
              <h2 className="text-2xl">{product.description}</h2>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="relative inline-block md:px-10 px-3 py-2 font- text-white border-2 border-black group bg-[#202426] overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#202426]">
                Add to Cart
              </span>
              <span className="absolute inset-0 bg-white transition-all duration-300 scale-y-0 group-hover:scale-y-100 origin-bottom "></span>
            </button>
          </div>
        </section>
      ))}
    </>
  );
}

export default Page;
