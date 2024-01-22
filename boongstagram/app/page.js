import Link from "next/link";

import ImageSlideShow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-[75rem] mx-auto my-16">
        <div className="w-full md:w-[30rem] h-[32rem] mx-auto">
          <ImageSlideShow />
        </div>
        <div className="text-center md:text-left mr-14">
          <div className="text-3xl font-bold text-[#451c2e] mb-4">
            붕스타그램에 오신 것을 환영합니다!
            <p className="text-2xl mt-4 text-[#1e281a]">
              Boongranii의 피드를 확인해 볼 수 있으며
              <br />
              자기 소개를 확인할 수 있습니다! <br />
              노력 뿜뿜이니 좋게 봐주시면 감사하겠습니다!
            </p>
          </div>
          <div className="flex flex-col gap-4 md:justify-start">
            <Link href="introduce" className="btn btn-neutral">
              Boong's Intro
            </Link>
            <Link href="story" className="btn btn-error">
              Boong's Feed
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-2xl text-center mx-auto my-8 pb-12">
          <h2 className="text-3xl font-bold">
            최고의 열정을 뽐내는 Boongranii
          </h2>
          <p className="mt-8">
            안녕하세요! 최고의 열정을 뽐내는 Boongranii입니다.
            <br /> 열정은 매사 500% 이상을 내려고 노력합니다. <br />
            하지만 노력만으로는 성공할 수 없기 때문에 열심히 공부하려고 합니다.
            <br />
            어디서나 필요로 하는 프론트엔드 개발자가 되도록 노력하겠습니다.🥇{" "}
            <br />
            No pain, no gain
          </p>
        </section>
      </main>
    </>
  );
}
