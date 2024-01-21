// import sql from "better-sqlite3";

// const db = sql("story.db");

// export async function getStory() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return db.prepare("SELECT * FROM story").all();
// }

// export function getStoryDetail(storySlug) {
//   return db.prepare("SELECT * FROM story WHERE slug = ?").get(storySlug);
// }

import { MongoClient } from "mongodb";

export async function getStory() {
  const uri =
    "mongodb+srv://aoo4550:PVKNU0YNANPV098D@cluster0.u8voidr.mongodb.net/story?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    // console.log("데이터베이스에 연결 시도");

    const database = client.db();
    const collection = database.collection("story");

    const stories = await collection.find().toArray();
    return stories;
  } finally {
    await client.close();
    // console.log("닫힘");
  }
}

export async function getStoryDetail(storySlug) {
  const uri =
    "mongodb+srv://aoo4550:PVKNU0YNANPV098D@cluster0.u8voidr.mongodb.net/story?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    // console.log("데이터베이스 연결 시도");

    const database = client.db();
    const collection = database.collection("story");

    const story = await collection.findOne({ slug: storySlug });
    return story;
  } finally {
    await client.close();
    // console.log("닫힘");
  }
}
