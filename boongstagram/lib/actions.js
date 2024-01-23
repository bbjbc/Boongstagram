"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { saveFeed } from "./story";

const isInvalidText = (text) => {
  return !text || text.trim() === "";
};

export async function uploadStory(prevState, formData) {
  const story = {
    title: formData.get("title"),
    date: formData.get("date"),
    summary: formData.get("summary"),
    image: formData.getAll("image"),
  };

  if (
    isInvalidText(story.title) ||
    isInvalidText(story.summary) ||
    isInvalidText(story.date) ||
    !story.image ||
    story.image.size === 0
  ) {
    return {
      message: "올바르지 않은 값입니다.",
    };
  }

  await saveFeed(story);
  revalidatePath("/story");
  redirect("/story");
}
