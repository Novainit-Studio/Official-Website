interface ProjectData {
    name: string;
    description: string;
    banner: string;
    client: string;
    status: 0 | 1 | 2 | 3; // 0 = 已停止, 1 = 長期營運中, 2 = 已結案
    id: string;
    link?: string;

}

const Projects: Record<string, ProjectData> = {
    "kaobar": {
        name: "會考霸｜KaoBar",
        description: "一個整合會考資源、提供會考線上社群的免費資源整合平台，讓會考生再準備會考時事半功倍！",
        banner: "kaobar.png",
        client: "築夢之地工作室",
        link: "https://kaobar.dreamland-studio.org/",
        id: "kaobar",
        status: 1
    },
    "outbox": {
        name: "OUTBOX｜夢想創造競賽",
        description: "這是一個所有人都能參加的創意競賽，你能使用AI以及你那創意的大腦發揮創意，創造、生成出一個作品並投稿上來，讓我們大家都看看！",
        banner: "outbox.png",
        client: "學生平台專案",
        link: "https://outbox.tw/",
        id: "outbox",
        status: 1
    },
    "dataspare": {
        name: "Dataspare — 專業託管官網",
        description: "由三間專業的託管資訊公司合作組成，提供完善完整的託管體使用驗",
        banner: "dataspare.png",
        client: "學生平台專案",
        link: "https://datasphere.studio/",
        id: "dataspare",
        status: 1
    },
    "playoffs": {
        name: "PLAYOFFS — 臺灣 Minecraft 速通競賽官網",
        description: "這是一個由臺灣Minecrft玩家所發起的速通競賽，透過宣傳、引導的方式帶領臺灣Minecraft速通",
        banner: "playoffs.png",
        client: "學生平台專案",
        link: "https://playoffs.pages.dev/",
        id: "playoffs",
        status: 1
    },
    "dreamland-studio": {
        name: "築夢之地工作室 — 官網",
        description: "以學生發展為核心，推動、協助教育為導向的社群組織",
        banner: "dreamland-studio.png",
        client: "學生平台專案",
        link: "https://dreamland-studio.org",
        id: "dreamland-studio",
        status: 2
    },
    "cap_profound": {
        name: "115國中會考模擬考—成績查詢系統",
        description: "以學生發展為核心，推動、協助教育為導向的社群組織",
        banner: "capprofound.png",
        client: "學生平台專案",
        link: "https://capprofound.novainit.studio/",
        id: "cap_profound",
        status: 2
    },
    "securibit": {
        name: "Securibit — 跨平台2FA驗證 APP",
        description: "一個跨平台皆可使用的2AF APP",
        banner: "Securibit.png",
        client: "學生平台專案",
        link: "#",
        id: "securibit",
        status: 0
    },
    "dgs": {
        name: "DGS — Discord 機器人前代官網",
        description: "一款擁有豐富功能整合，不論是趣味、管理、休閒甚至是促進社群活躍度相關功能都應有盡有的Discord 機器人",
        banner: "dgs.png",
        client: "學生平台專案",
        link: "https://dgs-website.vercel.app/",
        id: "dgs",
        status: 2
    },
    "sunary": {
        name: "（已下架）Sunary 臺灣加密貨幣聯盟官方網站",
        description: "",
        banner: "sunary.png",
        client: "學生平台專案",
        link: "#",
        id: "sunary",
        status: 2
    },
    "rhytem": {
        name: "（已停止服務）Discord 音樂機器人官網",
        description: "專注於Discord音樂功能的機器人官方網站",
        banner: "rhytem.png",
        client: "學生平台專案",
        link: "#",
        id: "rhytem",
        status: 2
    },
    "kgame": {
        name: "（已停止開發）KGame Box",
        description: "集成所有線上遊戲，類Steam但輕量且離線的遊戲入口軟體",
        banner: "kgamebox.png",
        client: "學生平台專案",
        link: "#",
        id: "kgame",
        status: 0
    }
    
};


export default async function getProject(params: string): Promise<ProjectData | null> {
    // 若找不到對應專案，回傳 null 而不是 undefined
    return Projects[params] ?? null;
}

export function getAllProjects(): ProjectData[] {
  return Object.values(Projects);
}

export function getActiveProjects(): ProjectData[] {
  return Object.values(Projects).filter(p => p.status === 1);
}