import { h } from "preact";
import { tw } from "twind";

import { Handlers, PageProps } from "$fresh/server.ts";
import { listProjects, loadProject } from "../utils/projects.ts";
import LikeButton from "../islands/likeButton.tsx";
import { TProject } from "../types.d.ts";

interface CProjectsProps {
  projects: TProject[];
}

export function CProjects(props: CProjectsProps) {
  const { projects } = props;
  return (
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
  );
}
