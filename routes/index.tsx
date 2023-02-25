import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { listProjects, loadProject } from "../utils/projects.ts";
import { TProject } from "../types.d.ts";

import LikeButton from "../components/like.tsx";

export const handler: Handlers = {
  async GET(request: Request, context) {
    const projects = await listProjects();
    return context.render({ projects });
  },
};

export default function Home(props: PageProps) {
  const { data } = props;
  const { projects } = data;

  return (
    <div>
      <Head>
        <title>Daniel Sarmiento</title>
      </Head>

      <h1>Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project: TProject) => (
          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-4 ml-4">
            <a
              href={`project/${project.id}`}
              target="_black"
              rel="noopener noreferrer"
            >
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{project.title}</div>
                <p class="text-gray-600 text-sm mt-2">
                  {Intl.DateTimeFormat("es", {
                    timeZone: "GMT",
                  }).format(project.date)}
                </p>
                <p class="text-gray-700 text-base">
                  {project.description}
                </p>
              </div>
              <div class="px-4 py-4 flex items-center justify-between">
                <div class="flex ">
                  {project.tags.map((tag) => (
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
