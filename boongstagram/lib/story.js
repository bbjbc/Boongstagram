import sql from "better-sqlite3";

const db = sql("story.db");

export async function getStory() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM story").all();
}

export function getStoryDetail() {
  return db.prepare("SELECT * FROM story WHERE slug = ?").get(slug);
}
