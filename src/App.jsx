import { useState } from "react";
import profilePic from "./assets/profilepic.jpg";
import {
  FaGlobe,
  FaGithub,
  FaPlay,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

// Theme definitions
const themes = {
  "Cool Breeze": {
    gradient: "from-indigo-100 via-white to-sky-100",
    blobs: ["bg-indigo-300", "bg-sky-300", "bg-purple-300"],
    tab: "bg-indigo-100",
    active: "bg-indigo-300",
    hover: "hover:bg-indigo-200",
    border: "border-black",
    text: "text-black",
  },
  "Sunset Glow": {
    gradient: "from-red-100 via-white to-yellow-100",
    blobs: ["bg-red-300", "bg-orange-300", "bg-yellow-300"],
    tab: "bg-yellow-200",
    active: "bg-yellow-300",
    hover: "hover:bg-yellow-200",
    border: "border-indigo-500",
    text: "text-black",
  },
  Maroon: {
    gradient: "from-cosmic via-viola to-cosmic",
    blobs: ["bg-cosmic", "bg-viola", "bg-violet"],
    tab: "bg-viola",
    active: "bg-cosmic",
    hover: "hover:bg-cosmic",
    text: "text-white",
  },
};

function App() {
  const tabs = ["About", "Projects", "Contact"];
  const [activeTab, setActiveTab] = useState("About");
  const [theme, setTheme] = useState("Cool Breeze");
  const current = themes[theme];

  const tabContent = {
    About: (
      <div>
        <img
          src={profilePic}
          alt="Profile avatar"
          className="w-43 h-43 rounded object-cover float-right ml-2 mb-2 shadow-md transition-transform hover:scale-105"
        />
        <p className="mb-2 text-lg font-semibold">Hi, I'm Trinh</p>
        <p className="text-sm">
          B.S. in Computer Science, planning to pursue a Master's in Computer
          Engineering.
        </p>
      </div>
    ),
    Projects: (
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <div className="flex gap-2">
            <a
              href="https://nhiuchuyen-chat-website.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
            >
              <FaGlobe className="hover:text-indigo-600" />
            </a>
            <a
              href="https://github.com/TrinhDangDang/nhiuchuyen-chat-website"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub className="hover:text-indigo-600" />
            </a>
          </div>
          <span>Nhieu Chuyen</span>
        </li>
        <li className="flex items-center gap-2">
          <a
            href="https://github.com/TrinhDangDang/Th-c"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub className="hover:text-indigo-600" />
          </a>
          <span>Thuc</span>
        </li>
        <li className="flex items-center gap-2">
          <a
            href="https://trinhdangdang.github.io/pacman-inspired-game/"
            target="_blank"
            rel="noopener noreferrer"
            title="Play"
          >
            <FaPlay className="hover:text-indigo-600" />
          </a>
          <span>BFS Game</span>
        </li>
      </ul>
    ),
    Contact: (
      <div className="space-y-2">
        <p className="flex items-center gap-2">
          <FaEnvelope />
          <a href="mailto:trinhdangdang@gmail.com">trinhdangdang@gmail.com</a>
        </p>
        <p className="flex items-center gap-2">
          <FaGithub />
          <a
            href="https://github.com/TrinhDangDang"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/TrinhDangDang
          </a>
        </p>
        <p className="flex items-center gap-2">
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/trinh-dang-9b09361b6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            trinh-dang-9b09361b6/
          </a>
        </p>
        <p>Themes</p>
        <div className="flex gap-2 text-sm">
          {Object.keys(themes).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`px-2 py-1 rounded ${
                theme === t ? "bg-black text-white" : "bg-gray-100"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <main
      className={`relative min-h-screen w-full bg-gradient-to-tr ${current.gradient} text-gray-900 flex flex-col items-center justify-center p-6 font-sans`}
    >
      <div className="relative w-full max-w-md flex items-center justify-center">
        {/* 🎨 Blobs */}
        <div
          className={`absolute w-80 h-80 ${current.blobs[0]} rounded-full mix-blend-multiply top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 filter blur-xl opacity-70 animate-[blob_7s_ease-in-out_infinite] animation-delay-2000`}
        ></div>
        <div
          className={`absolute w-80 h-80 ${current.blobs[1]} rounded-full mix-blend-multiply top-3/4 left-2/3 transform -translate-x-1/2 -translate-y-1/2 filter blur-xl opacity-70 animate-[blob_7s_ease-in-out_infinite]`}
        ></div>
        <div
          className={`absolute w-80 h-80 ${current.blobs[2]} rounded-full mix-blend-multiply top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 filter blur-xl opacity-70 animate-[blob_7s_ease-in-out_infinite] animation-delay-4000`}
        ></div>

        {/* 📁 Folder UI */}
        <div className="relative bg-white w-80 rounded-t-xl shadow-md z-10">
          {/* Tabs */}
          <div
            className={`flex space-x-2 ${current.tab} ${current.text} px-4 py-2 rounded-t-md shadow-sm`}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-semibold px-2 py-1 rounded ${
                  activeTab === tab ? current.active : current.hover
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-5 pt-6 rounded-b-xl h-64 overflow-y-auto">
            <div className="text-gray-700 space-y-4">
              {tabContent[activeTab]}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
