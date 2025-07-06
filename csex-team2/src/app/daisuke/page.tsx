"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavigationMenu } from "@/components/NavigationMenu";
import { motion } from "framer-motion";

// 夏の要素のアニメーション設定
const FloatingSummerElement = ({
  emoji,
  delay = 0,
  duration = 4,
}: {
  emoji: string;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      className="absolute text-3xl pointer-events-none opacity-30"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -40, 0],
        x: [0, 20, -20, 0],
        rotate: [0, 10, -10, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: duration + Math.random() * 2,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {emoji}
    </motion.div>
  );
};

// 波のアニメーション
const WaveElement = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.1) 100%)",
      }}
      animate={{
        scaleY: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 6,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default function DaisukePage() {
  const songs = [
    {
      title: "睡蓮花",
      artist: "湘南乃風",
      videoId: "PjGbnPYwt1g",
      description:
        "俺⁉️俺‼️俺俺俺俺‼️Ahh～↑↑↑💥💥真夏🌞🌴🏄🎇🎆🌺のJamboree〜〜〜〜‼️‼️レゲエ🇯🇲💃🙌🏻砂浜🌺🌺🏖🏖🌴🌞Big Wave🌊🌊🌊🌊🌊🌊🌊💥💥💥",
      comment: "夏といえばこの曲である。",
    },
    {
      title: "ファンファーレ",
      artist: "Sumika",
      videoId: "7N8oan7fwfk",
      description: "疾走感が良い",
    },
    {
      title: "真夏の果実",
      artist: "サザンオールスターズ",
      videoId: "8OCvkuxnIuw",
      description: "夏の終わりの夕方に是非とも聞いてほしい",
    },
    {
      title: "PHOENIX",
      artist: "BURNOUT SYNDROMES",
      videoId: "b5lsuPxMFmw",
      description:
        "歌詞に夏らしさはないが私が高校の部活のきつい夏合宿中によく聞いてたので選ばさせてもらう",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 dark:from-sky-950 dark:via-cyan-950 dark:to-blue-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-sky-400/20 to-cyan-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-sky-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Animated Wave Elements */}
      <WaveElement delay={0} />
      <WaveElement delay={2} />
      <WaveElement delay={4} />

      {/* Floating Summer Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingSummerElement emoji="🌞" delay={0} duration={5} />
        <FloatingSummerElement emoji="🌊" delay={1} duration={6} />
        <FloatingSummerElement emoji="🏄" delay={2} duration={4} />
        <FloatingSummerElement emoji="🌴" delay={3} duration={7} />
        <FloatingSummerElement emoji="🏖️" delay={4} duration={5} />
        <FloatingSummerElement emoji="🌺" delay={5} duration={6} />

        {/* 太陽の特別なアニメーション */}
        <motion.div
          className="absolute top-20 right-20 text-6xl pointer-events-none opacity-40"
          animate={{
            rotate: 360,
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
          ☀️
        </motion.div>
      </div>

      {/* Header */}
      <header className="relative overflow-hidden glass-effect border-b border-white/20 dark:border-gray-700/50">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-blue-600/5 to-sky-600/5"></div>

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
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-200/20 dark:border-cyan-400/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6">
                🌞 Summer Music Collection
              </span>
            </motion.div>
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Summer
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
                Songs
              </span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              太陽と海の季節に響く、エネルギッシュな楽曲をお届けします
              <br />
              <span className="text-lg text-gray-500 dark:text-gray-400">
                夏の思い出と共にお楽しみください
              </span>
            </motion.p>
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
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
              夏におすすめの楽曲
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              熱い夏を彩る音楽をお楽しみください
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
                  delay: 1.2 + index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="group glass-effect border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
                  {/* Card Header */}
                  <motion.div
                    className="bg-gradient-to-r from-cyan-500/90 via-blue-500/90 to-sky-500/90 text-white p-6 rounded-t-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          {song.title}
                        </h3>
                        <p className="text-cyan-100 font-medium">
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
                            duration: 8,
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
                        🌞
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
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          🎵
                        </motion.span>
                        <div>
                          <h4 className="text-lg font-bold text-cyan-700 dark:text-cyan-300 mb-2">
                            楽曲について
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                            {song.description}
                          </p>
                          {song.comment && (
                            <motion.p
                              className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              {song.comment}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Summer Quote Section */}
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
                      scale: [1, 1.2, 1],
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🌊
                  </motion.span>
                  <h3 className="text-2xl font-bold text-cyan-700 dark:text-cyan-300">
                    夏の音楽の魅力
                  </h3>
                  <motion.span
                    className="text-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    🌊
                  </motion.span>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  夏は活力とエネルギーに満ちた季節。青い空、輝く太陽、そして心躍るリズム。
                  音楽と共に夏の思い出を作り、最高の時間をお過ごしください。
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
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <motion.span
                  className="group-hover:animate-bounce"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🏠
                </motion.span>
                ホームに戻る
                <motion.span
                  className="group-hover:animate-bounce"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                    },
                  }}
                >
                  🌞
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
