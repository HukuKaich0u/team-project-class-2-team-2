"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavigationMenu } from "@/components/NavigationMenu";
import { motion } from "framer-motion";

// 雪のアニメーション設定
const FallingSnow = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute text-lg pointer-events-none opacity-80"
      style={{
        left: `${Math.random() * 100}%`,
        color: ["#ffffff", "#f1f5f9", "#e2e8f0", "#cbd5e1"][
          Math.floor(Math.random() * 4)
        ],
      }}
      initial={{
        y: -30,
        x: 0,
        rotate: 0,
        opacity: 0.8,
        scale: Math.random() * 0.5 + 0.5,
      }}
      animate={{
        y: "100vh",
        x: [0, 20, -15, 25, -10, 15, 0],
        rotate: [0, 90, 180, 270, 360],
        opacity: [0.8, 1, 0.9, 0.7, 0.5, 0.3, 0],
        scale: [Math.random() * 0.5 + 0.5, 1, 0.8, 1.1, 0.7, 0.9, 0.4],
      }}
      transition={{
        duration: Math.random() * 5 + 15,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
        x: {
          duration: Math.random() * 4 + 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
        rotate: {
          duration: Math.random() * 8 + 10,
          repeat: Infinity,
          ease: "linear",
        },
      }}
    >
      ❄️
    </motion.div>
  );
};

// 冬の要素のアニメーション
const FloatingWinterElement = ({
  emoji,
  delay = 0,
  duration = 6,
}: {
  emoji: string;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      className="absolute text-4xl pointer-events-none opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -25, 0],
        x: [0, 15, -15, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: duration + Math.random() * 3,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {emoji}
    </motion.div>
  );
};

export default function RitsuPage() {
  const [activeSection, setActiveSection] = useState("home");

  const christmasSongs = [
    {
      title: "Last Christmas",
      artist: "Wham!",
      videoId: "E8gmARGvPlI",
      description:
        "クリスマスといえばこの曲です。聴いたことがない人はいないでしょう。この曲然りクリスマスソングは悲しい別れの歌が多いのはなぜなんでしょうか。",
    },
    {
      title: "スノーマジックファンタジー",
      artist: "SEKAI NO OWARI",
      videoId: "vkcTN70fnXA",
      description:
        "この曲を聴くと雪景色が目に浮かぶような曲です。明るい雰囲気で聴くとスノボをやりたくなりますね。",
    },
  ];

  const winterSongs = [
    {
      title: "Counting Stars",
      artist: "OneRepublic",
      videoId: "hT_nvWreIhg",
      description:
        "落ち着いたリズムが冬の夜空をイメージさせます。歌詞の内容自体はあまり冬と関係ないのですが星を数えるって冬っぽいので選びました。あと個人的に好き。",
    },
    {
      title: "Sweater Weather",
      artist: "The Neighbourhood",
      videoId: "GCdwKhTtNNw",
      description:
        "雰囲気がいい。歌詞の内容が自然と頭に浮かんでくるようないい曲です。季語はセーター。",
    },
  ];

  const menuItems = [
    { id: "home", label: "ホーム", icon: "🏠" },
    { id: "xmas", label: "クリスマスにお勧めの曲", icon: "🎄" },
    { id: "win", label: "冬に聞きたい洋楽", icon: "❄️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 dark:from-blue-950 dark:via-slate-950 dark:to-indigo-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-slate-400/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-slate-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
      </div>

      {/* Animated Falling Snow */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <FallingSnow key={i} delay={i * 0.3} />
        ))}
      </div>

      {/* Floating Winter Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingWinterElement emoji="❄️" delay={0} duration={8} />
        <FloatingWinterElement emoji="⭐" delay={2} duration={10} />
        <FloatingWinterElement emoji="🌙" delay={4} duration={12} />
        <FloatingWinterElement emoji="❄️" delay={6} duration={9} />
        <FloatingWinterElement emoji="⭐" delay={8} duration={11} />
      </div>

      {/* Header */}
      <header className="relative overflow-hidden glass-effect border-b border-white/20 dark:border-gray-700/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-slate-600/5 to-indigo-600/5"></div>

        {/* Header Controls */}
        <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
          <NavigationMenu />
          <ThemeToggle />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                ❄️ Winter Music Collection
              </span>
            </motion.div>
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                Winter
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-slate-500">
                Melodies
              </span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7 }}
            >
              雪降る季節に響く、心温まる楽曲をお届けします
              <br />
              <span className="text-lg text-gray-500 dark:text-gray-400">
                静寂の美しさと共にお楽しみください
              </span>
            </motion.p>
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative glass-effect border-b border-white/20 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex justify-center items-center h-16 gap-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <motion.button
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="hidden sm:inline">{item.label}</span>
                </motion.button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Home Section */}
        {activeSection === "home" && (
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Card className="glass-effect border-white/20 dark:border-gray-700/50 shadow-xl mb-8">
              <CardContent className="p-12 text-center">
                <motion.h2
                  className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  冬にお勧めの曲の紹介
                </motion.h2>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  ここでは私の好きな冬にお勧めな曲をイベントやカテゴリごとに紹介していきます。
                </p>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Christmas Section */}
        {activeSection === "xmas" && (
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400 mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎄 クリスマスにおすすめの曲
              </motion.h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-red-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {christmasSongs.map((song, index) => (
                <motion.div
                  key={index}
                  className="floating-animation"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.3,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Card className="group glass-effect border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500">
                    <motion.div
                      className="bg-gradient-to-r from-green-500/90 via-red-500/90 to-green-600/90 text-white p-6 rounded-t-lg backdrop-blur-sm"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">
                            {song.title}
                          </h3>
                          <p className="text-green-100 font-medium">
                            {song.artist}
                          </p>
                        </div>
                        <motion.div
                          className="text-4xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          🎄
                        </motion.div>
                      </div>
                    </motion.div>

                    <CardContent className="p-6">
                      <div className="mb-6">
                        <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-white/20 dark:border-gray-700/50">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${song.videoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-xl"
                          />
                        </div>
                      </div>

                      <div className="glass-effect rounded-xl p-5 border border-white/20 dark:border-gray-700/50">
                        <div className="flex items-start gap-3">
                          <motion.span
                            className="text-2xl"
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            🎵
                          </motion.span>
                          <div>
                            <h4 className="text-lg font-bold text-green-700 dark:text-green-300 mb-2">
                              楽曲について
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {song.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Winter Songs Section */}
        {activeSection === "win" && (
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ❄️ 冬に聞きたい洋楽編
              </motion.h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {winterSongs.map((song, index) => (
                <motion.div
                  key={index}
                  className="floating-animation"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.3,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Card className="group glass-effect border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500/90 via-indigo-500/90 to-cyan-500/90 text-white p-6 rounded-t-lg backdrop-blur-sm"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">
                            {song.title}
                          </h3>
                          <p className="text-blue-100 font-medium">
                            {song.artist}
                          </p>
                        </div>
                        <motion.div
                          className="text-4xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            rotate: {
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear",
                            },
                            scale: {
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            },
                          }}
                        >
                          ❄️
                        </motion.div>
                      </div>
                    </motion.div>

                    <CardContent className="p-6">
                      <div className="mb-6">
                        <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-white/20 dark:border-gray-700/50">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${song.videoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-xl"
                          />
                        </div>
                      </div>

                      <div className="glass-effect rounded-xl p-5 border border-white/20 dark:border-gray-700/50">
                        <div className="flex items-start gap-3">
                          <motion.span
                            className="text-2xl"
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            🎵
                          </motion.span>
                          <div>
                            <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-2">
                              楽曲について
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {song.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Winter Quote Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Card className="glass-effect border-white/20 dark:border-gray-700/50 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <motion.span
                    className="text-3xl"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    ❄️
                  </motion.span>
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                    冬の音楽の魅力
                  </h3>
                  <motion.span
                    className="text-3xl"
                    animate={{
                      rotate: [0, -360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5,
                      },
                    }}
                  >
                    ❄️
                  </motion.span>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  冬は静寂と美しさに満ちた季節。雪の結晶、澄んだ空気、そして心を温める音楽。
                  寒い夜に響くメロディーと共に、特別な時間をお過ごしください。
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="relative glass-effect border-t border-white/20 dark:border-gray-700/50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <motion.span
                  className="group-hover:animate-bounce"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                    },
                  }}
                >
                  ❄️
                </motion.span>
                ホームに戻る
                <motion.span
                  className="group-hover:animate-bounce"
                  animate={{
                    rotate: [0, -360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      delay: 1,
                    },
                  }}
                >
                  ❄️
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
