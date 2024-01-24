"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ name }) {
  const [pickedImages, setPickedImages] = useState([]);
  const imageInput = useRef();

  const imageChangeHandler = (event) => {
    const files = event.target.files;

    if (!files || files.length === 0) {
      setPickedImages([]);
      return;
    }

    const newImages = Array.from(files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setPickedImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <div>
      <p className="text-md">
        {pickedImages.length !== 0 ? "선택한 이미지입니다." : ""}
      </p>
      <div className="flex flex-wrap gap-4">
        {pickedImages.map((image, index) => (
          <div
            key={index}
            className="w-32 h-32 mb-4 border-2 border-gray-700 flex justify-center items-center text-center relative"
          >
            <Image src={image.preview} alt={`이미지 ${index + 1}`} fill />
          </div>
        ))}
      </div>
      <input
        type="file"
        id={name}
        name={name}
        className="hidden"
        onChange={imageChangeHandler}
        ref={imageInput}
        accept="image/jpg, image/png, image/jpeg"
        multiple
      />
      <label
        htmlFor={name}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer"
      >
        이미지 고르기
      </label>
    </div>
  );
}
