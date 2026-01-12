import Image from "next/image";
import CodeBox from "./components/CodeBox";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-gray-900 ">
      <div className="w-1/2 flex justify-center items-center flex-col gap-5">
        <h1 className="text-6xl text-center font-sans">Navigate the world of web novels with live data</h1>
        <CodeBox code="pip install novel-updates-scraper"/>
        <div className="flex gap-3 w-3/5 justify-center items-stretch text-center">
          <Link href="/docs" className="flex justify-center items-center text-lg bg-black py-2 px-5 rounded-4xl cursor-pointer animate-spin-slow w-1/2">Explore the Docs</Link>
          <Link href="https://github.com/woodyistaken/novel_updates_scraper" target="_blank" className="flex justify-center items-center text-lg bg-gray-100 py-2 px-5 rounded-4xl gap-2 text-black w-1/2 cursor-pointer"><img src="/github-mark.png" className="h-10 object-contain"/>GitHub</Link>
        </div>
      </div>
    </div>
  );
}
