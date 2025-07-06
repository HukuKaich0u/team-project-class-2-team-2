"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Cherry Blossom Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23fdf2f8'/%3E%3Cstop offset='100%25' stop-color='%23fce7f3'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23a)'/%3E%3C/svg%3E")`,
          backgroundColor: "#fdf2f8",
        }}
      />

      {/* Floating Cherry Blossoms */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 text-2xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            🌸
          </div>
        ))}
      </div>

      {/* Animated Petals */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-1/4 text-pink-200 text-lg animate-bounce"
          style={{ animationDelay: "0s" }}
        >
          🌸
        </div>
        <div
          className="absolute top-20 right-1/3 text-pink-300 text-xl animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          🌸
        </div>
        <div
          className="absolute top-40 left-1/2 text-pink-200 text-lg animate-bounce"
          style={{ animationDelay: "2s" }}
        >
          🌸
        </div>
        <div
          className="absolute bottom-1/3 right-1/4 text-pink-300 text-xl animate-bounce"
          style={{ animationDelay: "3s" }}
        >
          🌸
        </div>
        <div
          className="absolute bottom-20 left-1/5 text-pink-200 text-lg animate-bounce"
          style={{ animationDelay: "4s" }}
        >
          🌸
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 mt-8">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-pink-200/50">
            <h1 className="text-5xl font-bold text-pink-600 mb-4 drop-shadow-lg">
              春におすすめの曲
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Songs Container */}
        <div className="flex flex-wrap justify-center gap-8">
          {songs.map((song, index) => (
            <Card
              key={index}
              className="w-full max-w-md bg-white/80 backdrop-blur-sm border border-pink-200/50 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 text-white p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-center">{song.title}</h3>
                <p className="text-center text-pink-100 font-medium">
                  {song.artist}
                </p>
              </div>

              <CardContent className="p-6">
                {/* YouTube Video */}
                <div className="mb-6">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
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
                <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
                  <h4 className="text-lg font-bold text-pink-600 mb-3 flex items-center gap-2">
                    <span>💕</span>
                    ここすきポイント
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{song.point}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            🌸 ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
