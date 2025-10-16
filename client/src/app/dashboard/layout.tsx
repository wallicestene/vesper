import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  interface NavLink {
    title: string;
    href: string;
  }

  const navLinks: NavLink[] = [
    // {
    //   title: "Home",
    //   href: "/dashboard",
    // },
    {
      title: "Publish",
      href: "/dashboard/publish",
    },
    {
      title: "Content Library",
      href: "/dashboard/content",
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
    },
    {
      title: "Engage",
      href: "/dashboard/engage",
    },
    {
      title: "Collaborate",
      href: "/dashboard/collaborate",
    },
  ];
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="w-full border-b bg-background px-4 md:px-6 flex items-center justify-between z-50 relative sticky top-0">
        <div className="flex items-center space-x-6 md:space-x-8 overflow-x-auto">
          <Link
            href="/dashboard"
            className="text-xl md:text-2xl font-bold text-primary-800 hover:text-primary-600 transition-colors tracking-tight whitespace-nowrap py-4 md:py-5"
          >
            Vesper
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="py-4 md:py-5 px-3 xl:px-5 hover:bg-primary-50 hover:text-primary-700 transition-colors text-sm xl:text-base font-medium whitespace-nowrap border-b-2 border-transparent hover:border-primary-500"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Sidebar and main content container */}
      <div className="flex flex-1 overflow-hidden relative z-10">
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 overflow-auto">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}
