import { getBlogDetail } from "@/libs/api";
import { formatDate } from "@/utils/mdFormatter";
import Markdown from "markdown-to-jsx";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type BlogDetailProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params: { slug },
}: BlogDetailProps): Promise<Metadata> => {
  const blog = await getBlogDetail(slug);
  return {
    title: `${blog.title}`,
    description: `${blog.article.substring(0, 170)}`,
    openGraph: {
      title: `${blog.title}`,
      description: `${blog.article.substring(0, 170)}`,
      images: [
        {
          url: blog.imageUrl,
          width: 800,
          height: 600,
          alt: `${blog.title}`,
        },
      ],
      type: "article",
    },
  };
};

const BlogDetail = async ({ params: { slug } }: BlogDetailProps) => {
  const blog = await getBlogDetail(slug);
  return (
    <div
      className={`mx-10 my-10 flex flex-col items-center gap-10
      `}
    >
      <h1 className="lg:w-1/2 md:w-3/4 w-full sm:text-5xl text-3xl  font-bold">
        {blog.title}
      </h1>
      <div className="flex flex-col w-full lg:w-1/2 md:w-3/4 gap-2 ">
        <div className="flex gap-2 items-center">
          {/* <Avatar name={post.author} /> */}
          <div className="flex flex-col">
            <p className="text-lg font-bold w-full">{blog?.author}</p>
            <small className=" w-full">{formatDate(blog.updatedAt)}</small>
          </div>
        </div>
        <div className="flex gap-2 align-middle items-center lg:w-1/2 md:w-3/4 w-full">
          {/* <IconEyeCheck size={24} /> */}
          <p className="mr-5">{blog.view}</p>
          {/* <IconShareLink />
                <Link
                  href={`https://api.whatsapp.com/send?text=${window.location.origin}${location.pathname}${location.search}${location.hash}`}
                  target="_blank"
                >
                  <IconBrandWhatsapp />
                </Link>
                <NavLink
                  to={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.origin}${location.pathname}${location.search}${location.hash}`}
                  target="_blank"
                >
                  <IconBrandLinkedin />
                </NavLink> */}
        </div>
        <Image
          src={blog.imageUrl}
          alt="image"
          width={900}
          height={400}
          className="lg:w-3/4 w-full h-[65vh] object-cover object-center mb-10"
        />
        <div className="text-justify lg:w-1/2 md:w-3/4 w-full">
          <Markdown
            options={{
              overrides: {},
            }}
          >
            {blog.article}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
