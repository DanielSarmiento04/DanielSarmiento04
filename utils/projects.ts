import { TProject } from "../types.d.ts";
import { extract } from "$std/encoding/front_matter/any.ts";

export async function loadProject(id: string): Promise<TProject | null> {
  let raw: string;
  try {
    raw = await Deno.readTextFile(`./content/projects/${id}.md`);
  } catch {
    return null;
  }
  const { attrs, body, frontMatter } = extract(raw);

  // declare de <string, unknown> value to manipulare
  const params = attrs as Record<string, string>;

  const project: TProject = {
    id,
    date: new Date(params.date),
    excerpt: params.excerpt,
    title: params.title,
    body,
  };
  return project;
}
