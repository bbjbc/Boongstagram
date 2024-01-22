"use client";

import { useFormStatus } from "react-dom";

export default function StoryFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-info w-[46rem]" disabled={pending}>
      {pending ? "전송 중..." : "피드 공유"}
    </button>
  );
}
