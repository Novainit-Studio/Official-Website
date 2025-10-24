import { getAllProjects } from "@/lib/getProject";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const data = getAllProjects();
  return (
    <section className="min-h-screen flex flex-col items-center justify-center mt-1 mb-40">
      <div className="mt-20 text-[40px] text-black">我們的作品集</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {data.map((e, index) => (
          <div key={index} className="min-w-[450px] max-w-[450px] cursor-target">
            <a
              href={"/projects/" + e.id}
              className="bg-white rounded-lg p-4 flex flex-col justify-between h-full group cursor-pointer hover:-translate-y-2 duration-300 transition-all hover:shadow-md"
            >
              {/* 圖片固定比例 */}
              <div className="aspect-[18/9] overflow-hidden rounded-lg">
                <Image
                  src={"/projects/" + e.banner}
                  alt="logo"
                  className="object-cover w-full h-full group-hover:shadow-md duration-300 transition-all"
                  width={800}
                  height={540}
                />
              </div>

              {/* 文字區塊 */}
              <div className="mt-6 flex flex-col flex-1 justify-between">
                <div className="text-[25px] group-hover:-translate-y-2 text-gray-900 duration-300 transition-all flex items-center gap-x-3">
                  {e.name} {e.link && <Link href={e.link} className="hover:text-[#9c9c9c] duration-300 transition-all"><SquareArrowOutUpRight></SquareArrowOutUpRight></Link>}
                </div>
                <div className="text-sm text-gray-700 mt-2 group-hover:-translate-y-3 duration-300 transition-all">
                  {e.description}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>

  );
}
