import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "TAILMS - Every Child Deserves a Second Chance. An NGO dedicated to providing support, resources, and opportunities for children in need.",
  openGraph: {
    title: "TAILMS - Every Child Deserves a Second Chance",
    description: "TAILMS is an NGO dedicated to giving every child a second chance. We provide support, resources, and opportunities for children in need.",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-black dark:text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          TAILMS
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 sm:text-xl md:text-2xl">
          Every child deserves a second chance
        </p>
      </main>
    </div>
  );
}
