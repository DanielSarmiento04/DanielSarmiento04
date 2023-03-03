import { TBlog } from "../types.d.ts";
import { extract } from "$std/encoding/front_matter/any.ts";
import { render } from "$gfm/mod.ts";

export async function loadBlog(id: string): Promise<TBlog | null> {
  const raw: string | null = await Deno
    .readTextFile(`./content/blogs/${id}.md`)
    .catch(() => null);

  if (!raw) {
    return null;
  }

  const { attrs, body } = extract(raw);

  // declare de <string, unknown> value to manipulare
  const { date, title, description } = attrs as Record<string, string>;
  const { tags } = attrs as Record<string, string[]>;
  const { linesCode } = attrs as Record<string, number>;
  const blog: TBlog = {
    id,
    date: new Date(date),
    tags: tags,
    title: title,
    description: description,
    body: render(body),
    linesCode: linesCode,
  };

  return blog;
}

export async function listBlogs(): Promise<TBlog[]> {
  // const promise =[];
  // const regex = /\/content\/projects\/(.*)\.md/;
  const promises = [];

  const regex = /\/?(.*)\.md/;
  for await (const entry_project of Deno.readDir("./content/blogs")) {
    const result = entry_project.name.match(regex);
    const id = result ? result[1] : null;
    // If the file name don't exits successfully
    if (!id) continue;

    promises.push(loadBlog(id));
  }

  // Assume that all projects are valid
  const posts: TBlog[] = await Promise.all(promises) as TBlog[];
  // sor;
  return posts;
}
