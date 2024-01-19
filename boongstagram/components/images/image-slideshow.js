"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import firstImg from "@/assets/first.jpg";
import secondImg from "@/assets/second.jpg";
import thirdImg from "@/assets/third.jpg";
import fourthImg from "@/assets/fourth.jpg";
import fifthImg from "@/assets/fifth.jpg";
import sixthImg from "@/assets/sixth.jpg";
import seventhImg from "@/assets/seventh.jpg";
import eighthImg from "@/assets/eighth.jpg";
import ninthImg from "@/assets/ninth.jpg";
import tenthImg from "@/assets/tenth.jpg";
import eleventhImg from "@/assets/eleventh.jpg";
import twelfthImg from "@/assets/twelfth.jpg";
import thirteenthImg from "@/assets/thirteenth.jpg";
import fourteenthImg from "@/assets/fourteenth.jpg";
import fifteenthImg from "@/assets/fifteenth.jpg";
import sixteenthImg from "@/assets/sixteenth.jpg";
import seventeenthImg from "@/assets/seventeenth.jpg";
import eighteenthImg from "@/assets/eighteenth.jpg";

const images = [
  { image: firstImg, alt: "first" },
  { image: secondImg, alt: "second" },
  { image: thirdImg, alt: "third" },
  { image: fourthImg, alt: "fourth" },
  { image: fifthImg, alt: "fifth" },
  { image: sixthImg, alt: "sixth" },
  { image: seventhImg, alt: "seventh" },
  { image: eighthImg, alt: "eighth" },
  { image: ninthImg, alt: "ninth" },
  { image: tenthImg, alt: "tenth" },
  { image: eleventhImg, alt: "eleventh" },
  { image: twelfthImg, alt: "twelfth" },
  { image: thirteenthImg, alt: "thirteenth" },
  { image: fourteenthImg, alt: "fourteenth" },
  { image: fifteenthImg, alt: "fifteenth" },
  { image: sixteenthImg, alt: "sixteenth" },
  { image: seventeenthImg, alt: "seventeenth" },
  { image: eighteenthImg, alt: "eighteenth" },
];

export default function ImageSlideShow() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIdx) =>
        prevIdx < images.length - 1 ? prevIdx + 1 : 0
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] rounded-lg">
      {images.map((image, idx) => (
        <Image
          key={idx}
          src={image.image}
          alt={image.alt}
          className={`w-full h-full object-cover absolute opacity-0 translate-x-[-1rem] rotate-[-5deg] transition-all duration-[0.5s] ease-[ease-in-out] scale-110 left-0 top-0 ${
            idx === imageIndex
              ? "z-[1] opacity-100 translate-x-0 rotate-[0] scale-100"
              : ""
          }`}
          priority
        />
      ))}
    </div>
  );
}
