import { notFound } from "next/navigation";

import { getStoryDetail } from "@/lib/story";
import ImageSlide from "@/components/images/image-slide";

export async function generateMetadata({ params }) {
  const story = await getStoryDetail(params.storySlug);

  if (!story) {
    notFound();
  }

  return {
    title: story.title,
    description: story.summary,
  };
}

export default async function StoryDetailsPage({ params }) {
  const story = await getStoryDetail(params.storySlug);

  if (!story) {
    notFound();
  }

  story.summary = story.summary.replace(/\n/g, "<br />");

  return (
    <>
      <header className="flex items-center justify-center mt-10 mb-8 mx-20 flex-col text-center">
        <div>
          <ImageSlide image={story.image} alt={story.title} />
        </div>
        <div className="ml-8 mt-4 text-left">
          <h1 className="text-4xl font-bold mb-2">{story.title}</h1>
          <p className="text-sm text-[black]">{story.date}에 작성됨</p>
        </div>
      </header>
      <div className="pb-4">
        <div className="relative bg-gradient-to-r from-green-700 to-lime-600 rounded-lg p-8 mx-auto my-12 w-2/4 text-center">
          <p
            className="text-lg leading-relaxed text-white"
            dangerouslySetInnerHTML={{
              __html: story.summary,
            }}
          ></p>
          <div className="absolute top-0 left-0 p-4">
            <p className="text-sm italic text-white">Content</p>
          </div>
        </div>
      </div>
    </>
  );
}
