"use client";
import Image from "next/image";
import logo from "@/assets/Black.png";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Particles from "@/components/background/Particles";
import Link from "next/link";
import Cubes from "@/components/Cubes";

// 註冊 ScrollTrigger 插件
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "會考霸｜Kaobar",
    description: "一個整合會考資源、提供會考線上社群的免費資源整合平台，讓會考生再準備會考時事半功倍！",
    link: "https://kaobar.dreamland-studio.org",
    banner: "kaobar.png"
  },
  {
    title: "OUTBOX",
    description:
      "這是一個所有人都能參加的創意競賽，你能使用AI以及你那創意的大腦發揮創意，創造、生成出一個作品並投稿上來，讓我們大家都看看！",
    link: "https://outbox.tw",
    banner: "outbox.png"
  },
  {
    title: "築夢之地工作室 — 官網",
    description: "以學生發展為核心，推動、協助教育為導向的社群組織",
    link: "https://kaobar.dreamland-studio.org",
    banner: "dreamland-studio.png"
  },
  {
    title: "Securibit — 跨平台2FA驗證 APP",
    description: "一個跨平台皆可使用的2AF APP",
    link: "https://kaobar.dreamland-studio.org",
    banner: "Securibit.png"
  },
  {
    title: "PLAYOFFS — 臺灣 Minecraft 速通競賽官網",
    description: "這是一個由臺灣Minecrft玩家所發起的速通競賽，透過宣傳、引導的方式帶領臺灣Minecraft速通",
    link: "https://kaobar.dreamland-studio.org",
    banner: "playoffs.png"
  }

];

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!section || !trigger) return;

    // 計算需要滾動的距離
    const scrollWidth = section.scrollWidth - window.innerWidth;

    const animation = gsap.to(section, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <div>
      <div className="h-screen grid grid-cols-5 mx-20 items-center leading-[5.5px] z-10">
        <div className="col-span-3">
          <motion.div
            initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-gray-800 md:text-[50px] mb-1.5 text-sm flex font-bold"
          >
            像 Nova 一樣，在無限的創意裡誕生，然後毫不猶豫地按下 Init。
          </motion.div>
          <motion.div
            initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
            animate={{ clipPath: "inset(0%  0% 0% 0%)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-gray-500 md:text-lg mb-1.5 text-sm flex items-center"
          >
            瘋狂的接受與創造。Everything you can imagine is real
          </motion.div>
        </div>
        <div className="col-span-2 flex items-center justify-center w-full">
          <Cubes
            gridSize={6}
            maxAngle={60}
            radius={2}
            borderStyle="2px dashed #000"
            faceColor="#fff"
            rippleColor="#000"
            rippleSpeed={0.1}
            autoAnimate={true}
            rippleOnClick={true}
          />
        </div>
      </div>

      {/* 橫向滾動區域 */}
      <div ref={triggerRef} className="overflow-hidden bg-white border-2 border-black">
        <div className="h-screen flex items-center">
          <div ref={sectionRef} className="flex gap-8 px-20">
            {/* 標題卡片 */}
            <div className="min-w-[400px] flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                近期的作品
              </h2>
              <p className="text-gray-600">
                向右滑動探索更多精彩專案 →
              </p>
            </div>

            {/* 作品卡片 */}
            {services.map((service, index) => (
              <div
                key={index}
                className="min-w-[450px] max-w-[450px] cursor-target"
              >
                <Link
                  className="bg-white rounded-lg p-4 flex-1 flex flex-col group cursor-pointer h-full"
                  href={service.link}
                >
                  <Image
                    src={"/projects/" + service.banner}
                    alt="logo"
                    className="w-full rounded-lg group-hover:rounded-2xl group-hover:translate-y-1 duration-300 transition-all"
                    width={800}
                    height={540}
                  />

                  <div className="flex items-center mt-6 mb-1">
                    <div className="text-[25px] group-hover:-translate-y-2 text-gray-900 duration-300 transition-all">
                      {service.title}
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 group-hover:-translate-y-3 duration-300 transition-all">
                    {service.description}
                  </div>
                </Link>
              </div>
            ))}

            {/* 結尾卡片 - 查看完整作品集按鈕 */}
            <div className="min-w-[400px] flex flex-col justify-center items-center">
              <Link
                href="/projects"
                className="group px-8 py-4 bg-gray-900 text-white rounded-lg font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center"
              >
                查看完整作品集
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <p className="text-gray-500 mt-4 text-center text-sm">
                發現更多創意專案
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}