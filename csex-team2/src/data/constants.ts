import { Member, Season } from "@/types";

export const MEMBERS: Member[] = [
  {
    name: "Min",
    season: "春",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
  },
  {
    name: "Daisuke",
    season: "夏",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
  },
  {
    name: "Koki",
    season: "秋",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    name: "Ritsu",
    season: "冬",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
];

export const SEASONS: Season[] = [
  {
    season: "春",
    title: "Spring Melodies",
    description: "桜の季節に響く、新しい始まりの音楽",
    color: "from-pink-500 to-rose-500",
    bgColor:
      "bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
  },
  {
    season: "夏",
    title: "Summer Vibes",
    description: "太陽の下で楽しむ、エネルギッシュなサウンド",
    color: "from-yellow-500 to-orange-500",
    bgColor:
      "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
  },
  {
    season: "秋",
    title: "Autumn Harmony",
    description: "紅葉と共に奏でる、落ち着いたメロディー",
    color: "from-orange-500 to-red-500",
    bgColor:
      "bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
  },
  {
    season: "冬",
    title: "Winter Serenity",
    description: "雪景色に映える、心温まる音楽",
    color: "from-blue-500 to-cyan-500",
    bgColor:
      "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
  },
];
