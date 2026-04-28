import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";
export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "JustSearch",
    href: "/projects",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Geolocation API"],
    image: {
      LIGHT: "/images/project/justsearch1.png",
      DARK: "/images/project/justserach2.png",
    },
  },
  {
    index: 1,
    title: "Movie Discovery App",
    href: "/projects",
    tags: ["React.js", "Node.js", "REST API", "TMDB", "JavaScript"],
    image: {
      LIGHT: "/images/project/movie1.png",
      DARK: "/images/project/movie2.png",
    },
  },
  {
    index: 2,
    title: "DOS0",
    href: "/projects",
    tags: ["React.js", "JavaScript", "CSS"],
    image: {
      LIGHT: "/images/project/doso1.png",
      DARK: "/images/project/doso2.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "JustSearch",
    favicon: "/images/projects/logos/justsearch.ico",
    imageUrl: [
      "/images/project/justsearch1.png",
      "/images/project/justserach2.png",
    ],
    description:
      "A full-stack hyperlocal business discovery platform enabling users to find nearby businesses via real-time geolocation. Features a dual-role system for end-users and shop owners, RESTful APIs for geospatial filtering, and a mobile-first React UI with dynamic result rendering.",
    sourceCodeHref: "https://github.com/pawanchouhan3101/Just-search-frontend",
    liveWebsiteHref: "https://just-search-frontend.vercel.app",
  },
  {
    name: "Movie Discovery App",
    favicon: "/images/projects/logos/movieapp.ico",
    imageUrl: [
      "/images/project/movie1.png",
      "/images/project/movie2.png",
    ],
    description:
      "A full-featured movie browsing app with a Node.js proxy backend securely managing TMDB API keys. Features real-time trending, popular, and search results, dynamic movie detail pages, genre filters, and a responsive UI optimized for both mobile and desktop.",
    sourceCodeHref: "https://github.com/pawanchouhan3101/Movie-App",
    liveWebsiteHref: "https://pawan-movie-app.vercel.app",
  },
  {
    name: "DOS0",
    favicon: "/images/projects/logos/dos0.ico",
    imageUrl: [
      "/images/project/doso1.png",
      "/images/project/doso2.png",
    ],
    description:
      "A fully responsive web application built with React.js using a strict component-based architecture. Optimized for cross-device compatibility with improved frontend load performance and clean, reusable UI structure.",
    sourceCodeHref: "https://github.com/pawanchouhan3101/Doso",
    liveWebsiteHref: "https://doso-mu.vercel.app",
  },
  
];
