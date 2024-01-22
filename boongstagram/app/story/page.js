import Link from "next/link";
import { Suspense } from "react";

import { getStory } from "@/lib/story";
import StoryGrid from "@/components/story/story-grid";
import Loading from "@/components/loading/loading";

export const metadata = {
  title: "My Story",
  description: "Boongranii의 피드를 구경할 수 있습니다!",
};

export async function Story() {
  const story = await getStory();

  return <StoryGrid story={story} />;
}

export default function StoryPage() {
  return (
    <>
      <header className="gap-12 mx-48 my-16 w-90p max-w-75rem text-lg">
        <h1 className="font-extrabold text-4xl mb-8">
          Boongranii의 피드에 오신 여러분들 환영합니다!
        </h1>
        <p className="text-2xl">
          인스타그램에서 가져온 다양한 순간들을 담은 피드를 펼쳐보세요!
          <br />
          럭셔리한 일상과 특별한 순간들을 담은 다양한 피드를 통해 Boongranii의
          세계에 빠져보세요🌟
          <br /> 언제나 모두의 관심과 사랑에 감사드리며, 함께 특별한 순간을
          나누어 보아요!🌈✨
        </p>
        <p className="mt-4">
          <Link
            href="/story/upload"
            className="btn btn-ouline btn-warning text-xl"
          >
            나만의 스토리 추가
          </Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<Loading />}>
          <Story />
        </Suspense>
      </main>
    </>
  );
}
