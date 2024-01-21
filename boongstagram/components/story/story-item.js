import Image from "next/image";
import Link from "next/link";

export default function StoryFeed({ title, slug, image, date }) {
  return (
    <article className="flex flex-col justify-between rounded-md shadow-md text-[black]">
      <header>
        <div className="relative h-80">
          <Image src={image} alt={title} fill className="rounded-lg" />
        </div>
        <div className="p-2">
          <h2 className="m-0 text-1.5xl font-extrabold">{title}</h2>
          <p className="text-sm italic">{date}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <div className="p-2 text-right">
          <Link href={`/story/${slug}`} className="btn btn-success">
            자세히 보기
          </Link>
        </div>
      </div>
    </article>
  );
}
