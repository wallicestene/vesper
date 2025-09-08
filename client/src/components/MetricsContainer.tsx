import { NumberTicker } from "./magicui/number-ticker";
import { Card } from "./ui/card";

const MetricsContainer = () => {
  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-none border-1 border-primary-200 rounded-xl p-8 text-center">
            <div className="space-y-4">
              <NumberTicker
                value={70000}
                startValue={1}
                className="whitespace-pre-wrap text-4xl font-bold tracking-wide text-secondary-900"
              />
              <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                Active Users
              </p>
            </div>
          </Card>

          <Card className="bg-white shadow-none border-1 border-primary-200 rounded-xl p-8 text-center">
            <div className="space-y-4">
              <NumberTicker
                value={12434035}
                startValue={1}
                className="whitespace-pre-wrap text-4xl font-bold tracking-wide text-secondary-900"
              />
              <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                Posts Published
              </p>
            </div>
          </Card>

          <Card className="bg-white shadow-none border-1 border-primary-200 rounded-xl p-8 text-center">
            <div className="space-y-4">
              <NumberTicker
                value={11}
                startValue={1}
                className="whitespace-pre-wrap text-4xl font-bold tracking-wide text-secondary-900"
              />
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
