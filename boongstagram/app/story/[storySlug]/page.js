import Image from "next/image";
import { notFound } from "next/navigation";

import { getStory } from "@/lib/story";

export function generateMetadata({ params }) {
  const story = getStory(params.storySlug);

  if (!story) {
    notFound();
  }

  return {
    title: story.title,
    description: story.summary,
  };
}

export default function StoryDetailsPage({ params }) {
  const story = getStory(params.storySlug);

  if (!story) {
    notFound();
  }

  return (
    <>
      <header className="flex items-center justify-center mb-8">
        <div className="text-center">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="w-64 h-64 object-cover rounded-full"
          />
        </div>
        <div className="ml-8 text-left">
          <h1 className="text-4xl font-bold mb-2">{story.title}</h1>
          <p className="text-sm text-[black]">{story.date}에 작성됨</p>
        </div>
      </header>
      <main className="bg-gray-100 p-4 rounded">
        <p
          className="text-lg"
          dangerouslySetInnerHTML={{
            __html: story.summary,
          }}
        ></p>
      </main>
    </>
  );
}
