import React from "react";

const BlogCard = (props) => {
  return (
    <div>
      <div className="flex items-center pl-48 pr-24">
        <div>
          <img
            src={props.img}
            alt="Blog-1"
            className="h-60 w-full rounded-2xl"
          />
        </div>
        <div className="flex h-60 p-8 flex-col justify-between">
          <div className="border w-fit py-1 px-2 rounded-full text-sm uppercase">
            {props.category}
          </div>
          <h1 className="text-4xl">{props.title} <br /> {props.subject}</h1>
          <p className="text-gray-500">{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
