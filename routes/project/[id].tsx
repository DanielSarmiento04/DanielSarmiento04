import { Handlers, PageProps } from "$fresh/server.ts";
import { loadProject } from "../../utils/projects.ts";
import { TProject } from "../../types.d.ts";

export const handler: Handlers = {
  async GET(request: Request, context) {
    const { id } = context.params;
    const project = await loadProject(id);

    return context.render({ project });
  },
};

export default function PagePost(props: PageProps) {
  const project: TProject = props?.data.project;
  console.log({ props });
  return (
    <article class="p-4">
      <h1 class="text-2xl font-bold">
        {project.title}
      </h1>
      <p class="text-lg">
        {project.body}
      </p>
    </article>
  );
}
