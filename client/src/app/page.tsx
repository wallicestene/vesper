"use client";

import FeaturesContainer from "@/components/FeaturesContainer";
import HeroSection from "@/components/HeroSection";
import MetricsContainer from "@/components/MetricsContainer";
import Navbar from "@/components/Navbar";

export default function Page() {
  interface featuresContainer {
    title: string;
    heading: string;
    description: string;
    imageUrl: string;
    moreInfo?: string[];
  }
  const featuresData: featuresContainer[] = [
    {
      title: "Publish",
      heading: "Schedule and Publish with Ease",
      description:
        "Schedule and publish posts across multiple social media platforms with ease. Plan your content calendar and maintain a consistent online presence.",
      imageUrl: "/publish.webp",
      moreInfo: [
        "Multi-platform scheduling",
        "Content calendar view",
        "Automated posting",
      ],
    },
    {
      title: "content Library",
      heading: "Organize Your Media Assets",
      description:
        "Store and manage your images, videos, and other media assets in one centralized content library. Easily access and reuse your content for future posts.",
      imageUrl: "/content-library.webp",
      moreInfo: [
        "Centralized media storage",
        "Tagging and categorization",
        "Easy search and retrieval",
      ],
    },
    {
      title: "Analytics",
      heading: "Track Performance and Engagement",
      description:
        "Gain insights into your social media performance with detailed analytics and reports. Monitor engagement metrics, follower growth, and post reach to optimize your strategy.",
      imageUrl: "/analytics.webp",
      moreInfo: [
        "Engagement metrics",
        "Follower growth tracking",
        "Post reach analysis",
      ],
    },
    {
      title: "Collaboration",
      heading: "Team Collaboration Made Simple",
      description:
        "Collaborate with your team members seamlessly. Assign roles, share content, and streamline your social media workflow for better productivity.",
      imageUrl: "/collaboration.webp",
    },
    {
      title: "Engage",
      heading: "Engage with Your Audience",
      description:
        "Manage and respond to comments, messages, and mentions from a single inbox. Stay connected with your audience and build meaningful relationships.",
      imageUrl: "/engage.webp",
    },
  ];
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <MetricsContainer />
      {featuresData.map((feature) => (
        <FeaturesContainer
          key={feature.title}
          title={feature.title}
          heading={feature.heading}
          description={feature.description}
          imageUrl={feature.imageUrl}
          moreInfo={feature.moreInfo}
        />
      ))}
    </div>
  );
}
