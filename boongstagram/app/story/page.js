import StoryFeed from "@/components/story/story-item";
import Link from "next/link";

export const metadata = {
  title: "My Story",
  description: "Boongranii의 피드를 구경할 수 있습니다!",
};

export default function StoryPage() {
  return (
    <>
      <header className="gap-12 mx-auto my-16 w-90p max-w-75rem text-lg">
        <h1>Boongranii의 피드를 구경해요!</h1>
        <p className="m-0">
          인스타그램에 있는 피드를 가져 왔습니다. 모든 피드를 즐겨주세요!
        </p>
        <p className="mt-4">
          <Link
            href="/story/share"
            className="inline-block mt-4 px-4 py-2 rounded bg-gradient-to-r from-orange-500 to-yellow-500 font-bold no-underline"
          >
            나만의 스토리 추가
          </Link>
        </p>
      </header>
      <main className="main">
        <StoryFeed />
      </main>
    </>
  );
}
