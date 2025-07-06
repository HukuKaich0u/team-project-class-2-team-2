"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SeasonSectionProps {
  season: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  onViewPlaylist?: () => void;
}

export default function SeasonSection({
  season,
  title,
  description,
  color,
  onViewPlaylist,
}: SeasonSectionProps) {
  return (
    <Card className="group relative overflow-hidden glass-effect border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
      {/* Background gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      ></div>

      <CardContent className="p-8 lg:p-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div
                className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${color} text-white font-bold text-lg shadow-lg`}
              >
                <span className="mr-2">✨</span>
                {season}
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600"></div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              {title}
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              {description}
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Button
                className={`bg-gradient-to-r ${color} text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:scale-105 group-hover:shadow-2xl`}
                onClick={onViewPlaylist}
              >
                <span className="flex items-center gap-3">
                  <span>🎧</span>
                  プレイリストを見る
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </span>
              </Button>

              <div className="hidden sm:flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <span className="text-sm">Curated Collection</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div
              className={`relative w-72 h-72 rounded-3xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105`}
            >
              <div className="text-center">
                <div className="text-7xl font-bold mb-2 opacity-90">
                  {season}
                </div>
                <div className="text-sm opacity-75 font-medium tracking-wider">
                  SEASON
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-4 w-1 h-1 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
