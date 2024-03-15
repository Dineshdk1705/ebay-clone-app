"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HiArrowRight } from "react-icons/hi";

const CarouselComp = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Carousel
          autoPlay={true}
          showArrows={true}
          interval={1500}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div className="relative">
            <img src="/images/banner/1.png" />
            <div className="absolute top-[110px] left-[30px] bg-[#fdc517] flex justify-center items-center w-[145px] h-[46px] border-[0.5px] p-2 border-black transform transition duration-500 hover:cursor-pointer hover:bg-black hover:text-white hover:scale-110">
              <button className="mr-2">Shop now</button>
              <HiArrowRight size={18} />
            </div>
          </div>
          <div className="relative">
            <img src="/images/banner/2.png" />
            <div className="absolute top-[175px] left-[30px] bg-[#f7f7f7] flex justify-center items-center w-[145px] h-[46px] border-[0.5px] p-2 border-black transform transition duration-500 hover:cursor-pointer hover:bg-black hover:text-white hover:scale-110">
              <button className="mr-2">Shop now</button>
              <HiArrowRight size={18} />
            </div>
          </div>
          <div className="relative">
            <img src="/images/banner/3.png" />
            <div className="absolute top-[175px] left-[25px] bg-[#f7f7f7] flex justify-center items-center w-[145px] h-[46px] border-[0.5px] p-2 border-black transform transition duration-500 hover:cursor-pointer hover:bg-black hover:text-white hover:scale-110">
              <button className="mr-2">Shop now</button>
              <HiArrowRight size={18} />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComp;
