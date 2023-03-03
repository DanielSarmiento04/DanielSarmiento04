import { h } from "preact";
import { tw } from "twind";

import { Handlers, PageProps } from "$fresh/server.ts";
import LikeButton from "../islands/likeButton.tsx";
import { TBlog } from "../types.d.ts";

interface CBlogsProps {
  blogs: TBlog[];
}

export function CBlogs(props: CBlogsProps) {
  const { blogs } = props;
  return (
    <div class="flex flex-col justify-center items-center">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {blogs.map((blog: TBlog, index: number) => (
          <div
            class={`max-w-sm rounded overflow-hidden shadow-lg bg-white mb-4 ml-4 ${
              index === blogs.length - 1 ? "justify-self-end" : ""
            }`}
            key={blog.id}
          >
            <a
              href={`blog/${blog.id}`}
              target="_black"
              rel="noopener noreferrer"
            >
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{blog.title}</div>
                <p class="text-gray-600 text-sm mt-2">
                  {Intl.DateTimeFormat("es", {
                    timeZone: "GMT",
                  }).format(blog.date)}
                </p>
                <p class="text-gray-700 text-base">
                  {blog.description}
                </p>
              </div>
              <div class="px-4 py-4 flex items-center justify-between">
                <div class="flex ">
                  {blog.tags.map((tag) => (
                    <span class="inline-block bg-gray-200 rounded-full px-6 py-1 text-sm font-semibold text-gray-700 ">
                      {tag}
                    </span>
                  ))}
                </div>
                <LikeButton />
              </div>
            </a>
            {/* <img class="w-full" src="https://source.unsplash.com/random/400x200" alt="Random image"> */}
          </div>
        ))}
      </div>
    </div>
  );
}
