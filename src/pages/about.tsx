import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Pawan Chouhan | Full Stack Developer"
        description="Learn more about Pawan Chouhan, a Full Stack Developer with hands-on experience building scalable web applications using React.js, Next.js, Node.js, and MongoDB."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Pawan Chouhan - Full Stack Developer",
          description:
            "Dive into the story of Pawan Chouhan, a Full Stack Developer. Uncover the experiences, skills, and passion that fuel a commitment to delivering performant, user-centric web solutions.",
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
              "Full Stack Developer portfolio, Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, MongoDB, REST API, JavaScript, Tailwind CSS, Web Developer, Frontend Developer, Backend Developer",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
