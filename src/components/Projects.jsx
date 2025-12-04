import React from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";

const rightGrid = [
  {
    title: "Kelvin Zero",
    desc: "A digital product for passwordless authentication",
    img: "https://cuberto.com/assets/projects/kzero/cover.jpg",
    video: "https://cuberto.com/assets/projects/potion/cover.mp4",
  },
  {
    title: "Magma",
    desc: "The ultimate tool for building in the Web3 era",
    img: "https://cuberto.com/assets/projects/magma/cover.jpg",
    video: "https://cuberto.com/assets/projects/magma/cover.mp4",
  },
  {
    title: "Qvino",
    desc: "Wine marketplace with interactive learning",
    img: "https://cuberto.com/assets/projects/qvino/cover.jpg",
    video: "https://cuberto.com/assets/projects/qvino/cover.mp4",
  },
  {
    title: "Cisco",
    desc: "Cloud based network management",
    img: "https://cuberto.com/assets/projects/cisco/cover.jpg",
    video: "https://cuberto.com/assets/projects/cisco/cover.mp4",
  },
];

const leftGrid = [
  {
    title: "Punto Pago",
    desc: "The First Super-App in Latin America",
    img: "https://cuberto.com/assets/projects/puntopago/cover.jpg",
    video: "https://cuberto.com/assets/projects/puntopago/cover.mp4",
  },
  {
    title: "DaoWay",
    desc: "Astrology planner app: plan, achieve, thrive",
    img: "https://cuberto.com/assets/projects/daoway/cover.jpg",
    video: "https://cuberto.com/assets/projects/daoway/cover.mp4",
  },
  {
    title: "FlipaClip",
    desc: "The best tool for stop-motion animation",
    img: "https://cuberto.com/assets/projects/flipaclip/cover.jpg",
    video: "https://cuberto.com/assets/projects/flipaclip/cover.mp4",
  },
  {
    title: "Zelt",
    desc: "Run HR, IT & Finance in one place",
    img: "https://cuberto.com/assets/projects/zelt/cover.jpg",
    video: "https://cuberto.com/assets/projects/zelt/cover.mp4",
  },
];

const Projects = () => {
  return (
    <div className="bg-[#161616] text-white rounded-t-3xl tab:rounded-t-[4rem] pb-24">
      <h1 className="text-6xl font-semibold pt-16 max-desktop:pb-16 pl-12 tab:pl-26 tab:pt-24 xl:pl-48 xl:pt-48">Featured Projects</h1>
      <div className="flex desktop:justify-around justify-center items-center p-12 xl:px-48 desktop:py-12">
        <div className="left-grid flex flex-col gap-12 tab:gap-24">
          {leftGrid.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              desc={item.desc}
              img={item.img}
              video={item.video}
              width='80'
            />
          ))}
        </div>
        <div className="right-grid mt-60 flex flex-col gap-24 max-desktop:hidden">
          {rightGrid.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              desc={item.desc}
              img={item.img}
              video={item.video}
              width='80'
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button text="View all projects" />
      </div>
    </div>
  );
};

export default Projects;
