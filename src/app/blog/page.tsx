import React from "react";
import { getBlogList } from "@/libs/api";
import { Card } from "@/Components/Card";
import Link from "next/link";

const Blog = async () => {
  const blogs = await getBlogList();

  const categories = [
    { value: "news", text: "News" },
    { value: "fun fact", text: "Fun Fact" },
    { value: "experience", text: "Experience" },
    { value: "tips and tricks", text: "Tips & Tricks" },
  ];

  return (
    <>
      <div className="mx-5 my-5 flex justify-center items-center flex-col gap-4 divide-y">
        <div className="flex  justify-around w-full  lg:w-1/2">
          {categories.map((category, i) => (
            <Link
              href={`/blog/?category=${category.value}`}
              className=""
              key={i}
            >
              <small>{category.text}</small>
            </Link>
          ))}
        </div>
        <Card blogs={blogs} />
      </div>
    </>
  );
};

export default Blog;
