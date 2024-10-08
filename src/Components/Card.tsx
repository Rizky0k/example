// import Blog from "@/app/blog/page";
import { CustHeading2 } from "@/utils/Heading";
import { countDown, preprocessMarkdown } from "@/utils/mdFormatter";
import PlainTextMd from "@/utils/PlainTextMd";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type cardProps = {
  blogs: {
    title: string;
    article: string;
    slug: string;
    category: string;
    imageUrl: string;
    imageName: string;
    createdAt: string;
  }[];
};

export const Card = ({ blogs }: cardProps) => {
  {
    // console.log(blogs);
  }
  return (
    <>
      {blogs.map((blog, i: number) => (
        <div className="p-7 flex flex-col gap-5 lg:w-1/2 w-full" key={i}>
          <Link
            href={`/blog/${blog.slug}`}
            className="flex flex-col gap-3 cursor-pointer w-fit "
          >
            <div className="relative">
              <Image
                src={blog.imageUrl || ""}
                alt={blog.imageName || "image"}
                width={500}
                height={400}
                className="h-[40vh] w-full lg:min-w-[46vw] object-cover object-center"
              />

              <p
                className={` tracking-wide absolute bottom-2 right-2 font-bold text-sm px-3 py-1 bg-white/80 text-black `}
              >
                {blog.category}
              </p>
            </div>
            <h1 className="font-bold text-2xl mt-4">{blog.title}</h1>
            <div className="text-lg text-justify">
              <Markdown
                options={{
                  overrides: {
                    a: {
                      component: PlainTextMd,
                    },
                    h2: {
                      component: CustHeading2,
                    },
                  },
                }}
              >
                {preprocessMarkdown(
                  blog.article.length > 200
                    ? `${blog.article.substring(0, 150)}...`
                    : blog.article
                )}
              </Markdown>
            </div>
          </Link>
          <div className="flex justify-between">
            <span className="">{countDown(blog.createdAt)}</span>
          </div>
        </div>
      ))}
    </>
  );
};
