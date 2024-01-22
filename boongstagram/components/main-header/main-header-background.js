import Image from "next/image";

import backSvg from "@/assets/icons/background.svg";

export default function MainHeaderBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <Image src={backSvg} alt="Background Image" fill objectFit="cover" />
    </div>
  );
}
