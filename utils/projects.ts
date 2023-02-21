import { TProject } from "../types.d.ts";
import { extract } from "$std/encoding/front_matter/any.ts";
import { render } from "$gfm/mod.ts";
import { Regex } from "https://deno.land/x/regexbuilder/mod.ts";

export async function loadProject(id: string): Promise<TProject | null> {
  const raw: string | null = await Deno
    .readTextFile(`./content/projects/${id}.md`)
    .catch(() => null);

  if (!raw) {
    return null;
  }

  const { attrs, body } = extract(raw);

  // declare de <string, unknown> value to manipulare
  const params = attrs as Record<string, string>;

  const project: TProject = {
    id,
    date: new Date(params.date),
    excerpt: params.excerpt,
    title: params.title,
    body: render(body),
  };

  return project;
}

// const name_file = Regex().

export async function listProjects(): Promise<TProject[]> {
  // const promise =[];
  const regex = /\/content\/projects\/(.*)\.md/;
  for await (const entry_project of Deno.readDir("./content/projects")) {
    const result = entry_project.name.match(regex);
    console.log(result);
    console.log(entry_project);
  }
}

await listProjects();
