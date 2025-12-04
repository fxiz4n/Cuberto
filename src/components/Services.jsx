import React from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";

const Services = () => {
  return (
    <div className="bg-[#161616]">
      <div className="rounded-t-3xl desktop:rounded-t-[4rem] bg-white pb-24">
        <h1 className="text-6xl font-semibold pl-16 tab:pl-26 pt-24 xl:pl-48 xl:pt-48  desktop:pb-8">
          Our Services
        </h1>
        <div className="flex justify-center items-center flex-col desktop:flex-row xl:px-48 text-2xl px-12 gap-12">
          <div className="flex flex-col items-center gap-24">
            <p className="w-[80%]">
              From motion design to AI-powered products — we design and build
              interfaces for the future.
            </p>
            <Card
              title="Brand Identity"
              desc="Strategic design that positions AI products for trust and clarity."
              video="https://cuberto.com/assets/services/branding/cover.mp4"
              width="100"
            />
          </div>
          <div className="my-20 flex flex-col gap-20">
            <Card
              title="Custom development"
              desc="Frontend + backend + AI integrations — built for performance and scalability."
              video="https://cuberto.com/assets/projects/ferrumpipe/cover.mp4"
              width="100"
            />
            <Card
              title="AI-enhanced UX/UI design"
              desc="Interfaces that adapt, predict, and respond intelligently.."
              video="https://cuberto.com/assets/services/design/cover.mp4"
              width="100"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button text="View all services" />
        </div>
      </div>
    </div>
  );
};

export default Services;
