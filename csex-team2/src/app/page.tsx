"use client";

import { useRouter } from "next/navigation";
import MemberCard from "@/components/MemberCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavigationMenu } from "@/components/NavigationMenu";
import { MEMBERS } from "@/data/constants";

export default function Home() {
  const router = useRouter();

  const handleViewMusic = (memberName: string) => {
    const routes: { [key: string]: string } = {
      Min: "/min",
      Daisuke: "/daisuke",
      Koki: "/koki",
      Ritsu: "/ritsu",
    };

    if (routes[memberName]) {
      router.push(routes[memberName]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative overflow-hidden glass-effect border-b border-white/20 dark:border-gray-700/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>

        {/* Header Controls */}
        <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
          <NavigationMenu />
          <ThemeToggle />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                🎵 Music Discovery Platform
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text mb-6 tracking-tight">
              Seasonal Music
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                Journey
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              4人のメンバーが季節ごとに愛する音楽を紹介します
              <br />
              <span className="text-lg text-gray-500 dark:text-gray-400">
                それぞれの季節に込められた想いと共に
              </span>
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Members Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Music Curators
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              各メンバーが担当する季節の音楽をお楽しみください
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MEMBERS.map((member, index) => (
              <div
                key={index}
                className="floating-animation"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <MemberCard
                  name={member.name}
                  season={member.season}
                  color={member.color}
                  bgColor={member.bgColor}
                  onViewMusic={() => handleViewMusic(member.name)}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative glass-effect border-t border-white/20 dark:border-gray-700/50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="mb-6">
              <div className="flex justify-center space-x-6 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🎵</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🎶</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🎼</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              © 2025 Seasonal Music Journey
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Made with ❤️ by Team 2 - Crafting Musical Experiences
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
