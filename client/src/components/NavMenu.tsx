import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { JSX } from "react";
import {
  Calendar,
  BarChart3,
  CalendarDays,
  Users,
  Rocket,
  FolderOpen,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Music,
  Youtube,
  Play,
  Star,
  HelpCircle,
  Code,
  FileText,
  Globe,
} from "lucide-react";

const NavMenu = () => {
  interface Items {
    title: string;
    link: string;
    description: string;
    icon: JSX.Element;
  }

  const featuresItems: Items[] = [
    {
      title: "Content Scheduling",
      link: "/features/scheduling",
      description: "Schedule posts across multiple social media platforms",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      title: "Analytics & Insights",
      link: "/features/analytics",
      description: "Track performance and engagement metrics",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      title: "Content Calendar",
      link: "/features/calendar",
      description: "Visual calendar to manage your content strategy",
      icon: <CalendarDays className="w-5 h-5" />,
    },
    {
      title: "Team Collaboration",
      link: "/features/collaboration",
      description: "Work together with your team seamlessly",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Auto-Publishing",
      link: "/features/auto-publish",
      description: "Automatically publish content at optimal times",
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      title: "Content Library",
      link: "/features/library",
      description: "Store and organize your media assets",
      icon: <FolderOpen className="w-5 h-5" />,
    },
  ];

  const channelsItems: Items[] = [
    {
      title: "Twitter/X",
      link: "/channels/twitter",
      description: "Connect and manage your Twitter account",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      title: "Instagram",
      link: "/channels/instagram",
      description: "Share photos, stories, and reels",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      title: "Facebook",
      link: "/channels/facebook",
      description: "Manage Facebook pages and groups",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      title: "LinkedIn",
      link: "/channels/linkedin",
      description: "Professional networking and content",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      title: "TikTok",
      link: "/channels/tiktok",
      description: "Short-form video content management",
      icon: <Music className="w-5 h-5" />,
    },
    {
      title: "YouTube",
      link: "/channels/youtube",
      description: "Video content and community posts",
      icon: <Youtube className="w-5 h-5" />,
    },
  ];

  const resourcesItems: Items[] = [
    {
      title: "Getting Started",
      link: "/resources/getting-started",
      description: "Learn the basics of social media scheduling",
      icon: <Play className="w-5 h-5" />,
    },
    {
      title: "Best Practices",
      link: "/resources/best-practices",
      description: "Tips for effective social media management",
      icon: <Star className="w-5 h-5" />,
    },
    {
      title: "Help Center",
      link: "/resources/help",
      description: "Find answers to common questions",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      title: "API Documentation",
      link: "/resources/api",
      description: "Integrate Vesper with your applications",
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: "Blog",
      link: "/resources/blog",
      description: "Latest news and social media insights",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      title: "Community",
      link: "/resources/community",
      description: "Connect with other Vesper users",
      icon: <Globe className="w-5 h-5" />,
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex space-x-1">
        {/* Features Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-medium text-primary-700 hover:text-primary-800 hover:rounded-full hover:bg-primary-50 data-[state=open]:bg-primary-50 data-[state=open]:text-primary-800">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
              {featuresItems.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.link}
                  icon={item.icon}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Channels Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-medium text-primary-700 hover:text-primary-800 hover:rounded-full hover:bg-primary-50 data-[state=open]:bg-primary-50 data-[state=open]:text-primary-800">
            Channels
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
              {channelsItems.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.link}
                  icon={item.icon}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Resources Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-medium text-primary-700 hover:text-primary-800 hover:bg-primary-50 data-[state=open]:bg-primary-50 data-[state=open]:text-primary-800">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
              {resourcesItems.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.link}
                  icon={item.icon}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Pricing */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/pricing"
              className="px-4 py-2 text-base hover:rounded-full font-medium text-primary-700 hover:text-primary-800 hover:bg-primary-50 rounded-md transition-all duration-200"
            >
              Pricing
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

// Custom ListItem component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    icon?: JSX.Element;
  }
>(({ className, title, children, icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-50 hover:text-primary-800 focus:bg-primary-50 focus:text-primary-800",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <span className="text-primary-600">{icon}</span>}
            <div className="text-sm font-medium leading-none text-primary-800">
              {title}
            </div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-primary-600">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavMenu;
