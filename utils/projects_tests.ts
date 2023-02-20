import { loadProject } from "./projects.ts";
import { assertEquals } from "$std/testing/asserts.ts";

Deno.test("loadProject", async () => {
  const result = await loadProject("prueba");
  assertEquals(result, null);
});

Deno.test("loadProject return a a post object if post does extis", async () => {
  const result = await loadProject("main");
  console.log(result);
  assertEquals(result?.id, "main");
});
