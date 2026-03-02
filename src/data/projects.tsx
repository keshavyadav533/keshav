import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiRedis,
  SiFlutter,
  SiGithubactions,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  reactNative: {
    title: "React Native",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <SiFlutter />,
  },
  cicd: {
    title: "CI/CD",
    bg: "black",
    fg: "white",
    icon: <SiGithubactions />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "sampark",
    category: "Civic Engagement Platform",
    title: "Sampark.in",
    src: "/assets/projects-screenshots/sampark/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://sampark-in.vercel.app",
    github: "https://github.com/keshavyadav533/sampark",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center mb-6">
            Your Voice Matters To Your City
          </TypographyP>
          <TypographyP className="font-mono mb-4">
            Sampark bridges the gap between citizens and urban local bodies,
            ensuring transparency, traceability, and accountability in
            addressing your concerns. A platform that empowers citizens to 
            submit grievances and track their resolution in real-time.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">
              <strong>Submit Grievances:</strong> Citizens can easily submit their 
              concerns with detailed descriptions and location information.
            </li>
            <li className="font-mono">
              <strong>Real-time Tracking:</strong> Track the status of your 
              grievances from submission to resolution with live updates.
            </li>
            <li className="font-mono">
              <strong>Transparency & Accountability:</strong> All grievances are 
              publicly visible, ensuring accountability from local authorities.
            </li>
            <li className="font-mono">
              <strong>Explore Features:</strong> Browse through various civic 
              issues, view statistics, and understand the impact of community 
              engagement.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with modern web technologies for optimal performance and 
            scalability:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">
              <strong>Next.js:</strong> Server-side rendering and optimized 
              performance for a seamless user experience.
            </li>
            <li className="font-mono">
              <strong>Prisma:</strong> Type-safe database access with PostgreSQL 
              for reliable data management.
            </li>
            <li className="font-mono">
              <strong>Redis:</strong> Fast caching layer for improved response 
              times and real-time updates.
            </li>
            <li className="font-mono">
              <strong>TypeScript:</strong> Enhanced code quality and developer 
              experience with strong typing.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            Sampark aims to transform civic engagement by making it easier for 
            citizens to voice their concerns and for local bodies to respond 
            efficiently. The platform promotes a transparent and accountable 
            governance system where every citizen's voice truly matters.
          </p>
        </div>
      );
    },
  },
];
export default projects;
