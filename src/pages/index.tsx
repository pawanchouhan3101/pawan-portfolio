import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Pawan Chouhan | Full Stack Developer"
        description="Explore the professional portfolio of Pawan Chouhan, a Full Stack Developer with hands-on experience building scalable web applications using React.js, Next.js, Node.js, Express.js, and MongoDB."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Pawan Chouhan - Full Stack Developer",
          description:
            "Dive into the world of full stack development with Pawan Chouhan. Discover projects built with React.js, Node.js, and MongoDB, showcasing a commitment to performant, user-centric web solutions.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Pawan Chouhan - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, Express.js, MongoDB, REST API, JavaScript, Tailwind CSS, Frontend Developer, Backend Developer, Web Developer, Portfolio, Responsive Design",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}