import { Card } from "./ui/card";

const MetricsContainer = () => {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-none border-1 border-primary-200 rounded-xl p-8 text-center">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold tracking-wide text-secondary-900">
                {(70000).toLocaleString()}
              </h3>
              <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                Active Users
              </p>
            </div>
          </Card>

          <Card className="bg-white shadow-none border-1 border-primary-200 rounded-xl p-8 text-center">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold tracking-wide text-secondary-900">
                {(12434035).toLocaleString()}
              </h3>
              <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                Posts Published
              </p>
            </div>
          </Card>

          <Card className="bg-white shadow-none border-1 border-primary-200 rounded-xl p-8 text-center">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold tracking-wide text-secondary-900">
                {(11).toLocaleString()}
              </h3>
              <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                Integrations
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MetricsContainer;
