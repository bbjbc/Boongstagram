import Image from "next/image";
import Link from "next/link";

export default function StoryFeed({ title, slug, image, summary, date }) {
  return (
    <article className="flex flex-col justify-between h-full rounded-md shadow-md overflow-hidden transition-all duration-300 ease-in-out text-gray-300 bg-gradient-to-r from-brown-900 to-green-900">
      <header>
        <div className="relative h-60">
          <Image src={image} alt={title} fill />
        </div>
        <div className="p-2">
          <h2 className="m-0 text-1.5xl">{title}</h2>
          <p className="text-xs text-cfa69b italic">{date}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="p-2">{summary}</p>
        <div className="p-2 text-right">
          <Link
            href={`/story/${slug}`}
            className="inline-block mt-4 px-4 py-2 rounded bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold no-underline hover:bg-gradient-to-r hover:from-orange-700 hover:to-yellow-700 hover:shadow-md active:bg-gradient-to-r active:from-red-700 active:to-yellow-700 active:shadow-md"
          >
            자세히 보기
          </Link>
        </div>
      </div>
    </article>
  );
}
