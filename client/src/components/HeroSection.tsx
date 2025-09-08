"use client";
import { GridPattern } from "@/components/magicui/grid-pattern";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});
const HeroSection = () => {
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
  return (
    /* Homepage hero section */
    <section className="hero relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10"> {/* Adjusted py for responsive padding */}
      <GridPattern
        width={45}
        height={50}
        x={-1}
        y={-1}
        strokeWidth={0.5}
        // strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(750px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]", // Responsive mask size
          "absolute inset-0 z-[-1]"
        )}
      />
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8"> {/* Adjusted space-y for tighter mobile spacing */}
        {/* Top container */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold"> {/* Reduced xl size to prevent excessive bigness */}
            Welcome to <span className="">Vesper</span>
            <br />
            Your social media workspace
          </h1>
        </div>

        {/* Middle container */}
        <div className="space-y-4">
          <p className="text-sm sm:text-base max-w-2xl mx-auto"> {/* Added sm: for better small-screen readability */}
            Your all-in-one social media management tool.
          </p>
        </div>

        {/* Bottom container - Email signup */}
        <div className="max-w-md mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden border border-primary-500 space-x-2 sm:space-x-3 p-1"> {/* Adjusted space-x for mobile */}
                        <Input
                          placeholder="Enter your email address"
                          className="flex-1 h-12 sm:h-14 px-4 border-none bg-transparent text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-0 text-sm sm:text-base rounded-full"
                          {...field}
                        />
                        <Button
                          type="submit"
                          className="hidden md:block h-12 sm:h-14 px-4 sm:px-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm sm:text-base rounded-full transition-all duration-200 cursor-pointer"
                        >
                          Get Started
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="md:hidden h-12 w-full px-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm sm:text-base rounded-full transition-all duration-200 cursor-pointer"
              >
                Get Started
              </Button>
            </form>
          </Form>
          <div>
            <p className="text-xs text-gray-500 mt-2">
              By entering your email, you agree to receive emails from Vesper.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
