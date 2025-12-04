import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white py-24">
      <div className="flex justify-center items-center gap-8 desktop:gap-60 max-minitab:flex-col">
        <div className="flex flex-col gap-6">
          <div className="border font-bold w-fit py-2 px-4 rounded-full text-lg">
            info@cuberto.com
          </div>
          <p>
            Main office901 N Pitt <br /> Street Alexandria VA, 22314
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="border font-bold w-fit py-2 px-4 rounded-full text-lg">
            +1 304 549 9384
          </div>
          <p>
            Second officeNa Perstyne <br /> 342/1, 11000 Prague
          </p>
        </div>
        <div className="text-center">
          Privacy Policy2025, <br /> Cuberto
        </div>
      </div>
    </div>
  );
};

export default Footer;
