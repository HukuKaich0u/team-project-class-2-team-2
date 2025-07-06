"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MemberCardProps {
  name: string;
  season: string;
  color: string;
  bgColor: string;
  onViewMusic?: () => void;
}

export default function MemberCard({
  name,
  season,
  color,
  onViewMusic,
}: MemberCardProps) {
  return (
    <Card className="group relative overflow-hidden glass-effect border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
      {/* Background gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      ></div>

      <CardHeader className="text-center relative z-10 pb-4">
        <div className="relative mb-6">
          <div
            className={`w-20 h-20 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300 glow-effect`}
          >
            {name.charAt(0)}
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
          {name}
        </h3>

        <div className="flex items-center justify-center gap-2 mb-4">
          <div
            className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}
          ></div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            {season}の音楽担当
          </p>
          <div
            className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}
          ></div>
        </div>

        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600 mx-auto"></div>
      </CardHeader>

      <CardContent className="relative z-10 pt-0">
        <Button
          className={`w-full bg-gradient-to-r ${color} text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:scale-105 group-hover:shadow-2xl`}
          onClick={onViewMusic}
        >
          <span className="flex items-center justify-center gap-2">
            <span>🎵</span>
            音楽を見る
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              →
            </span>
          </span>
        </Button>
      </CardContent>
    </Card>
  );
}
