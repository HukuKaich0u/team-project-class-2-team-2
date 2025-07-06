"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function KokiPage() {
  const songs = [
    {
      title: "we fell in love in october",
      artist: "girl in red",
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Autumn Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-orange-200 via-red-100 to-yellow-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='autumn' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23fed7aa'/%3E%3Cstop offset='50%25' stop-color='%23fdba74'/%3E%3Cstop offset='100%25' stop-color='%23fb923c'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23autumn)' opacity='0.3'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Falling Leaves Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              color: ["#f97316", "#ea580c", "#dc2626", "#b45309", "#92400e"][
                Math.floor(Math.random() * 5)
              ],
            }}
          >
            🍂
          </div>
        ))}
      </div>

      {/* Floating Autumn Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 text-5xl animate-bounce"
          style={{ animationDelay: "0s" }}
        >
          🍁
        </div>
        <div
          className="absolute top-32 right-20 text-4xl animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          🌰
        </div>
        <div
          className="absolute top-60 left-1/4 text-3xl animate-bounce"
          style={{ animationDelay: "2s" }}
        >
          🍂
        </div>
        <div
          className="absolute bottom-40 right-10 text-5xl animate-bounce"
          style={{ animationDelay: "3s" }}
        >
          🍄
        </div>
        <div
          className="absolute bottom-20 left-20 text-4xl animate-bounce"
          style={{ animationDelay: "4s" }}
        >
          🌾
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 mt-16">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-orange-200/50 mb-8">
            <h1 className="text-6xl font-bold text-orange-600 mb-4 drop-shadow-lg">
              Autumn Melodies
            </h1>
            <h2 className="text-3xl text-red-600 mb-4">秋におすすめの曲</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              紅葉の季節に心に響く、美しいメロディーをお届けします。
              <br />
              <span className="text-orange-600 font-medium">
                秋の夜長にゆっくりとお楽しみください。
              </span>
            </p>
          </div>
        </div>

        {/* Songs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {songs.map((song, index) => (
            <Card
              key={index}
              className="group bg-white/90 backdrop-blur-sm border-2 border-orange-200 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Card Header with Autumn Gradient */}
              <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white p-6 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{song.title}</h3>
                    <p className="text-orange-100 font-medium">{song.artist}</p>
                  </div>
                  <div className="text-4xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    🍁
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* YouTube Video */}
                <div className="mb-6">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-orange-100">
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
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-5 border border-orange-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎵</span>
                    <div>
                      <h4 className="text-lg font-bold text-orange-700 mb-2">
                        楽曲について
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {song.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Autumn Quote Section */}
        <div className="text-center mb-12">
          <Card className="bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-200 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl">🍂</span>
                <h3 className="text-2xl font-bold text-orange-700">
                  秋の音楽の魅力
                </h3>
                <span className="text-3xl">🍂</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                秋は感情が豊かになる季節。落ち葉の音、涼しい風、そして短くなる日々。
                そんな季節だからこそ、音楽がより深く心に響きます。
                ゆっくりとした時間の中で、お気に入りの楽曲と共に秋を感じてください。
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home Button */}
        <div className="text-center">
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <span className="flex items-center gap-3">
              <span className="group-hover:animate-bounce">🍁</span>
              ホームに戻る
              <span className="group-hover:animate-bounce">🍁</span>
            </span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-fall {
          animation: fall 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
