import sql from "better-sqlite3";

const db = sql("story.db");

export function getStory() {
  return db.prepare("SELECT * FROM story").all();
}

export function getStoryDetail() {
  return db.prepare("SELECT * FROM story WHERE slug = ?").get(slug);
}
