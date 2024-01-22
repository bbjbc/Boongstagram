import Image from "next/image";
import Link from "next/link";

import { BsGithub } from "react-icons/bs";
import logoImg from "@/assets/icons/logo.png";
import NavLink from "./nav-link";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center px-6 py-8 md:px-[10%] md:py-8">
        <Link
          href="/"
          className="flex items-center justify-center gap-6 no-underline text-[#302f2f] font-extrabold uppercase text-2xl"
        >
          <Image
            src={logoImg}
            alt="Boongranii"
            className="rounded-full w-14 h-14"
            priority
          />
          Boongstagram
        </Link>

        <nav className="flex gap-6 text-xl m-0 p-0">
          <ul className="flex">
            <li>
              <Link
                href="https://github.com/bbjbc"
                className="relative inline-block overflow-hidden rounded-full group mr-4"
              >
                <BsGithub className="w-8 h-8" />
                <span className="absolute inset-0 bg-[#ff8a05] opacity-0 group-hover:opacity-40 transition-opacity"></span>
              </Link>
            </li>
            <li>
              <NavLink href="/story">My Story</NavLink>
            </li>
            <li>
              <NavLink href="/introduce">Introduce</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
