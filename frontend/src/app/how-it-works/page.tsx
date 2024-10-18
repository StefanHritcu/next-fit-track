import { FC } from "react";
import { FaUserPlus, FaWeight, FaChartLine, FaBell } from "react-icons/fa"; // Importing icons

const HowItWorks: FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          How It Works
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Discover the simple steps to take control of your weight and stay
          motivated throughout your journey!
        </p>

        {/* Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <FaUserPlus className="text-blue-500 text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Sign Up</h2>
            <p className="text-gray-700">
              Create an account to get started on your weight loss journey. It
              only takes a few minutes!
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <FaWeight className="text-green-500 text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Set Your Goal</h2>
            <p className="text-gray-700">
              Define your weight loss goals and customize your journey based on
              your personal preferences.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <FaChartLine className="text-orange-500 text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Track Progress</h2>
            <p className="text-gray-700">
              Monitor your weight and calories over time with interactive charts
              to visualize your progress.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <FaBell className="text-red-500 text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Stay Motivated</h2>
            <p className="text-gray-700">
              Receive reminders and motivational alerts to keep you on track
              towards your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
