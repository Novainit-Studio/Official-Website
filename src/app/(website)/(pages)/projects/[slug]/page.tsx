export const runtime = 'edge';
import getProject from "@/lib/getProject";

import Image from "next/image";
import Link from "next/link";

export default async function ProjectPage({
    params,
}: Readonly<{
    params: Promise<{ slug: string }>
}>) {

    const { slug } = await params;
    const data = await getProject(slug);
    return (
        <section className="mt-40 mb-40 flex mx-70">
            <div className="grid grid-cols-6 gap-x-5">
                <div className="col-span-4">
                    <div className="tracking-[4px] text-[40px] font-[300]">{data?.name}</div>
                    <div className="tracking-[4px] text-[16px] text-[#262626] font-[300]">{data?.description}</div>
                    <Image src={"/projects/" + data?.banner} alt="" className="mt-10 w-[full] rounded-4xl" width={10000} height={0}></Image>
                </div>
                <div className="col-span-2">
                    <ul>
                        <li className="my-[20px]">
                            <div className="tracking-[2px] text-[22px] font-[400]">專案狀態</div>
                            <div className="tracking-[2px] text-[18px] font-[300]">{data?.status === 0
                                ? "已停止"
                                : data?.status === 1
                                    ? "長期營運中"
                                    : data?.status === 2
                                        ? "已結案"
                                            : "未知狀態"}</div>
                        </li>
                        <li className="my-[20px]">
                            <div className="tracking-[2px] text-[22px] font-[400]">連結</div>
                            {(data?.link !== "#" || !data?.link) ? <a href={data?.link} target="_blank" className="tracking-[2px] text-[14px] font-[300]">{data?.link ? data?.link : "無"}</a> : "無"}
                            
                        </li>
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </section>
    );
}