"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavigationMenu } from "@/components/NavigationMenu";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// 桜の花びらのアニメーション設定
const FallingPetal = ({ delay = 0 }) => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <motion.div
      className="absolute text-xl pointer-events-none"
      style={{
        left: `${Math.random() * 100}%`,
        color: ["#fda4af", "#f9a8d4", "#f8bbd9", "#fce7f3"][
          Math.floor(Math.random() * 4)
        ],
      }}
      initial={{
        y: -30,
        x: 0,
        rotate: 0,
        opacity: 0.9,
        scale: Math.random() * 0.5 + 0.5,
      }}
      animate={{
        y: windowHeight + 30,
        x: [0, 50, -30, 60, -20, 40, 0],
        rotate: [0, 90, 180, 270, 360, 450, 540],
        opacity: [0.9, 1, 0.8, 0.9, 0.7, 0.5, 0],
        scale: [Math.random() * 0.5 + 0.5, 1, 0.8, 1.2, 0.6, 0.9, 0.3],
      }}
      transition={{
        duration: Math.random() * 4 + 12,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
        x: {
          duration: Math.random() * 3 + 4,
          repeat: Infinity,
          repeatType: "mirror",
        },
        rotate: {
          duration: Math.random() * 3 + 5,
          repeat: Infinity,
          ease: "linear",
        },
      }}
    >
      🌸
    </motion.div>
  );
};

export default function MinPage() {
  const songs = [
    {
      title: "春泥棒",
      artist: "ヨルシカ",
      videoId: "Sw1Flgub9s8",
      point:
        "「桜」というワードを使わずに桜の花が散っていく描写が鮮明に浮かんでくるところ。",
    },
    {
      title: "晴る",
      artist: "ヨルシカ",
      videoId: "CkvWJNt77mU",
      point:
        "そもそも「春」ではなく「晴る」なのがいい。「降り頻る雨でさえ 雲の上では晴る」という歌詞がもういない大切な人の幸福を祈っている感じがして好き。",
    },
    {
      title: "ワタリドリ",
      artist: "Alexandros",
      videoId: "O_DLtVuiqhI",
      point:
        "（春の曲か？いいんだよそんなの）Alexandrosらしい悩みを全部ぶっ飛ばしてくれるような爽快感のある曲調。",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-pink-950 dark:via-rose-950 dark:to-red-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-rose-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-rose-400/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-400/10 to-rose-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
      </div>

      {/* Animated Falling Petals */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <FallingPetal key={i} delay={i * 0.4} />
        ))}
      </div>

      {/* Floating Spring Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 6,
            }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <header className="relative overflow-hidden glass-effect border-b border-white/20 dark:border-gray-700/50">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/5 via-rose-600/5 to-red-600/5"></div>

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
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-200/20 dark:border-pink-400/20 text-pink-600 dark:text-pink-400 text-sm font-medium mb-6">
                🌸 Spring Music Collection
              </span>
            </motion.div>
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Spring
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-500">
                Melodies
              </span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7 }}
            >
              桜舞い踊る季節に響く、心温まる楽曲をお届けします
              <br />
              <span className="text-lg text-gray-500 dark:text-gray-400">
                新しい始まりの季節と共にお楽しみください
              </span>
            </motion.p>
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Songs Section */}
        <section className="mb-24">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              春におすすめの楽曲
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              新緑の季節を彩る音楽をお楽しみください
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {songs.map((song, index) => (
              <motion.div
                key={index}
                className="floating-animation"
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 1.3 + index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                <Card className="group glass-effect border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500">
                  {/* Card Header */}
                  <motion.div
                    className="bg-gradient-to-r from-pink-500/90 via-rose-500/90 to-red-500/90 text-white p-6 rounded-t-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{song.title}</h3>
                        <p className="text-pink-100 font-medium">
                          {song.artist}
                        </p>
                      </div>
                      <motion.div
                        className="text-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
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
                        🌸
                      </motion.div>
                    </div>
                  </motion.div>

                  <CardContent className="p-6">
                    {/* YouTube Video */}
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

                    {/* Here Suki Point */}
                    <div className="glass-effect rounded-xl p-5 border border-white/20 dark:border-gray-700/50">
                      <div className="flex items-start gap-3">
                        <motion.span
                          className="text-2xl"
                          animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          💕
                        </motion.span>
                        <div>
                          <h4 className="text-lg font-bold text-pink-700 dark:text-pink-300 mb-2">
                            ここすきポイント
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {song.point}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Spring Quote Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <Card className="glass-effect border-white/20 dark:border-gray-700/50 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <motion.span
                    className="text-3xl"
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🌸
                  </motion.span>
                  <h3 className="text-2xl font-bold text-pink-700 dark:text-pink-300">
                    春の音楽の魅力
                  </h3>
                  <motion.span
                    className="text-3xl"
                    animate={{
                      rotate: [0, -15, 15, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  >
                    🌸
                  </motion.span>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  春は希望と新しい始まりの季節。桜の花びらが舞い踊り、暖かな風が心を包みます。
                  美しいメロディーと共に、新たな一歩を踏み出しましょう。
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
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <motion.span
                  className="group-hover:animate-bounce"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🌸
                </motion.span>
                ホームに戻る
                <motion.span
                  className="group-hover:animate-bounce"
                  animate={{
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  🌸
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
