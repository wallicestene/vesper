import LogInForm from "@/components/LoginForm";
import Link from "next/link";

const page = () => {
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
      <LogInForm />
    </div>
  );
};

export default page;
