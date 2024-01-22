import Image from "next/image";
import Link from "next/link";

import { PiInstagramLogoDuotone } from "react-icons/pi";
import { FaGithubAlt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import quokka from "@/assets/icons/giphy.gif";

export const metadata = {
  title: "Introduce",
  description: "Boongranii의 소개를 확인할 수 있습니다!",
};

export default function IntroducePage() {
  return (
    <div className="flex items-center justify-center flex-col space-y-8 max-w-screen-lg mx-auto pb-10">
      <Image
        src={quokka}
        alt="My favorite Characters"
        width={450}
        height={450}
      />

      <h1 className="text-center text-4xl font-extrabold">안녕하세요!</h1>
      <p className="text-center text-3xl font-extrabold">
        저는 프론트엔드 개발자를 꿈꾸는 Boongranii입니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <h1 className="text-3xl font-bold mb-4">Language</h1>
          <p className="text-lg mb-4">
            <RiJavascriptFill className="w-20 h-20 inline-block mr-2" />
            <SiExpress className="w-20 h-20 inline-block mr-2" />
            <IoLogoNodejs className="w-20 h-20 inline-block mr-2" />
            <FaReact className="w-20 h-20 inline-block mr-2" />
            <SiNextdotjs className="w-20 h-20 inline-block" />
          </p>
          <p className="text-lg font-bold">
            JavaScript, Express, Node, React를 주로 다루는 언어입니다. 항상
            새로운 기술에 대한 관심을 가지고 있으며, 지속적인 학습을 통해
            성장하고 있습니다. <br />
            최근에는 Next도 공부하며 흥미를 느끼고 있습니다.
            <br />
            Boongstagram도 마찬가지로 Next로 이루어진 웹사이트입니다!
          </p>
        </div>

        <div className="col-span-1">
          <h1 className="text-3xl font-bold mb-4">Site</h1>
          <p className="text-lg mb-4">
            <Link href="https://www.instagram.com/boongranii">
              <PiInstagramLogoDuotone className="w-20 h-20 inline-block mr-2" />
            </Link>
            <Link href="https://bbjbc.github.io/">
              <FaGithubAlt className="w-20 h-20 inline-block" />
            </Link>
          </p>
          <p className="text-lg font-bold">
            인스타그램과 공부 내용을 기록하는 공부 블로그에서 제 소식을 확인하실
            수 있습니다. 인스타그램에서는 일상 속 저만의 이야기와 흥미로운
            일상에 대한 소식을 공유하고 있어요.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <h1 className="text-3xl font-bold mb-4">Certificate</h1>
          <div className="flex space-x-4 mb-4">
            <div className="flex items-baseline">
              <span className="rounded-md bg-blue-500 p-2 text-white font-semibold">
                SQLD
              </span>
              <sub className="align-bottom ml-1">22/09/30</sub>
            </div>
            <div className="flex items-baseline">
              <span className="rounded-md bg-orange-800 p-2 text-white font-semibold">
                CSTS(FL)
              </span>
              <sub className="align-bottom ml-1">23/03/20</sub>
            </div>
          </div>
          <p className="text-lg font-bold">
            현재는 SQLD와 CSTS(FL) 자격증을 보유하고 있습니다. <br />
            다가오는 정보처리기사 자격증에 도전 예정입니다.
          </p>
        </div>

        <div className="col-span-1">
          <h1 className="text-3xl font-bold mb-4">Contact</h1>
          <p className="text-lg font-bold">
            언제든지 연락 주시면 감사하겠습니다. 저의 이메일 주소는
            <a
              href="mailto:aoo4550@naver.com"
              className="hover:text-violet-600 text-stone-700"
            >
              aoo4550@naver.com
            </a>
            입니다. 어떤 프로젝트든 함께하고 싶으며, 새로운 도전에 열려있습니다.
            감사합니다!
          </p>
        </div>
      </div>
    </div>
  );
}
