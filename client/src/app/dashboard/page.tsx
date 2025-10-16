import { Card } from "@/components/ui/card";
import { ArrowUpRight, Calendar, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

const DashboardPage = () => {
  // Mock data - replace with real data
  const stats = [
    {
      title: "Total Posts",
      value: "124",
      change: "+12%",
      trend: "up",
      icon: Calendar,
    },
    {
      title: "Total Engagement",
      value: "8.5K",
      change: "+23%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Followers",
      value: "2.4K",
      change: "+5%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Scheduled Posts",
      value: "18",
      change: "",
      trend: "neutral",
      icon: Calendar,
    },
  ];

  const recentPosts = [
    {
      id: 1,
      platform: "Twitter",
      content: "Just launched our new feature! 🚀",
      scheduledFor: "2025-10-16 14:00",
      status: "scheduled",
    },
    {
      id: 2,
      platform: "Instagram",
      content: "Behind the scenes of our latest project...",
      scheduledFor: "2025-10-16 16:30",
      status: "scheduled",
    },
    {
      id: 3,
      platform: "LinkedIn",
      content: "We're hiring! Join our amazing team.",
      scheduledFor: "Published",
      status: "published",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's what's happening with your social media.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-primary-900 mt-2">
                  {stat.value}
                </p>
                {stat.change && (
                  <p className="text-sm text-green-600 mt-1 flex items-center">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    {stat.change} from last month
                  </p>
                )}
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Posts */}
        <Card className="p-6 bg-white border-0 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-primary-900">
              Recent Posts
            </h2>
            <Link
              href="/dashboard/publish"
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">
                    {post.platform[0]}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 font-medium truncate">
                    {post.content}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {post.scheduledFor}
                  </p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    post.status === "scheduled"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {post.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6 bg-white border-0 shadow-sm">
          <h2 className="text-xl font-semibold text-primary-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/dashboard/publish"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors text-center"
            >
              <Calendar className="w-8 h-8 mx-auto text-primary-600 mb-2" />
              <p className="text-sm font-medium text-gray-900">Schedule Post</p>
            </Link>
            <Link
              href="/dashboard/content"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors text-center"
            >
              <div className="w-8 h-8 mx-auto text-primary-600 mb-2">📁</div>
              <p className="text-sm font-medium text-gray-900">
                Browse Library
              </p>
            </Link>
            <Link
              href="/dashboard/analytics"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors text-center"
            >
              <TrendingUp className="w-8 h-8 mx-auto text-primary-600 mb-2" />
              <p className="text-sm font-medium text-gray-900">
                View Analytics
              </p>
            </Link>
            <Link
              href="/dashboard/engage"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors text-center"
            >
              <div className="w-8 h-8 mx-auto text-primary-600 mb-2">💬</div>
              <p className="text-sm font-medium text-gray-900">Engage</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
