// import sql from "better-sqlite3";

// const db = sql("story.db");

// export async function getStory() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return db.prepare("SELECT * FROM story").all();
// }

// export function getStoryDetail(storySlug) {
//   return db.prepare("SELECT * FROM story WHERE slug = ?").get(storySlug);
// }

import { S3 } from "@aws-sdk/client-s3";

import { MongoClient } from "mongodb";

import xss from "xss";

const mongodbPassword = MONGODB_PW;
const mongodbURI = `mongodb+srv://aoo4550:${mongodbPassword}@cluster0.u8voidr.mongodb.net/story?retryWrites=true&w=majority`;

const convertDateSlug = (dateStr) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export async function getStory() {
  const uri = mongodbURI;
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
  const uri = mongodbURI;
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
  const s3 = new S3({
    region: "ap-northeast-2",
  });
  const uri = mongodbURI;
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db();
    const collection = database.collection("story");

    story.slug = convertDateSlug(story.date);
    story.summary = xss(story.summary);

    const extension = story.image.map((img) => img.name.split(".").pop());

    await Promise.all(
      story.image.map(async (img, idx) => {
        const fileName = `${story.slug}_${idx}.${extension}`;

        const bufferedImage = await img.arrayBuffer();

        // AWS S3에 이미지 업로드
        s3.putObject({
          Bucket: "boongranii-nextjs-boongstagram",
          Key: fileName,
          Body: Buffer.from(bufferedImage),
          ContentType: img.type,
        });

        story.image[idx] = fileName;
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
