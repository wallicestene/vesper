"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// ...existing icon components (keep them as they are)...
const FacebookIcon = ({ size = 48 }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-blue-500 rounded-2xl opacity-20"></div>
    <div className="relative bg-white rounded-2xl p-3 shadow-lg">
      <svg
        width={size - 24}
        height={size - 24}
        viewBox="0 0 24 24"
        fill="#1877F2"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </div>
  </div>
);

const TwitterIcon = ({ size = 48 }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-blue-400 rounded-2xl opacity-20"></div>
    <div className="relative bg-white rounded-2xl p-3 shadow-lg">
      <svg
        width={size - 24}
        height={size - 24}
        viewBox="0 0 24 24"
        fill="#1DA1F2"
      >
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    </div>
  </div>
);

const InstagramIcon = ({ size = 48 }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-pink-500 rounded-2xl opacity-20"></div>
    <div className="relative bg-white rounded-2xl p-3 shadow-lg">
      <svg
        width={size - 24}
        height={size - 24}
        viewBox="0 0 24 24"
        fill="#E4405F"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </div>
  </div>
);

const LinkedInIcon = ({ size = 48 }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-20"></div>
    <div className="relative bg-white rounded-2xl p-3 shadow-lg">
      <svg
        width={size - 24}
        height={size - 24}
        viewBox="0 0 24 24"
        fill="#0A66C2"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </div>
  </div>
);

const YouTubeIcon = ({ size = 48 }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-red-500 rounded-2xl opacity-20"></div>
    <div className="relative bg-white rounded-2xl p-3 shadow-lg">
      <svg
        width={size - 24}
        height={size - 24}
        viewBox="0 0 24 24"
        fill="#FF0000"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    </div>
  </div>
);

const PinterestIcon = ({ size = 48 }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-red-600 rounded-2xl opacity-20"></div>
    <div className="relative bg-white rounded-2xl p-3 shadow-lg">
      <svg
        width={size - 24}
        height={size - 24}
        viewBox="0 0 24 24"
        fill="#BD081C"
      >
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.223.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.001 12.017.001z" />
      </svg>
    </div>
  </div>
);

const TikTokIcon = ({ size = 48 }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-gray-900 rounded-2xl opacity-20"></div>
    <div className="relative bg-white rounded-2xl p-3 shadow-lg">
      <svg
        width={size - 24}
        height={size - 24}
        viewBox="0 0 24 24"
        fill="#000000"
      >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    </div>
  </div>
);

// Ultra-stable floating icon with completely smooth transitions
const FloatingIcon = ({
  icon: Icon,
  initialX,
  initialY,
  size = 48,
  blur = false,
  opacity = 1,
}) => {
  const iconRef = useRef(null);
  const animationRef = useRef(null);

  // Stable state management
  const currentPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const originalCenter = useRef({ x: 0, y: 0 });
  const isInitialized = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth interpolation function with easing
  const smoothstep = (edge0, edge1, x) => {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  };

  useEffect(() => {
    const animate = () => {
      if (!iconRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Initialize original center ONLY once when component first mounts
      if (!isInitialized.current) {
        const rect = iconRef.current.getBoundingClientRect();
        originalCenter.current.x = rect.left + rect.width / 2;
        originalCenter.current.y = rect.top + rect.height / 2;
        isInitialized.current = true;
      }

      // Calculate distance from FIXED original center
      const dx = mousePos.current.x - originalCenter.current.x;
      const dy = mousePos.current.y - originalCenter.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Continuous smooth influence calculation - no abrupt zones
      const maxDistance = 350;
      const minDistance = 20; // Much smaller minimum distance

      let influence = 0;

      if (distance < maxDistance) {
        // Create smooth influence curve that never abruptly changes
        const normalizedDistance = Math.max(
          0,
          Math.min(1, (maxDistance - distance) / maxDistance)
        );

        // Apply smoothstep for ultra-smooth falloff
        influence = smoothstep(0, 1, normalizedDistance);

        // Apply additional smoothing for the very close range
        if (distance < minDistance) {
          const closeInfluence = distance / minDistance;
          influence *= smoothstep(0, 1, closeInfluence);
        }
      }

      // Calculate target position with smooth influence
      const maxMovement = 45;

      if (distance > 0) {
        targetPos.current.x = (dx / distance) * influence * maxMovement;
        targetPos.current.y = (dy / distance) * influence * maxMovement;
      } else {
        targetPos.current.x = 0;
        targetPos.current.y = 0;
      }

      // Apply ultra-smooth interpolation with adaptive speed
      const baseSpeed = 0.03;
      const distanceFromTarget = Math.sqrt(
        Math.pow(targetPos.current.x - currentPos.current.x, 2) +
          Math.pow(targetPos.current.y - currentPos.current.y, 2)
      );

      // Adaptive speed - slower when close to target for smoother arrival
      const adaptiveSpeed =
        baseSpeed + Math.min(0.02, distanceFromTarget * 0.001);

      currentPos.current.x +=
        (targetPos.current.x - currentPos.current.x) * adaptiveSpeed;
      currentPos.current.y +=
        (targetPos.current.y - currentPos.current.y) * adaptiveSpeed;

      // Apply transform with sub-pixel precision
      iconRef.current.style.transform = `translate(-50%, -50%) translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={iconRef}
      className="absolute hover:scale-110 transition-transform duration-300"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        transform: "translate(-50%, -50%)",
        zIndex: blur ? 0 : 1,
        opacity: opacity,
        filter: blur ? "blur(2px)" : "none",
        willChange: "transform",
      }}
    >
      <Icon size={size} />
    </div>
  );
};

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export default function SmoothFloatingIcons() {
  // Form schema

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }
  // Strategic icon placement like Buffer
  const socialIcons = [
    // Top left area
    { icon: FacebookIcon, x: 15, y: 12, size: 56, blur: false, opacity: 1 },
    { icon: TwitterIcon, x: 8, y: 25, size: 44, blur: true, opacity: 0.7 },
    { icon: InstagramIcon, x: 22, y: 8, size: 48, blur: false, opacity: 0.9 },

    // Top right area
    { icon: LinkedInIcon, x: 85, y: 15, size: 52, blur: false, opacity: 1 },
    { icon: YouTubeIcon, x: 92, y: 28, size: 46, blur: true, opacity: 0.6 },
    { icon: PinterestIcon, x: 78, y: 8, size: 42, blur: true, opacity: 0.8 },

    // Left side (avoiding center content)
    { icon: TikTokIcon, x: 5, y: 45, size: 50, blur: false, opacity: 1 },
    { icon: FacebookIcon, x: 12, y: 62, size: 40, blur: true, opacity: 0.5 },
    { icon: TwitterIcon, x: 8, y: 78, size: 48, blur: false, opacity: 0.9 },

    // Right side (avoiding center content)
    { icon: InstagramIcon, x: 95, y: 48, size: 54, blur: false, opacity: 1 },
    { icon: LinkedInIcon, x: 88, y: 65, size: 44, blur: true, opacity: 0.7 },
    { icon: YouTubeIcon, x: 92, y: 82, size: 46, blur: false, opacity: 0.8 },

    // Bottom area
    { icon: PinterestIcon, x: 18, y: 88, size: 48, blur: false, opacity: 1 },
    { icon: TikTokIcon, x: 32, y: 92, size: 38, blur: true, opacity: 0.6 },
    { icon: FacebookIcon, x: 68, y: 92, size: 42, blur: true, opacity: 0.7 },
    { icon: TwitterIcon, x: 82, y: 88, size: 46, blur: false, opacity: 0.9 },

    // Background depth icons (heavily blurred)
    { icon: InstagramIcon, x: 45, y: 15, size: 36, blur: true, opacity: 0.3 },
    { icon: LinkedInIcon, x: 55, y: 85, size: 38, blur: true, opacity: 0.4 },
    { icon: YouTubeIcon, x: 25, y: 35, size: 34, blur: true, opacity: 0.3 },
    { icon: PinterestIcon, x: 75, y: 35, size: 32, blur: true, opacity: 0.4 },
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Floating Social Media Icons Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {socialIcons.map((config, index) => (
          <FloatingIcon
            key={index}
            icon={config.icon}
            initialX={config.x}
            initialY={config.y}
            size={config.size}
            blur={config.blur}
            opacity={config.opacity}
          />
        ))}
      </div>

      {/* Homepage hero section */}
      <section className="hero min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Top container */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Welcome to <span className="">Vesper</span>
            </h1>
          </div>

          {/* Middle container */}
          <div className="space-y-4">
            <p className="text-base max-w-2xl mx-auto">
              Your all-in-one social media management tool.
            </p>
          </div>

          {/* Bottom container - Email signup */}
          <div className="max-w-md mx-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden border border-primary-500 space-x-3 p-1">
                          <Input
                            placeholder="Enter your email address"
                            className="flex-1 h-14 px-4 border-none bg-transparent text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-0 text-base rounded-full"
                            {...field}
                          />
                          <Button
                            type="submit"
                            className="h-14 px-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-base rounded-full transition-all duration-200 cursor-pointer"
                          >
                            Get Started
                          </Button>
                        </div>
                      </FormControl>
                      {/* <FormDescription className="text-primary-200 text-sm">
                        Join the waitlist and be the first to know when we
                        launch.
                      </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
