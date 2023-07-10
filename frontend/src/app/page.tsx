import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-gradient-to-b from-zinc-200 bg-[url('C:\Users\Cecil\desktop\eBoost\frontend\src\app\assets\images\man_made_easy.jpeg')]">
      <div className="container mx-auto">
        <p className="fixed left-0 top-0 flex justify-left border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          eBoost
        </p>
      </div>
    </main>
  );
}
