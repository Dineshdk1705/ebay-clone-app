"use client";

import MainLayout from "../../layouts/MainLayout";
// import SimilarProducts from "../../components/SimilarProducts";

export default function Product({ params }) {
  const product = {
    id: 1,
    title: "Leather Bag",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: "https://picsum.photos/id/7",
    price: 3500,
  };

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex px-4 py-10">
            {product?.url ? (
              <img className="w-[40%] rounded-lg" src={product?.url + "/190"} />
            ) : (
              <div className="w-[40%]"></div>
            )}

            <div className="px-4 w-full">
              <div className="font-bold text-xl">{product?.title}</div>
              <div className="text-sm text-gray-700 pt-2">
                Brand New - Full Warranty
              </div>

              <div className="border-b py-1" />

              <div className="pt-3 pb-2">
                <div className="flex items-center">
                  Condition:{" "}
                  <span className="font-bold text-[17px] ml-2">New</span>
                </div>
              </div>

              <div className="border-b py-1" />

              <div className="pt-3">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    Price:
                    {product?.price ? (
                      <div className="font-bold text-[20px] ml-2">
                        ₹{(product?.price / 100).toFixed(2)}
                      </div>
                    ) : null}
                  </div>
                  <button className="text-white py-2 px-20 rounded-full cursor-pointer bg-[#3498C9] hover:bg-[#0054A0]">
                    Add To Cart
                  </button>
                </div>
              </div>

              <div className="border-b py-1" />

              <div className="pt-3">
                <div className="font-semibold pb-1">Description:</div>
                <div className="text-sm">{product?.description}</div>
              </div>
            </div>
          </div>
        </div>

        {/* <SimilarProducts /> */}
      </MainLayout>
    </>
  );
}
