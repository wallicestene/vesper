import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check } from "lucide-react";

interface FeaturesContainerProps {
  title?: string;
  heading?: string;
  description?: string;
  imageUrl?: string;
  moreInfo?: string[];
}
const FeaturesContainer = ({
  title,
  heading,
  description,
  imageUrl,
  moreInfo,
}: FeaturesContainerProps) => {
  const getBackgroundColor = (title: string | undefined) => {
    const colorMap: { [key: string]: string } = {
      Publish: "bg-[var(--vibrant-blue-200)]",
      "Content Library": "bg-[var(--vibrant-green-200)]",
      Analytics: "bg-[var(--vibrant-pink-200)]",
      Collaboration: "bg-[var(--vibrant-purple-200)]",
      Engage: "bg-[var(--vibrant-orange-200)]",
    };

    return colorMap[title || ""] || "bg-[var(--vibrant-blue-200)]";
  };
  const getTitleColor = (title: string | undefined) => {
    const colorMap: { [key: string]: string } = {
      Publish: "text-[var(--vibrant-blue-600)]",
      "Content Library": "text-[var(--vibrant-green-600)]",
      Analytics: "text-[var(--vibrant-pink-600)]",
      Collaboration: "text-[var(--vibrant-purple-600)]",
      Engage: "text-[var(--vibrant-orange-600)]",
    };

    return colorMap[title || ""] || "text-[var(--vibrant-blue-600)]";
  };
  return (
    <section className="w-full">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <Card
          className={`${getBackgroundColor(
            title
          )} border-0 shadow-lg rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 group min-h-[90vh]`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div
              className={`order-2 ${
                title === "Content Library" ? " lg:order-2" : "lg:order-1 "
              }`}
            >
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl group-hover:scale-[102%] sm:group-hover:scale-[103%] transition-transform duration-300 sm:duration-400 ease-in-out">
                <Image
                  src={imageUrl || "/publish.webp"}
                  alt="Social Media Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div
              className={`order-1 space-y-4 sm:space-y-6 ${
                title === "Content Library" ? " lg:order-1 " : "lg:order-2"
              }`}
            >
              <div className="space-y-4">
                <p
                  className={`${getTitleColor(
                    title
                  )} font-semibold text-xs sm:text-sm uppercase tracking-wider`}
                >
                  {title}
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-950 leading-tight">
                  {heading}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-primary-900 leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="py-2 sm:py-4">
                <Button className="bg-primary-900 hover:bg-primary-700 text-white px-6 sm:px-8 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-sm sm:text-base transition-colors duration-200 hover:cursor-pointer w-full sm:w-auto">
                  <span>Learn More</span>
                </Button>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <ul className="space-y-2 sm:space-y-3">
                  {moreInfo &&
                    moreInfo.map((info, index) => (
                      <li
                        key={index}
                        className="flex items-start sm:items-center text-secondary-900 text-sm sm:text-base"
                      >
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-0 flex-shrink-0" />
                        <span className="ml-2 sm:ml-3">{info}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeaturesContainer;
