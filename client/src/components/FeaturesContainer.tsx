import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check } from "lucide-react";

const FeaturesContainer = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        <Card className="bg-[var(--vibrant-blue-200)] border-0 shadow-lg rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden">
                <Image
                  src="/publish.webp"
                  alt="Social Media Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <p className="text-vibrant-blue-600 font-semibold text-sm uppercase tracking-wider">
                  Publish
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary-950 leading-tight">
                  Schedule and Publish with Ease
                </h2>
                <p className="text-base md:text-lg text-primary-900 leading-relaxed">
                  Schedule and publish posts across multiple social media
                  platforms with ease. Plan your content calendar and maintain a
                  consistent online presence.
                </p>
              </div>
              <div className="py-4">
                <Button className="bg-primary-900 hover:bg-primary-700 text-white px-8 py-5 rounded-full font-semibold transition-colors duration-200 hover:cursor-pointer">
                  <span>Learn More</span>
                </Button>
              </div>
              <div className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center text-secondary-900">
                    <Check />
                    <span className="ml-2">Multi-platform scheduling</span>
                  </li>
                  <li className="flex items-center text-secondary-900">
                    <Check />
                    <span className="ml-2">Content calendar view</span>
                  </li>
                  <li className="flex items-center text-secondary-900">
                    <Check />
                    <span className="ml-2">Automated posting</span>
                  </li>
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
