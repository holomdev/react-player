import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Melodiya",
      artist: "Psalm Trees, FloFilz",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#F7B534", "#ED4733"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16060",
    },
    {
      name: "Reflect",
      artist: "SwuM, Ben Belial",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#954E2C", "#4E4C3C"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15238",
    },
    {
      name: "Vinho Verde",
      artist: "Clap Cotton",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ae91385fc2d92e40dd4bf337867dee16fb5648d2-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#A8F0E4", "#7AA15E"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9447",
    },
    {
      name: "Who Knows",
      artist: "Psalm Trees, Guillaume Muschalle",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/371dadcad6dee874bd96515ae5d19b6daef2f408-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#9D6D38", "#C7DFDA"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10553",
    },
    {
      name: "Unlisted",
      artist: "Amparo",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#5B87DC", "#7259B1"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9232",
    },
    {
      name: "Aries",
      artist: "SwuM",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/04/35317644d6db24c3ca144619d03f2805fa702472-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#91A591", "#E6AF6E"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8008",
    },
    {
      name: "Sleepover",
      artist: "Nymano, JK the Sage",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#60557F", "#EBADAA"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10130",
    },
    {
      name: "Lilo",
      artist: "Middle School, The Field Tapes",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F6B17E", "#9AA3AE"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11244",
    },
    {
      name: "Today Feels Like Everyday",
      artist: "Mama Aiuto",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F6B17E", "#9AA3AE"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12128",
    },
  ];
}

export default chillHop;
