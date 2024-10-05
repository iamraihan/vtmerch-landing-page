import Navbar from "@/components/navbar";
import { Carousel } from "@/helpers/ui";
import { heroCardData } from "./helper/uiData";

const Hero = () => {
  return (
    <div className="bg-red pb-16">
      <Navbar />
      <div className="container ml-auto relative">
        <div className="container mx-auto absolute -left-1 sm:-left-7 sm:top-32 md:top-48 xl:top-36 md:-left-3">
          <p className="font-act-of-rejection text-white/40 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-140px leading-168px">
            future looks brights!
          </p>
        </div>
        <div className="pt-60">
          <Carousel data={heroCardData} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
