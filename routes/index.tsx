import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { listProjects, loadProject } from "../utils/projects.ts";
import { listBlogs, loadBlog } from "../utils/blogs.ts";
import { TBlog, TProject } from "../types.d.ts";

import LikeButton from "../islands/likeButton.tsx";
import { CProjects } from "../components/CProjects.tsx";
import { CBlogs } from "../components/CBlogs.tsx";

export const handler: Handlers = {
  async GET(request: Request, context) {
    const projects = await listProjects();
    const blogs = await listBlogs();

    return context.render({ projects, blogs });
  },
};

export default function Home(props: PageProps) {
  const { data } = props;
  const { projects, blogs }: { projects: TProject[]; blogs: TBlog[] } = data;

  return (
    <div>
      <Head>
        <title>Daniel Sarmiento</title>
      </Head>
      <h2 class="text-2xl font-bold text-center">Blogs</h2>

      <CBlogs blogs={blogs} />

      <h2 class="text-2xl font-bold text-center">Projects</h2>
      <CProjects projects={projects} />
    </div>
  );
}
