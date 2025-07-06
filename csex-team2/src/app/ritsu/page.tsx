"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Winter Background */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-slate-50"></div>

        {/* Additional winter atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/30 via-transparent to-white/50"></div>

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #dbeafe 0%, transparent 50%), radial-gradient(circle at 75% 75%, #bfdbfe 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Falling Snow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white text-lg animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            ❄️
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-400/90 backdrop-blur-sm shadow-lg border-b border-blue-300">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex justify-around items-center h-16">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-white hover:bg-blue-500"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 pt-24">
        {/* Home Section */}
        {activeSection === "home" && (
          <div className="text-center">
            <Card className="bg-blue-50/80 backdrop-blur-sm border-2 border-blue-200 shadow-2xl rounded-3xl mb-8">
              <CardContent className="p-8">
                <h1 className="text-5xl font-bold text-blue-600 mb-6 drop-shadow-lg">
                  冬にお勧めの曲の紹介
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-6"></div>
              </CardContent>
            </Card>

            <Card className="bg-blue-100/60 backdrop-blur-sm border border-blue-200 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">
                  前置き
                </h2>
                <p className="text-blue-800 text-lg leading-relaxed">
                  ここでは私の好きな冬にお勧めな曲をイベントやカテゴリごとに紹介していきます。
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Christmas Section */}
        {activeSection === "xmas" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-green-600 mb-4 drop-shadow-lg">
                🎄 クリスマスにおすすめの曲
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-red-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {christmasSongs.map((song, index) => (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border-2 border-green-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-green-600 mb-2">
                        {song.title}
                      </h3>
                      <p className="text-lg text-red-600 font-semibold">
                        {song.artist}
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${song.videoId}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <p className="text-gray-700 leading-relaxed">
                        {song.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Winter Songs Section */}
        {activeSection === "win" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-4 drop-shadow-lg">
                ❄️ 冬に聞きたい洋楽編
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {winterSongs.map((song, index) => (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border-2 border-blue-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-blue-600 mb-2">
                        {song.title}
                      </h3>
                      <p className="text-lg text-cyan-600 font-semibold">
                        {song.artist}
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${song.videoId}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <p className="text-gray-700 leading-relaxed">
                        {song.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            ❄️ ホームに戻る
          </a>
        </div>
      </div>
    </div>
  );
}
