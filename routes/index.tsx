import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Sarmiento</title>
      </Head>
      <main class="max-w-screen-2xl p-4">
        <h1 class="text-2xl">Esto ya funciona.</h1>
        <a class="underline hover:text-blue-500" href="/project/hello-world">
          Entra a este proyecto
        </a>
      </main>
    </div>
  );
}
