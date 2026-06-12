import React from "react";

import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLaptopCode,
  FaMobile,
  FaPython,
  FaReact,
  FaGaugeHigh,
  FaTruckMoving,
  FaWheelchair,
  FaBookOpen,
  FaCodeBranch,
  FaRobot,
  FaBootstrap,
  FaSearchengin,
  FaSquareJs,
  FaAndroid,
  FaLinux,
  FaNetworkWired,
  FaSitemap,
} from "react-icons/fa6";

import {
  SiExpress,
  SiFirebase,
  SiFramer,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiPostman,
  SiReplit,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiKotlin,
  SiSupabase,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiNodedotjs,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiCanva,
  SiFigma,
} from "react-icons/si";

import { GiBrain } from "react-icons/gi";
import { MdApi } from "react-icons/md";
import { TbBrandCpp } from "react-icons/tb";
import { GrOracle } from "react-icons/gr";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Languages & Databases",
    data: [
      { title: "C/C++", logoComponent: SiCplusplus, color: "#ff9100" },
      { title: "Kotlin", logoComponent: SiKotlin, color: "#00ff00" },
      { title: "Java", logoComponent: FaJava, color: "#ff6b35" },
      { title: "Python", logoComponent: FaPython, color: "#00ff00" },
      { title: "MongoDB", logoComponent: SiMongodb, color: "#00ff00" },
      { title: "Firebase", logoComponent: SiFirebase, color: "#ff9100" },
      { title: "MySQL", logoComponent: SiMysql, color: "#ffffff" },
      { title: "JavaScript", logoComponent: SiJavascript, color: "#ff9100" },
      { title: "Supabase", logoComponent: SiSupabase, color: "#00ff00" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    data: [
      { title: "Numpy", logoComponent: SiNumpy, color: "#00ff00" },
      { title: "Pandas", logoComponent: SiPandas, color: "#ffffff" },
      { title: "Scikit-learn", logoComponent: SiScikitlearn, color: "#ff9100" },
      { title: "Node.js", logoComponent: SiNodedotjs, color: "#00ff00" },
      { title: "Matplotlib", logoComponent: FaReact, color: "#ff6b35" },
      { title: "Jetpack Compose", logoComponent: FaAndroid, color: "#00ff00" },
      { title: "Tailwind CSS", logoComponent: SiTailwindcss, color: "#00ff00" },
    ],
  },
  {
    title: "Dev Tools & Platforms",
    data: [
      { title: "Git", logoComponent: FaGitAlt, color: "#ff6b35" },
      { title: "GitHub", logoComponent: FaGithub, color: "#ffffff" },
      { title: "Canva", logoComponent: SiCanva, color: "#00ff00" },
      { title: "Figma", logoComponent: SiFigma, color: "#ff6b35" },
      { title: "Wireshark", logoComponent: FaNetworkWired, color: "#ff9100" },
      { title: "VS Code", logoComponent: FaLaptopCode, color: "#00ff00" },
      { title: "Vercel", logoComponent: SiVercel, color: "#ffffff" },
      { title: "Linux", logoComponent: FaLinux, color: "#ff9100" },
    ],
  },
  {
    title: "Concepts & Technologies",
    data: [
      { title: "API Design", logoComponent: MdApi, color: "#ff9100" },
      { title: "Android", logoComponent: FaAndroid, color: "#00ff00" },
      { title: "DSA", logoComponent: FaBookOpen, color: "#ffffff" },
      { title: "System Design", logoComponent: FaSitemap, color: "#ff6b35" },
      { title: "OOPs", logoComponent: FaLaptopCode, color: "#ff9100" },
      { title: "LSTM", logoComponent: GiBrain, color: "#ff6b35" },
      { title: "Machine Learning", logoComponent: GiBrain, color: "#00ff00" },
      {
        title: "Performance Optimization",
        logoComponent: FaGaugeHigh,
        color: "#00ff00",
      },
      { title: "Responsive Design", logoComponent: FaMobile, color: "#ff9100" },
      {
        title: "Material Design",
        logoComponent: FaSearchengin,
        color: "#ff6b35",
      },
      {
        title: "Software Development",
        logoComponent: FaLaptopCode,
        color: "#ffffff",
      },
      { title: "Test Automation", logoComponent: FaRobot, color: "#ff9100" },
      {
        title: "Version Control",
        logoComponent: FaCodeBranch,
        color: "#00ff00",
      },
    ],
  },
];
