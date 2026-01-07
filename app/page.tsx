import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "TAILMS - Tech & Innovation Learning Management System. Providing offline tech skill training to youth in juvenile correctional facilities. Empowering adolescents with coding, web development, and digital skills.",
  openGraph: {
    title: "TAILMS - Empowering Youth Through Tech Education",
    description: "Offline Learning Management System providing tech skill training to youth in juvenile correctional facilities. Teaching coding, web development, and digital skills to give every child a second chance.",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          TAILMS
        </h1>
        <p className="mt-6 text-lg font-medium text-gray-700 dark:text-gray-300 sm:text-xl md:text-2xl lg:text-3xl">
          Tech & Innovation Learning Management System
        </p>
        <p className="mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl">
          Empowering youth through tech education. Every child deserves a second chance.
        </p>
      </main>
    </div>
  );
}
