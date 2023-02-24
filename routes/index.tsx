import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

import { listProjects, loadProject } from "../utils/projects.ts";
import { TProject } from "../types.d.ts";

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
      <div>
        <h1>Projects</h1>
        {projects.map((project: TProject) => (
          <div>
            <h2>{project.title}</h2>

            <time>
              {Intl.DateTimeFormat("es", { timeZone: "GMT" })
                .format(
                  project.date,
                )}
            </time>
          </div>
        ))}
      </div>
      <div class="card border-0">
        <div class="position-relative text-white">
          <div class="card-img-overlay three">
            <span class="badge badge-light text-uppercase">Famous</span>
          </div>

          <div class="--card-smooth-caption">
            <div class="d-flex justify-content-between align-items-center">
              <div class="mr-auto">
                <h5 class="card-title text-white">Smooth caption</h5>
                <h6 class="card-subtitle text-white">Alternative caption</h6>
              </div>
            </div>
          </div>
        </div>

        <div class="card-body">
          <p class="card-text">
            Minim dolor in amet nulla laboris enim dolore consequat proident
            fugiat culpa eiusmod proident sed excepteur excepteur magna irure ex
            officia ea sunt in incididunt.
          </p>
        </div>

        <div class="card-footer">
          <div class="media align-items-center">
            <div class="media-body">
              <a class="card-link text-primary read-more" href="javascript://">
                Read More
              </a>
            </div>
            <div class="footerright">
              <div class="tnlink3">
                <i class="fas fa-heart" aria-hidden="true"></i>
              </div>
              <div class="tnlink3">
                <i class="fas fa-share-nodes" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
