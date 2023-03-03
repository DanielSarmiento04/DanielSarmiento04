import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { listProjects, loadProject } from "../utils/projects.ts";
import { TProject } from "../types.d.ts";

import LikeButton from "../islands/likeButton.tsx";
import { CProjects } from "../components/CProjects.tsx";
export const handler: Handlers = {
  async GET(request: Request, context) {
    const projects = await listProjects();
    return context.render({ projects });
  },
};

export default function Home(props: PageProps) {
  const { data } = props;
  const { projects }: { projects: TProject[] } = data;

  return (
    <div>
      <Head>
        <title>Daniel Sarmiento</title>
      </Head>

      <h1>Projects</h1>
      <CProjects projects={projects} />
    </div>
  );
}
