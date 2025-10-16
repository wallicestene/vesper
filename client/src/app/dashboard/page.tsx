const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome to your social media workspace
        </p>
      </div>

      {/* Your dashboard content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your dashboard widgets/cards here */}
      </div>
    </div>
  );
};

export default DashboardPage;
