import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin, IoSunnySharp } from "react-icons/io5";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <nav className="grid h-16 w-full grid-cols-3">
        <section className="flex place-items-center bg-red-500 px-2">
          <Link href="">Logo</Link>
        </section>
        <section className="flex place-items-center justify-center gap-2 bg-sky-500">
          <Link href="">Home</Link>
          <Link href="">Shop</Link>
          <Link href="" className="animate-pulse font-bold text-red-500">
            Claim!
          </Link>
          <Link href="">Collection</Link>
        </section>
        <section className="flex place-items-center justify-end gap-2 bg-yellow-500 px-2">
          <button>
            <IoSunnySharp className="h-5 w-5" />
          </button>
          <Link href="">
            <IoLogoLinkedin className="h-5 w-5" />
          </Link>
          <Link href="">
            <IoLogoGithub className="h-5 w-5" />
          </Link>
        </section>
      </nav>
      <main className="flex h-full w-full flex-col">
        <h1>3D Figures</h1>
      </main>
      <footer></footer>
    </HydrateClient>
  );
}
