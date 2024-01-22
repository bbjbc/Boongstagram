"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ name }) {
  const [pickedImages, setPickedImages] = useState([]);
  const imageInput = useRef();

  const imageClickHandler = () => {
    imageInput.current.click();
  };

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
            className="w-32 h-32 border-2 border-gray-700 flex justify-center items-center text-center relative"
          >
            <Image src={image.preview} alt={`이미지 ${index + 1}`} fill />
          </div>
        ))}
      </div>
      <input
        type="file"
        id={name}
        name={name}
        onChange={imageChangeHandler}
        ref={imageInput}
        accept="image/jpg, image/png, image/jpeg"
        className="hidden"
        multiple
        required
      />
      <button onClick={imageClickHandler} className="btn btn-error mt-2">
        사진 고르기
      </button>
    </div>
  );
}
