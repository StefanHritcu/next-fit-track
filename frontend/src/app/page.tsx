"use client";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "./../redux/store";
import { login, logout } from "@/redux/slices/userSlice"; // Assicurati che questa importazione sia corretta
import Header from "@/components/header/Header";
import "./../styles/globals.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: AppState) => state.user.isLoggedIn);

  const handleLoggati = () => {
    if (isLoggedIn) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  return (
    <>
      <Header />
      <div className="relative bg-cover bg-center h-screen">
        <Image
          className="object-cover"
          src="/assets/images/home-image.jpg"
          alt="Home Page Image"
          layout="fill"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Track Your Weight, Stay Motivated!
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Sign up now to monitor your progress and get personalized tips.
          </p>
          <button
            onClick={handleLoggati}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {isLoggedIn ? (
              <Link href="/user-profile">Profile</Link>
            ) : (
              <Link href="/sign-up">Sign-Up</Link>
            )}
          </button>
          <div className="mt-6">
            {isLoggedIn ? (
              <p className="text-center text-gray-300 mt-4">
                Track your progress and stay motivated by checking your profile
                for all your goal details!
              </p>
            ) : (
              <p className="text-center text-gray-300 mt-4">
                Don&apos;t have an account? Register now to start tracking your
                progress!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Informative Card Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Benefits of Weight Tracking
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white">
              Constant Monitoring
            </h3>
            <p className="mt-2 text-white">
              Keep track of your progress over time and achieve your goals.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white">
              Personalized Tips
            </h3>
            <p className="mt-2 text-white">
              Receive tailored advice to enhance your well-being.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white">
              Supportive Community
            </h3>
            <p className="mt-2 text-white">
              Join a motivational community to share your journey.
            </p>
          </div>
        </div>
      </div>

      {/* Motivational Alerts Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Stay Motivated!
          </h2>
          <p className="text-center mb-4 text-gray-600">
            Receive alerts and notifications about your weight goals and
            reminders to stay on track.
          </p>
          <button className="block mx-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            Get Notifications
          </button>
        </div>
      </div>
    </>
  );
}
