import React from "react";

const BlogCard = (props) => {
  return (
    <div className="w-[70%]">
      <div className="flex items-center flex-col desktop:flex-row gap-16">
        <div>
          <img
            src={props.img}
            alt={`${props.title}-${props.idx+1}`}
            className="h-60 w-full tab:w-160 rounded-2xl"
          />
        </div>
        <div className="flex w-full h-60 flex-col justify-around gap-4">
          <div className="border w-fit py-1 px-2 rounded-full text-sm uppercase">
            {props.category}
          </div>
          <h1 className="text-2xl tab:text-3xl desktop:text-4xl">{props.title} <br /> {props.subject}</h1>
          <p className="text-gray-500">{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
