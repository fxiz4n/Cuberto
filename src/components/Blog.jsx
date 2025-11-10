import React from "react";
import BlogCard from "./ui/BlogCard";
import Button from "./ui/Button";

const cards = [
  {
    img: "https://cuberto.com/assets/uploads/54299d9789b57642a5b0bd39efb37175_03a4f580f1_w1080.webp",
    title: "How to Make UI/UX website",
    subject: "// Frontend development",
    date: "14/10/2025",
    category: "Design Course",
  },
  {
    img: "https://cuberto.com/assets/uploads/0dc60d465222db37738a6e2222207dce_0175db0d83_w1080.webp",
    title: "How to Cook an Emotional Site",
    subject: "// Web development",
    date: "04/08/2024",
    category: "Design Course",
  },
  {
    img: "https://cuberto.com/assets/uploads/016aefcc0949accfcd0c31034dec17d6_d25cd7a401_w1080.webp",
    title: "Cuberto Mouse Follower",
    date: "25/12/2025",
    category: "Dev Source",
  },
];

const Blog = () => {
  return (
    <div className="bg-black text-white rounded-t-[4rem] pb-36">
      <h1 className="text-6xl font-semibold pl-48 pt-48 pb-24">Blog</h1>
      <div className=" flex flex-col gap-10">
        {cards.map((item, index) => (
          <BlogCard
            key={index}
            img={item.img}
            title={item.title}
            subject={item.subject}
            date={item.date}
            category={item.category}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-24">
        <Button text="Visit Our Blog" />
      </div>
    </div>
  );
};

export default Blog;
