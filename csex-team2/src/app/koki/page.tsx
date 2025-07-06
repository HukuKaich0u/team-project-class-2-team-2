"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavigationMenu } from "@/components/NavigationMenu";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// 紅葉のアニメーション設定
const FallingLeaf = ({ delay = 0 }) => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <motion.div
      className="absolute text-2xl pointer-events-none"
      style={{
        left: `${Math.random() * 100}%`,
        color: ["#f97316", "#ea580c", "#dc2626", "#b45309"][
          Math.floor(Math.random() * 4)
        ],
      }}
      initial={{
        y: -50,
        x: 0,
        rotate: 0,
        opacity: 0.8,
      }}
      animate={{
        y: windowHeight + 50,
        x: [0, 30, -20, 40, 0],
        rotate: [0, 180, 360, 540, 720],
        opacity: [0.8, 1, 0.8, 0.6, 0],
      }}
      transition={{
        duration: Math.random() * 3 + 8,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
        x: {
          duration: Math.random() * 2 + 3,
          repeat: Infinity,
          repeatType: "mirror",
        },
        rotate: {
          duration: Math.random() * 2 + 4,
          repeat: Infinity,
          ease: "linear",
        },
      }}
    >
      🍂
    </motion.div>
  );
};

export default function KokiPage() {
  const songs = [
    {
      title: "we fell in love in october",
      artist: "girl in red",
      videoId: "iggmiF7DNoM",
      description:
        "洋服屋さんとかで流れてそうな曲です。自分が働いている会社のCEOが好きな曲で、この前本当にたまたまおすすめされての思い出して入れました。",
    },
    {
      title: "楓",
      artist: "スピッツ",
      videoId: "YapsFDcGe_s",
      description: "僕なんかが紹介文を書くまでもなく有名な曲な気がします。",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-orange-950 dark:via-amber-950 dark:to-red-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-400/10 to-orange-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Animated Falling Leaves */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <FallingLeaf key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Floating Autumn Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: ["#f97316", "#ea580c", "#dc2626", "#b45309"][
                Math.floor(Math.random() * 4)
              ],
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            🍁
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <header className="relative overflow-hidden glass-effect border-b border-white/20 dark:border-gray-700/50">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-red-600/5 to-amber-600/5"></div>

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
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-200/20 dark:border-orange-400/20 text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
                🍁 Autumn Music Collection
              </span>
            </motion.div>
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Autumn
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
                Melodies
              </span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              紅葉の季節に心に響く、美しいメロディーをお届けします
              <br />
              <span className="text-lg text-gray-500 dark:text-gray-400">
                秋の夜長にゆっくりとお楽しみください
              </span>
            </motion.p>
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
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
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              秋におすすめの楽曲
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              心温まる秋の音楽をお楽しみください
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {songs.map((song, index) => (
              <motion.div
                key={index}
                className="floating-animation"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.2 + index * 0.3,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="group glass-effect border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
                  {/* Card Header */}
                  <motion.div
                    className="bg-gradient-to-r from-orange-500/90 via-red-500/90 to-amber-500/90 text-white p-6 rounded-t-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          {song.title}
                        </h3>
                        <p className="text-orange-100 font-medium">
                          {song.artist}
                        </p>
                      </div>
                      <motion.div
                        className="text-4xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        🍁
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

                    {/* Description */}
                    <div className="glass-effect rounded-xl p-5 border border-white/20 dark:border-gray-700/50">
                      <div className="flex items-start gap-3">
                        <motion.span
                          className="text-2xl"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          🎵
                        </motion.span>
                        <div>
                          <h4 className="text-lg font-bold text-orange-700 dark:text-orange-300 mb-2">
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
        </section>

        {/* Autumn Quote Section */}
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
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🍂
                  </motion.span>
                  <h3 className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                    秋の音楽の魅力
                  </h3>
                  <motion.span
                    className="text-3xl"
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    🍂
                  </motion.span>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  秋は感情が豊かになる季節。落ち葉の音、涼しい風、そして短くなる日々。
                  そんな季節だからこそ、音楽がより深く心に響きます。
                  ゆっくりとした時間の中で、お気に入りの楽曲と共に秋を感じてください。
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
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <motion.span
                  className="group-hover:animate-bounce"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🍁
                </motion.span>
                ホームに戻る
                <motion.span
                  className="group-hover:animate-bounce"
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  🍁
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
