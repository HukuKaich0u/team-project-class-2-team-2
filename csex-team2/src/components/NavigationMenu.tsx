"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, Home, Snowflake, Sun, Flower, Leaf } from "lucide-react";

export function NavigationMenu() {
  const menuItems = [
    {
      href: "/",
      label: "ホーム",
      icon: Home,
      emoji: "🏠",
      description: "メインページ",
      gradient: "from-gray-500 to-slate-500",
    },
    {
      href: "/min",
      label: "春の音楽",
      icon: Flower,
      emoji: "🌸",
      description: "Min's Spring Collection",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      href: "/daisuke",
      label: "夏の音楽",
      icon: Sun,
      emoji: "🌞",
      description: "Daisuke's Summer Collection",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      href: "/koki",
      label: "秋の音楽",
      icon: Leaf,
      emoji: "🍂",
      description: "Koki's Autumn Collection",
      gradient: "from-orange-500 to-red-500",
    },
    {
      href: "/ritsu",
      label: "冬の音楽",
      icon: Snowflake,
      emoji: "❄️",
      description: "Ritsu's Winter Collection",
      gradient: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="glass-effect border border-white/20 dark:border-gray-700/50 hover:bg-white/10 dark:hover:bg-gray-800/50 transition-all duration-300"
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Menu className="h-4 w-4" />
            </motion.div>
            <span className="hidden sm:inline font-medium">メニュー</span>
          </motion.div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64 glass-effect backdrop-blur-md border-white/20 dark:border-gray-700/50 shadow-xl"
      >
        <DropdownMenuLabel className="text-center py-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              🎵 季節の音楽コレクション
            </span>
          </motion.div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/20 dark:bg-gray-700/50" />

        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <DropdownMenuItem key={item.href} className="p-0">
              <Link
                href={item.href}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-md hover:bg-white/10 dark:hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <motion.div
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${item.gradient} text-white shadow-lg`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.span
                    className="text-lg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {item.emoji}
                  </motion.span>
                </motion.div>
                <div className="flex-1">
                  <motion.div
                    className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                  >
                    {item.label}
                  </motion.div>
                  <motion.div
                    className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  >
                    {item.description}
                  </motion.div>
                </div>
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 5 }}
                >
                  <IconComponent className="h-4 w-4 text-gray-400" />
                </motion.div>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
