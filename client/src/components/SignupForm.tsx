"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "./ui/button";
import Link from "next/link";
import { Card } from "./ui/card";
import { signUp, signIn, useSession } from "@/lib/auth-client";
import { useState } from "react";
// import { useRouter } from "next/router";
import { AlertCircle, CheckCircle, Loader, Loader2 } from "lucide-react";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long.",
  }),
});

const SignupForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  //   const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      await signUp.email(
        {
          name: "New User",
          email: data.email,
          password: data.password,
        },
        {
          onRequest: (ctx) => {
            // show loading spinner
            setLoading(true);
            setError(null);
            setSuccess(false);
          },
          onSuccess: (ctx) => {
            // redirect to dashboard or sign in
            setLoading(false);
            setSuccess(true);
            setError(null);
            // router.push("/dashboard");
          },
          onError: (ctx) => {
            //handle error
            setLoading(false);
            setSuccess(false);
            setError(ctx.error.message);
          },
        }
      );
    } catch (error) {
      console.error("Signup error:", error);
      setLoading(false);
      setSuccess(false);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-bold text-primary-800 hover:text-primary-600 transition-colors tracking-tight inline-block"
        >
          Vesper
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full max-w-md">
          <Card className="bg-white shadow-lg border-0 rounded-2xl p-6 sm:p-8">
            {/* Welcome Text */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-2">
                Welcome to Vesper
              </h1>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Let&apos;s get you started with your social media workspace
              </p>
            </div>

            {/* Error Alert */}
            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Success Alert */}
            {success && (
              <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <p className="text-sm text-green-700">
                  Account created successfully! Redirecting...
                </p>
              </div>
            )}

            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 sm:space-y-5"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-primary-800">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          className="h-11 sm:h-12 rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500 text-sm sm:text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-primary-800">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Create a password"
                          className="h-11 sm:h-12 rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500 text-sm sm:text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={loading || success}
                    className="w-full h-11 sm:h-12 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm sm:text-base rounded-lg transition-colors duration-200 hover:cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Creating
                        Account...
                      </>
                    ) : success ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Account Created
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </div>
              </form>
            </Form>

            {/* Footer Links */}
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-xs sm:text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500 leading-relaxed">
                By creating an account, you agree to our{" "}
                <Link
                  href="/terms"
                  className="text-primary-600 hover:text-primary-700"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-primary-600 hover:text-primary-700"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
