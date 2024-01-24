"use client";

import { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

import classes from "./image-slide.module.css";
import Image from "next/image";

export default function ImageSlide({ image, alt }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={classes["image-slider"]}>
      <div
        className={classes["image-container"]}
        style={{
          transform: `translateX(${-currentImageIndex * 100}%)`,
        }}
      >
        {Array.isArray(image) ? (
          image.map((img, index) => (
            <div key={index} className={classes["image-item"]}>
              <Image
                src={`https://boongranii-nextjs-boongstagram.s3.ap-northeast-2.amazonaws.com/${img}`}
                alt={alt}
                width={500}
                height={480}
                className="rounded-xl"
                priority
              />
            </div>
          ))
        ) : (
          <Image
            key={alt}
            src={`https://boongranii-nextjs-boongstagram.s3.ap-northeast-2.amazonaws.com/${image}`}
            alt={alt}
            width={500}
            height={480}
            className={classes["image-item"]}
          />
        )}
      </div>
      {Array.isArray(image) && image.length > 1 && (
        <>
          <button onClick={prevImage} className={classes["prev-button"]}>
            <IoIosArrowDropleft className="size-8" />
          </button>
          <button onClick={nextImage} className={classes["next-button"]}>
            <IoIosArrowDropright className="size-8" />
          </button>
        </>
      )}
    </div>
  );
}
