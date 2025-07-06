import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      {/* Header */}
      <header className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Seasonal Music Journey
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              4人のメンバーが季節ごとに愛する音楽を紹介します
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              name: "Daisuke",
              season: "春",
              color: "from-pink-500 to-rose-500",
              bgColor: "bg-pink-50 dark:bg-pink-900/20",
            },
            {
              name: "Minmin",
              season: "夏",
              color: "from-yellow-500 to-orange-500",
              bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
            },
            {
              name: "Ritsu",
              season: "秋",
              color: "from-orange-500 to-red-500",
              bgColor: "bg-orange-50 dark:bg-orange-900/20",
            },
            {
              name: "Koki",
              season: "冬",
              color: "from-blue-500 to-cyan-500",
              bgColor: "bg-blue-50 dark:bg-blue-900/20",
            },
          ].map((member, index) => (
            <div
              key={index}
              className={`${member.bgColor} rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto`}
              >
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800 dark:text-gray-200">
                {member.name}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
                {member.season}の音楽担当
              </p>
              <button
                className={`w-full py-2 px-4 rounded-lg bg-gradient-to-r ${member.color} text-white font-medium hover:shadow-md transition-all duration-300`}
              >
                音楽を見る
              </button>
            </div>
          ))}
        </div>

        {/* Seasons Section */}
        <div className="space-y-16">
          {[
            {
              season: "春",
              title: "Spring Melodies",
              description: "桜の季節に響く、新しい始まりの音楽",
              color: "from-pink-500 to-rose-500",
              bgColor:
                "bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
            },
            {
              season: "夏",
              title: "Summer Vibes",
              description: "太陽の下で楽しむ、エネルギッシュなサウンド",
              color: "from-yellow-500 to-orange-500",
              bgColor:
                "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
            },
            {
              season: "秋",
              title: "Autumn Harmony",
              description: "紅葉と共に奏でる、落ち着いたメロディー",
              color: "from-orange-500 to-red-500",
              bgColor:
                "bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
            },
            {
              season: "冬",
              title: "Winter Serenity",
              description: "雪景色に映える、心温まる音楽",
              color: "from-blue-500 to-cyan-500",
              bgColor:
                "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
            },
          ].map((season, index) => (
            <section
              key={index}
              className={`rounded-3xl p-8 ${season.bgColor} border border-gray-200 dark:border-gray-700`}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <div
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${season.color} text-white font-medium mb-4`}
                  >
                    {season.season}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {season.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {season.description}
                  </p>
                  <button
                    className={`px-6 py-3 rounded-lg bg-gradient-to-r ${season.color} text-white font-medium hover:shadow-lg transition-all duration-300`}
                  >
                    プレイリストを見る
                  </button>
                </div>
                <div className="flex-1 lg:flex-none">
                  <div
                    className={`w-64 h-64 rounded-2xl bg-gradient-to-br ${season.color} flex items-center justify-center text-white text-6xl font-bold shadow-xl`}
                  >
                    {season.season}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © 2024 Seasonal Music Journey. Made with ❤️ by Team 2
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
