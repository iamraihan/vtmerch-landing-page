import { HamburgerIcon, Logo } from "@/helpers/ui/custom-svg";

const Navbar = () => {
  return (
    <div className="max-w-1684px mx-auto pt-10">
      <div className="flex items-center justify-between">
        <div className="inline-flex gap-2.5 items-center">
          <div className="">
            <Logo />
          </div>
          <p
            className="font-montserrat font-extrabold tracking-[12px] leading-[120%] text-2xl  lg:text-112px text-white"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(223,223,223,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            VTMERCH
          </p>
        </div>
        <span className="cursor-pointer">
          <HamburgerIcon />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
