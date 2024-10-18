"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./../redux/store";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { logout } from "@/redux/slices/userSlice";
import MotivationalCard from "./motivationCard/MotivationalCard";
import WeightLossChart from "./WeightLossChart";

const UserProfileComponent = () => {
  const { userNickname, currentWeight, desiredWeight, targetDate } =
    useSelector((state: AppState) => state.user);

  const FaArrowRightLong = dynamic(() =>
    import("react-icons/fa6").then((mod) => mod.FaArrowRightLong)
  );

  const FaArrowUpRightFromSquare = dynamic(() =>
    import("react-icons/fa6").then((mod) => mod.FaArrowUpRightFromSquare)
  );
  const MdLogout = dynamic(() =>
    import("react-icons/md").then((mod) => mod.MdLogout)
  );

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);
  const [weightToLose, setWeightToLose] = useState<number | null>(null);
  const [dailyCalorieDeficit, setDailyCalorieDeficit] = useState<number | null>(
    null
  );
  const [totalCalorieDeficit, setTotalCalorieDeficit] = useState<number | null>(
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
          setTotalCalorieDeficit(Math.ceil(loseWeight * 7700));
        }
        setLoading(false);
      }, 2000);
    }
  }, [targetDate, currentWeight, desiredWeight]);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className="container mx-auto p-6">
      <Link href="/add-personal-informations">
        <div className="hover:scale-105 flex justify-center items-center transform-transition duration-300 bg-red-600 mb-2 rounded-lg p-2 text-center text-white text-sm lg:text-xl md:font-semibold">
          <p>
            To further improve the calculation results, add more personal
            information!
          </p>
          <FaArrowUpRightFromSquare className="w-6 h-6 ml-4" />
        </div>
      </Link>
      {/* Header Section */}
      <header className="bg-blue-600 text-white rounded-lg p-6 mb-6">
        <div className="relative grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* NICKNAME */}
          <h1 className="text-3xl font-bold">{userNickname || "User"}!</h1>

          {/* CURRENT KG & DESIRED KG */}
          <p className="text-xl flex items-center">
            {currentWeight !== null ? `${currentWeight} kg` : "Not set"}
            <FaArrowRightLong className="mx-4" />
            {desiredWeight !== null ? `${desiredWeight} kg` : "Not set"}
          </p>

          {/* KG TO LOSE & TOTAL KCAL */}
          <p className="text-xl flex items-center">
            {weightToLose !== null ? `- ${weightToLose} kg` : "Not set"}
            <span className="mx-2">=</span>
            {totalCalorieDeficit !== null
              ? `${totalCalorieDeficit} kcal`
              : "Not set"}
          </p>

          {/* KCAL PER DAY TO LOSE */}
          <p className="text-xl">
            {dailyCalorieDeficit !== null
              ? `${dailyCalorieDeficit} kcal/day`
              : "Not set"}
          </p>

          <div
            title="LOGOUT"
            className="absolute my-auto right-0 translate-x-4 hover:scale-125 action:scale-145 transform-transition duration-300"
            onClick={handleLogOut}
          >
            <Link href="/">
              <MdLogout />
            </Link>
          </div>
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
      </div>

      <main className="min-h-screen my-4 bg-gray-50 flex items-center justify-center p-4">
        <WeightLossChart />
      </main>

      {/* Motivational Card Example */}
      <MotivationalCard />
    </div>
  );
};

export default UserProfileComponent;
