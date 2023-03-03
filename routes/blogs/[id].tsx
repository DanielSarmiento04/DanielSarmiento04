import { Handlers, PageProps } from "$fresh/server.ts";
import { loadBlog } from "../../utils/blogs.ts";
import { TBlog } from "../../types.d.ts";
import { CSS } from "$gfm/mod.ts";

export const handler: Handlers = {
  async GET(request: Request, context) {
    const { id } = context.params;
    const blog = await loadBlog(id);

    return context.render({ blog });
  },
};

export default function PagePost(props: PageProps) {
  const blog: TBlog = props?.data.blog;

  return (
    <article class="p-4">
      <h1 class="text-2xl font-bold">
        {blog.title}
      </h1>
      {/* refer to Colombia  */}
      <time>{Intl.DateTimeFormat("co").format(blog.date)}</time>
      <style dangerouslySetInnerHTML={{ __html: CSS }}></style>
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: blog.body }}
      >
      </div>
    </article>
  );
}
