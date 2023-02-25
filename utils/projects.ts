import { TProject } from "../types.d.ts";
import { extract } from "$std/encoding/front_matter/any.ts";
import { render } from "$gfm/mod.ts";

export async function loadProject(id: string): Promise<TProject | null> {
  const raw: string | null = await Deno
    .readTextFile(`./content/projects/${id}.md`)
    .catch(() => null);

  if (!raw) {
    return null;
  }

  const { attrs, body } = extract(raw);

  // declare de <string, unknown> value to manipulare
  const { date, title, description } = attrs as Record<string, string>;
  const { tags } = attrs as Record<string, string[]>;
  const project: TProject = {
    id,
    date: new Date(date),
    tags: tags,
    title: title,
    description: description,
    body: render(body),
  };

  return project;
}

// const name_file = Regex().

export async function listProjects(): Promise<TProject[]> {
  // const promise =[];
  // const regex = /\/content\/projects\/(.*)\.md/;
  const promises = [];

  const regex = /\/?(.*)\.md/;
  for await (const entry_project of Deno.readDir("./content/projects")) {
    const result = entry_project.name.match(regex);
    const id = result ? result[1] : null;
    // If the file name don't exits successfully
    if (!id) continue;

    promises.push(loadProject(id));
  }

  // Assume that all projects are valid
  const posts: TProject[] = await Promise.all(promises) as TProject[];
  // sor;
  return posts;
}

// console.log(
//   // await loadProject("main"),
//   await listProjects(),
// );
