import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex h-full w-full place-items-center justify-center font-bold text-black">
        Test
      </main>
    </HydrateClient>
  );
}
