import { Handlers, PageProps } from "$fresh/server.ts";
import { loadProject } from "../../utils/projects.ts";
import { TProject } from "../../types.d.ts";
import { CSS } from "$gfm/mod.ts";

export const handler: Handlers = {
  async GET(request: Request, context) {
    const { id } = context.params;
    const project = await loadProject(id);

    return context.render({ project });
  },
};

export default function PagePost(props: PageProps) {
  const project: TProject = props?.data.project;

  return (
    <article class="p-4">
      <h1 class="text-2xl font-bold">
        {project.title}
      </h1>
      {/* refer to Colombia  */}
      <time>{Intl.DateTimeFormat("co").format(project.date)}</time>
      <style dangerouslySetInnerHTML={{ __html: CSS }}></style>
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: project.body }}
      >
      </div>
    </article>
  );
}
