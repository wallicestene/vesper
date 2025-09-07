"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export default function Page() {
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
    <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <Navbar />
      {/* Homepage hero section */}
      <section className="hero min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Top container */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Welcome to <span className="">Vesper</span>
              <br />
              Your social media workspace
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
