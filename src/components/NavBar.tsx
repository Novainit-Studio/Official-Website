"use client";
import { usePathname } from "next/navigation";
import { Home, Users, Calendar, CheckSquare, Info } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// import logo from "@/assets/Black_word.png";
import { Discord } from "react-bootstrap-icons";

import BubbleMenu from '@/components/BubbleMenu'

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const items = [
    {
      label: 'Home',
      href: '/',
      ariaLabel: 'Home',
      rotation: -8,
      hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
    },
    {
      label: 'Projects',
      href: '/projects',
      ariaLabel: 'Projects',
      rotation: 4,
      hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
    },
    {
      label: 'OUTBOX',
      href: 'https://outbox.tw',
      ariaLabel: 'Blog',
      rotation: -1,
      hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    },
  ];


  const socialItems = [
    {
      icon: <Discord className="w-5 h-5"></Discord>,
      label: "Discord",
      path: "https://dc.sunary.tw/",
    },
  ];

  return (
      <BubbleMenu
        logo={<Image src={"/assets/logo.png"} alt="logo" className="rounded-[100%]" width={70} height={70}></Image>}
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
        className="fixed"
      />
  );
}
