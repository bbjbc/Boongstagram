import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.png";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
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
            <NavLink href="/story">My Story</NavLink>
          </li>
          <li>
            <NavLink href="/introduce">Introduce</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
