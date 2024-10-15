"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "./../redux/store";
import Image from "next/image";

const UserProfileComponent = () => {
  const { userNickname, currentWeight, desiredWeight, targetDate } =
    useSelector((state: AppState) => state.user);

  // State for loading simulation
  const [loading, setLoading] = useState(true);
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);
  const [weightToLose, setWeightToLose] = useState<number | null>(null);
  const [dailyCalorieDeficit, setDailyCalorieDeficit] = useState<number | null>(
    null
  );

  useEffect(() => {
    const today = new Date();
    const target = targetDate ? new Date(targetDate) : null;

    if (target) {
      const remainingDays = Math.ceil(
        (target.getTime() - today.getTime()) / (1000 * 3600 * 24)
      );
      const loseWeight =
        desiredWeight && currentWeight ? currentWeight - desiredWeight : null;

      // Simulate a delay to load the data
      setTimeout(() => {
        setDaysRemaining(remainingDays);
        setWeightToLose(loseWeight);
        if (loseWeight !== null && remainingDays > 0) {
          setDailyCalorieDeficit(
            Math.ceil((loseWeight * 7700) / remainingDays)
          );
        }
        setLoading(false);
      }, 2000);
    }
  }, [targetDate, currentWeight, desiredWeight]);

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <header className="bg-blue-600 text-white rounded-lg p-6 mb-6 flex flex-col md:flex-row justify-around items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome, {userNickname || "User"}!
          </h1>
          <p className="text-xl">
            Current Weight:{" "}
            {currentWeight !== null ? `${currentWeight} kg` : "Not set"}
          </p>
          <p className="text-xl">
            Desired Weight:{" "}
            {desiredWeight !== null ? `${desiredWeight} kg` : "Not set"}
          </p>
          <p className="text-xl">Target Date: {targetDate || "Not set"}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Days Remaining Card */}
        <div className="bg-blue-100 border-2 border-blue-300 shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105">
          <div className="relative w-full h-64">
            <Image
              className="object-cover"
              src="/assets/images/day-remanding.jpg"
              alt="Days Remaining"
              layout="fill"
            />
          </div>
          <div className="p-4 flex-1">
            <h2 className="text-2xl font-semibold mb-2">Days Remaining</h2>
            {loading ? (
              <p className="text-center animate-pulse">Loading...</p>
            ) : (
              <div className="text-center">
                <p className="text-4xl font-bold">
                  {daysRemaining !== null ? daysRemaining : "N/A"}
                </p>
                <p className="text-sm text-gray-500">
                  Days remaining to reach your goal!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Weight to Lose Card */}
        <div className="bg-green-100 border-2 border-green-300 shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105">
          <div className="relative w-full h-64">
            <Image
              className="object-cover"
              src="/assets/images/kg-lose.jpg"
              alt="Weight to Lose"
              layout="fill"
            />
          </div>
          <div className="p-4 flex-1">
            <h2 className="text-2xl font-semibold mb-2">Weight to Lose</h2>
            {loading ? (
              <p className="text-center animate-pulse">Loading...</p>
            ) : (
              <div className="text-center">
                <p className="text-4xl font-bold">
                  {weightToLose !== null ? `${weightToLose} kg` : "N/A"}
                </p>
                <p className="text-sm text-gray-500">
                  To reach your desired weight!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Daily Calorie Deficit Card */}
        <div className="bg-yellow-100 border-2 border-yellow-300 shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105">
          <div className="relative w-full h-64">
            <Image
              src="/assets/images/kcal-deficit.jpg"
              alt="Daily Caloric Deficit"
              className="object-cover"
              layout="fill"
            />
          </div>
          <div className="p-4 flex-1">
            <h2 className="text-2xl font-semibold mb-2">
              Daily Caloric Deficit
            </h2>
            {loading ? (
              <p className="text-center animate-pulse">Loading...</p>
            ) : (
              <div className="text-center">
                <p className="text-4xl font-bold">
                  {dailyCalorieDeficit !== null
                    ? `${dailyCalorieDeficit} kcal`
                    : "N/A"}
                </p>
                <p className="text-sm text-gray-500">
                  Daily calories to lose to reach your ideal weight by the day{" "}
                  <span className="font-bold text-red-600">{targetDate}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Health Risks Card Example */}
        <div className="bg-red-100 border-2 border-red-300 shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105">
          <div className="relative w-full h-64">
            <Image
              src="/assets/images/health-risk.jpg"
              alt="Health risk"
              className="object-cover"
              layout="fill"
            />
          </div>
          <div className="p-4 flex-1">
            <h2 className="text-2xl font-semibold mb-2">Health risk</h2>
            {weightToLose !== null && daysRemaining !== null && !loading ? (
              <ul className="list-disc list-inside">
                {weightToLose > 10 && daysRemaining < 30 && (
                  <li>Alto rischio: Considera un approccio graduale.</li>
                )}
                {weightToLose > 5 && daysRemaining < 60 && (
                  <li>
                    Rischio moderato: Mantieniti idratato e mangia pasti
                    bilanciati.
                  </li>
                )}
                {weightToLose <= 5 && (
                  <li>Basso rischio: Sei sulla buona strada!</li>
                )}
              </ul>
            ) : (
              <p className="text-center animate-pulse">Loading...</p>
            )}
          </div>
        </div>

        {/* Motivational Card Example */}
        <div className="bg-purple-100 border-2 border-purple-300 shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105">
          <div className="relative w-full h-64">
            <Image
              src="/assets/images/motivation.jpg"
              alt="motivation"
              className="object-cover"
              layout="fill"
            />
          </div>
          <div className="p-4 flex-1">
            <h2 className="text-2xl font-semibold mb-2">Motivazione</h2>
            <p className="text-gray-700 mb-4">
              Rimani concentrato sui tuoi obiettivi e ricorda perché hai
              iniziato!
            </p>
            <p className="text-lg font-bold text-center">
              Continua a spingere in avanti!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileComponent;
