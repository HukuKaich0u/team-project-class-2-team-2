"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Animated Beach Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-yellow-100"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%23ffffff'/%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%23ffffff'/%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: "200% 100%",
          animation: "wave 15s ease-in-out infinite",
        }}
      />

      {/* Floating Summer Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 text-6xl animate-bounce"
          style={{ animationDelay: "0s" }}
        >
          🌞
        </div>
        <div
          className="absolute top-32 right-20 text-4xl animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          🌴
        </div>
        <div
          className="absolute top-60 left-1/4 text-3xl animate-bounce"
          style={{ animationDelay: "2s" }}
        >
          🏄
        </div>
        <div
          className="absolute bottom-40 right-10 text-5xl animate-bounce"
          style={{ animationDelay: "3s" }}
        >
          🌊
        </div>
        <div
          className="absolute bottom-20 left-20 text-4xl animate-bounce"
          style={{ animationDelay: "4s" }}
        >
          🎇
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 mt-16">
          <h1 className="text-6xl font-bold text-orange-600 mb-4 drop-shadow-lg animate-pulse">
            Summer Songs
          </h1>
          <h2 className="text-3xl text-teal-600 border-b-4 border-dashed border-teal-300 pb-2 inline-block">
            夏に聞きたい曲
          </h2>
        </div>

        {/* Songs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {songs.map((song, index) => (
            <Card
              key={index}
              className="bg-white/90 backdrop-blur-sm border-2 border-orange-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">
                    {song.title}
                  </h3>
                  <p className="text-lg text-teal-600 font-semibold">
                    {song.artist}
                  </p>
                </div>

                {/* YouTube Video */}
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

                {/* Description */}
                <div className="text-center">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {song.description}
                  </p>
                  {song.comment && (
                    <p className="text-orange-600 font-semibold mt-3 text-lg">
                      {song.comment}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            🏠 ホームに戻る
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 0%;
          }
        }
      `}</style>
    </div>
  );
}
