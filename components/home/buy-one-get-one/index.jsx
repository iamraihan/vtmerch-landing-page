import { OptimizeImage } from "@/helpers/ui";
import React from "react";
import { buyOneGetOneCardData } from "./helper/uiData";

const BuyOneGetOne = () => {
  return (
    <section className="bg-[#F6F5F5]">
      <div className="container mx-auto  py-24">
        <h2 className="text-dark font-semibold uppercase text-70px font-montserrat tracking-tight leading-120% max-w-[1088px] mb-12">
          Buy 1 get 1 Free on
          <span className="stroke-title"> best selling products</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {buyOneGetOneCardData.map((item) => (
            <div
              className="rounded-xl bg-white drop-shadow-get-one-card p-4"
              key={item?.id}
            >
              <div className="mb-7">
                <OptimizeImage
                  imgURL={item?.imgPath}
                  altLabel="discount"
                  borderRadius="12px"
                />
              </div>
              <div className="">
                <p className="text-dark text-base font-medium tracking-tighter mb-3">
                  Army Green Active Short Sleeve
                </p>
                <p className="text-dark font-medium text-xl leading-120% inline-flex gap-3 items-center ">
                  $ 34.95
                  <span className="line-through text-[#9B9B9B]">$ 34.95</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyOneGetOne;
