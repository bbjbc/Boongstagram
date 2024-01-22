// const sql = require("better-sqlite3");
// const db = sql("story.db");

// const dummyStory = [
//   {
//     title: "첫 번째 피드",
//     slug: "first-feed",
//     image: "/images/first.jpg",
//     summary: "날씨 조타 고 니 아 🌞🌱",
//     date: "2019년 10월 24일",
//   },
//   {
//     title: "두 번째 피드",
//     slug: "second-feed",
//     image: [
//       "/images/second.jpg",
//       "/images/second1.jpg",
//       "/images/second2.jpg",
//       "/images/second3.jpg",
//       "/images/second4.jpg",
//       "/images/second5.jpg",
//     ],
//     summary: "푸 흐 흐 흐흐흐 흡🤥",
//     date: "2019년 11월 7일",
//   },
//   {
//     title: "세 번째 피드",
//     slug: "third-feed",
//     image: "/images/third.jpg",
//     summary: `
//     난 생 처 음 설 국 열 차 🇷🇺❄️🚂
//     1/6 - 1/9 🚊
//     러시아 날씨는 정말 어마어마했다
//     씻지도 못하고 식량도 바닥난 상태였지만 한국인들과 함께여서 행복했다😍

//     #시베리아 #횡단열차 #시베리아횡단열차 #씻고 #싶어요😢 #🇷🇺 #한번쯤은 #해볼만한 #도전 #블라디에서 #이르쿠츠크 #까지`,
//     date: "2020년 1월 10일",
//   },
//   {
//     title: "네 번째 피드",
//     slug: "fourth-feed",
//     image: "/images/fourth.jpg",
//     summary: "적셔 ㅋ",
//     date: "2020년 8월 9일",
//   },
//   {
//     title: "다섯 번째 피드",
//     slug: "fifth-feed",
//     image: "/images/fifth.jpg",
//     summary: `
//     파파라치 ㅋ 아이 참

//     #건졌다`,
//     date: "2020년 8월 30일",
//   },
//   {
//     title: "여섯 번째 피드",
//     slug: "sixth-feed",
//     image: "/images/sixth.jpg",
//     summary: "고래와 함께 떠난 압구정 나들이♥",
//     date: "2021년 9월 26일",
//   },
//   {
//     title: "일곱 번째 피드",
//     slug: "seventh-feed",
//     image: "/images/seventh.jpg",
//     summary: "🙃",
//     date: "2022년 2월 14일",
//   },
//   {
//     title: "여덟 번째 피드",
//     slug: "eighth-feed",
//     image: "/images/eighth.jpg",
//     summary: "운전해보거라 김기사",
//     date: "2022년 3월 31일",
//   },
//   {
//     title: "아홉 번째 피드",
//     slug: "ninth-feed",
//     image: "/images/ninth.jpg",
//     summary: "틈새 꽃과 함께 라면〰",
//     date: "2022년 4월 12일",
//   },
//   {
//     title: "열 번째 피드",
//     slug: "tenth-feed",
//     image: "/images/tenth.jpg",
//     summary: "🌸",
//     date: "2022년 4월 12일",
//   },
//   {
//     title: "열한 번째 피드",
//     slug: "eleventh-feed",
//     image: "/images/eleventh.jpg",
//     summary: "그만 뚝딱대 병차나. . .",
//     date: "2022년 5월 21일",
//   },
//   {
//     title: "열두 번째 피드",
//     slug: "twelfth-feed",
//     image: "/images/twelfth.jpg",
//     summary: "귀한곳에 누추한분",
//     date: "2022년 5월 29일",
//   },
//   {
//     title: "열세 번째 피드",
//     slug: "thirteenth-feed",
//     image: "/images/thirteenth.jpg",
//     summary: "흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야",
//     date: "2022년 6월 17일",
//   },
//   {
//     title: "열네 번째 피드",
//     slug: "fourteenth-feed",
//     image: "/images/fourteenth.jpg",
//     summary: "그대 춤을 추는 나무 같아요",
//     date: "2022년 7월 28일",
//   },
//   {
//     title: "열다섯 번째 피드",
//     slug: "fifteenth-feed",
//     image: "/images/fifteenth.jpg",
//     summary: "뚝딱찬🤖",
//     date: "2022년 9월 1일",
//   },
//   {
//     title: "열여섯 번째 피드",
//     slug: "sixteenth-feed",
//     image: "/images/sixteenth.jpg",
//     summary: "날 좋은 날🌙",
//     date: "2022년 11월 9일",
//   },
//   {
//     title: "열일곱 번째 피드",
//     slug: "seventeenth-feed",
//     image: "/images/seventeenth.jpg",
//     summary: "Ditto",
//     date: "2022년 12월 31일",
//   },
//   {
//     title: "열여덟 번째 피드",
//     slug: "eighteenth-feed",
//     image: "/images/eighteenth.jpg",
//     summary: "맥스 가진(척하는) 나.",
//     date: "2023년 2월 5일",
//   },
// ];

// db.prepare(
//   `
//     CREATE TABLE IF NOT EXISTS story (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         slug TEXT NOT NULL UNIQUE,
//         title TEXT NOT NULL,
//         image TEXT NOT NULL,
//         summary TEXT NOT NULL,
//         date TEXT NOT NULL
//     )
// `
// ).run();

// async function initData() {
//   const stmt = db.prepare(`
//         INSERT INTO story VALUES (
//             null,
//             @slug,
//             @title,
//             @image,
//             @summary,
//             @date
//         )
//     `);

//   for (const story of dummyStory) {
//     stmt.run(story);
//   }
// }

// initData();

const { MongoClient } = require("mongodb");

const dummyStory = [
  {
    title: "첫 번째 피드",
    slug: "first-feed",
    image: "/images/first.jpg",
    summary: "날씨 조타 고 니 아 🌞🌱",
    date: "2019년 10월 24일",
  },
  {
    title: "두 번째 피드",
    slug: "second-feed",
    image: [
      "/images/second.jpg",
      "/images/second1.jpg",
      "/images/second2.jpg",
      "/images/second3.jpg",
      "/images/second4.jpg",
      "/images/second5.jpg",
    ],
    summary: "푸 흐 흐 흐흐흐 흡🤥",
    date: "2019년 11월 7일",
  },
  {
    title: "세 번째 피드",
    slug: "third-feed",
    image: [
      "/images/third.jpg",
      "/images/third1.jpg",
      "/images/third2.jpg",
      "/images/third3.jpg",
      "/images/third4.jpg",
      "/images/third5.jpg",
      "/images/third6.jpg",
      "/images/third7.jpg",
    ],
    summary: `
    난 생 처 음 설 국 열 차 🇷🇺❄️🚂
    1/6 - 1/9 🚊
    러시아 날씨는 정말 어마어마했다
    씻지도 못하고 식량도 바닥난 상태였지만 한국인들과 함께여서 행복했다😍
    
    #시베리아 #횡단열차 #시베리아횡단열차 #씻고 #싶어요😢 #🇷🇺 #한번쯤은 #해볼만한 #도전 #블라디에서 #이르쿠츠크 #까지`,
    date: "2020년 1월 10일",
  },
  {
    title: "네 번째 피드",
    slug: "fourth-feed",
    image: "/images/fourth.jpg",
    summary: "적셔 ㅋ",
    date: "2020년 8월 9일",
  },
  {
    title: "다섯 번째 피드",
    slug: "fifth-feed",
    image: "/images/fifth.jpg",
    summary: `
    파파라치 ㅋ 아이 참

    #건졌다`,
    date: "2020년 8월 30일",
  },
  {
    title: "여섯 번째 피드",
    slug: "sixth-feed",
    image: ["/images/sixth.jpg", "/images/sixth1.jpg"],
    summary: "고래와 함께 떠난 압구정 나들이♥",
    date: "2021년 9월 26일",
  },
  {
    title: "일곱 번째 피드",
    slug: "seventh-feed",
    image: "/images/seventh.jpg",
    summary: "🙃",
    date: "2022년 2월 14일",
  },
  {
    title: "여덟 번째 피드",
    slug: "eighth-feed",
    image: "/images/eighth.jpg",
    summary: "운전해보거라 김기사",
    date: "2022년 3월 31일",
  },
  {
    title: "아홉 번째 피드",
    slug: "ninth-feed",
    image: ["/images/ninth.jpg", "/images/ninth1.jpg", "/images/ninth2.jpg"],
    summary: "틈새 꽃과 함께 라면〰",
    date: "2022년 4월 12일",
  },
  {
    title: "열 번째 피드",
    slug: "tenth-feed",
    image: ["/images/tenth.jpg", "/images/tenth1.jpg"],
    summary: "🌸",
    date: "2022년 4월 12일",
  },
  {
    title: "열한 번째 피드",
    slug: "eleventh-feed",
    image: ["/images/eleventh.jpg", "/images/eleventh1.jpg"],
    summary: "그만 뚝딱대 병차나. . .",
    date: "2022년 5월 21일",
  },
  {
    title: "열두 번째 피드",
    slug: "twelfth-feed",
    image: ["/images/twelfth.jpg", "/images/twelfth1.jpg"],
    summary: "귀한곳에 누추한분",
    date: "2022년 5월 29일",
  },
  {
    title: "열세 번째 피드",
    slug: "thirteenth-feed",
    image: "/images/thirteenth.jpg",
    summary: "흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야",
    date: "2022년 6월 17일",
  },
  {
    title: "열네 번째 피드",
    slug: "fourteenth-feed",
    image: ["/images/fourteenth.jpg", "/images/fourteenth1.jpg"],
    summary: "그대 춤을 추는 나무 같아요",
    date: "2022년 7월 28일",
  },
  {
    title: "열다섯 번째 피드",
    slug: "fifteenth-feed",
    image: "/images/fifteenth.jpg",
    summary: "뚝딱찬🤖",
    date: "2022년 9월 1일",
  },
  {
    title: "열여섯 번째 피드",
    slug: "sixteenth-feed",
    image: ["/images/sixteenth.jpg", "/images/sixteenth1.jpg"],
    summary: "날 좋은 날🌙",
    date: "2022년 11월 9일",
  },
  {
    title: "열일곱 번째 피드",
    slug: "seventeenth-feed",
    image: ["/images/seventeenth.jpg", "/images/seventeenth1.jpg"],
    summary: "Ditto",
    date: "2022년 12월 31일",
  },
  {
    title: "열여덟 번째 피드",
    slug: "eighteenth-feed",
    image: ["/images/eighteenth.jpg", "/images/eighteenth1.jpg"],
    summary: "맥스 가진(척하는) 나.",
    date: "2023년 2월 5일",
  },
  {
    title: "열아홉 번째 피드",
    slug: "nineteenth-feed",
    image: "/images/nineteenth.jpg",
    summary: "기지개 펴기",
    date: "2023년 2월 10일",
  },
  {
    title: "스무 번째 피드",
    slug: "twentieth-feed",
    image: ["/images/twentieth.jpg", "/images/twentieth1.jpg"],
    summary: "곰도리 하리보🧸",
    date: "2023년 3월 23일",
  },
  {
    title: "스물 한 번째 피드",
    slug: "twenty-first-feed",
    image: [
      "/images/twentyfirst.jpg",
      "/images/twentyfirst1.jpg",
      "/images/twentyfirst2.jpg",
    ],
    summary: "그니까 내가 먹는게 뭐냐면",
    date: "2023년 3월 27일",
  },
  {
    title: "스물 두 번째 피드",
    slug: "twenty-second-feed",
    image: ["/images/twentysecond.jpg", "/images/twentysecond1.jpg"],
    summary: "그 시절 우리가 좋아했던 불멍",
    date: "2023년 8월 14일",
  },
  {
    title: "스물 세 번째 피드",
    slug: "twenty-third-feed",
    image: ["/images/twentythird.jpg", "/images/twentythird1.jpg"],
    summary: "뚝딱이는 나와 반대되는 노들부들보들섬",
    date: "2023년 10월 30일",
  },
  {
    title: "스물 네 번째 피드",
    slug: "twenty-fourth-feed",
    image: "/images/twentyfourth.jpg",
    summary: "군밤 좀 드실라유 깜짝놀라유",
    date: "2023년 10월 30일",
  },
  {
    title: "스물 다섯 번째 피드",
    slug: "twenty-fifth-feed",
    image: ["/images/twentyfifth.jpg", "/images/twentyfifth1.jpg"],
    summary: "어 그래 어디사는 병찬이형이야",
    date: "2023년 12월 5일",
  },
  {
    title: "스물 여섯 번째 피드",
    slug: "twenty-sixth-feed",
    image: "/images/twentysixth.jpg",
    summary: "난 모든 걸 멈춰 세울래",
    date: "2023년 12월 19일",
  },
  {
    title: "스물 일곱 번째 피드",
    slug: "twenty-seventh-feed",
    image: [
      "/images/twentyseventh.jpg",
      "/images/twentyseventh1.jpg",
      "/images/twentyseventh2.jpg",
    ],
    summary: "연말결산",
    date: "2023년 12월 24일",
  },
  {
    title: "스물 여덟 번째 피드",
    slug: "twenty-eighth-feed",
    image: [
      "/images/twentyeighth.jpg",
      "/images/twentyeighth1.jpg",
      "/images/twentyeighth2.jpg",
      "/images/twentyeighth3.jpg",
      "/images/twentyeighth4.jpg",
      "/images/twentyeighth5.jpg",
      "/images/twentyeighth6.jpg",
      "/images/twentyeighth7.jpg",
      "/images/twentyeighth8.jpg",
      "/images/twentyeighth9.jpg",
    ],
    summary: "군밤 좀 드실라유 깜짝놀라유",
    date: "2023년 10월 30일",
  },
  {
    title: "스물 아홉 번째 피드",
    slug: "twenty-ninth-feed",
    image: [
      "/images/twentyninth.jpg",
      "/images/twentyninth1.jpg",
      "/images/twentyninth2.jpg",
      "/images/twentyninth3.jpg",
      "/images/twentyninth4.jpg",
    ],
    summary: "브이로그 찍어본다고 신난 반오십. (포인트는 삼각대)",
    date: "2024년 1월 4일",
  },
  {
    title: "서른 번째 피드",
    slug: "thirtieth-feed",
    image: [
      "/images/thirtieth.jpg",
      "/images/thirtieth1.jpg",
      "/images/thirtieth2.jpg",
    ],
    summary:
      "아이폰 광고 아님. 프라이탁 광고 아님. 꼭꼭 숨어라 붕라니가 보인다 차차차",
    date: "2024년 1월 4일",
  },
  {
    title: "서른 한 번째 피드",
    slug: "thirty-first-feed",
    image: [
      "/images/thirtyfirst.jpg",
      "/images/thirtyfirst1.jpg",
      "/images/thirtyfirst2.jpg",
      "/images/thirtyfirst3.jpg",
      "/images/thirtyfirst4.jpg",
    ],
    summary: "쿼카처럼 되고 싶은 사람",
    date: "2024년 1월 5일",
  },
  {
    title: "서른 두 번째 피드",
    slug: "thirty-second-feed",
    image: [
      "/images/thirtysecond.jpg",
      "/images/thirtysecond1.jpg",
      "/images/thirtysecond2.jpg",
      "/images/thirtysecond3.jpg",
      "/images/thirtysecond4.jpg",
    ],
    summary:
      "쿼미놈(쿼카에 미친놈이라는 뜻임)의 지나버린 벌스데이(모두모두 감사티비 ㅋ쿠쿠)",
    date: "2024년 1월 9일",
  },
  {
    title: "서른 세 번째 피드",
    slug: "thirty-third-feed",
    image: "/images/thirtythird.jpg",
    summary: "기믹보이 아님",
    date: "2022년 6월 17일",
  },
  {
    title: "서른 네 번째 피드",
    slug: "thirty-fourth-feed",
    image: "/images/thirtyfourth.jpg",
    summary: "목돌이놀이눈사람따라하기놀이••",
    date: "2022년 11월 9일",
  },
  {
    title: "서른 다섯 번째 피드",
    slug: "thirty-fifth-feed",
    image: ["/images/thirtyfifth.jpg", "/images/thirtyfifth1.jpg"],
    summary: "목돌이놀이눈사람따라하기놀이••",
    date: "2022년 11월 9일",
  },
];

async function initData() {
  const uri =
    "mongodb+srv://aoo4550:IqgDZvMzH8T9J92b@cluster0.u8voidr.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    // console.log("데이터베이스에 연결");

    const database = client.db("story");
    const collection = database.collection("story");

    for (const story of dummyStory) {
      await collection.insertOne(story);
    }

    // console.log("데이터가 insert 되었음");
  } finally {
    await client.close();
    // console.log("닫힘");
  }
}

initData();
