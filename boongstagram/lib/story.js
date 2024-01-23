// import sql from "better-sqlite3";

// const db = sql("story.db");

// export async function getStory() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return db.prepare("SELECT * FROM story").all();
// }

// export function getStoryDetail(storySlug) {
//   return db.prepare("SELECT * FROM story WHERE slug = ?").get(storySlug);
// }

import fs from "fs";

import { MongoClient } from "mongodb";

import xss from "xss";
import slugify from "slugify";

export async function getStory() {
  const uri =
    "mongodb+srv://aoo4550:IqgDZvMzH8T9J92b@cluster0.u8voidr.mongodb.net/story?retryWrites=true&w=majority";
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
    "mongodb+srv://aoo4550:IqgDZvMzH8T9J92b@cluster0.u8voidr.mongodb.net/story?retryWrites=true&w=majority";
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

export async function saveFeed(story) {
  const uri =
    "mongodb+srv://aoo4550:IqgDZvMzH8T9J92b@cluster0.u8voidr.mongodb.net/story?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db();
    const collection = database.collection("story");

    story.slug = slugify(story.date, { lower: true });
    story.summary = xss(story.summary);

    const extension = story.image.map((img) => img.name.split(".").pop());

    await Promise.all(
      story.image.map(async (img, idx) => {
        const fileName = `${story.slug}${idx}.${extension[idx]}`;

        const stream = fs.createWriteStream(`public/images/${fileName}`);
        const bufferedImage = await img.arrayBuffer(); // await 추가

        return new Promise((resolve, reject) => {
          stream.write(Buffer.from(bufferedImage), (err) => {
            if (err) {
              reject(new Error("이미지 저장에 실패했습니다."));
            } else {
              story.image[idx] = `/images/${fileName}`;
              resolve();
            }
          });
        });
      })
    );

    await collection.insertOne(story);

    return { success: true, message: "스토리가 성공적으로 저장되었습니다." };
  } catch (err) {
    console.log("에러 발생: ", err);
    return { success: false, message: "저장에 실패했습니다." };
  } finally {
    await client.close();
  }
}
