import React, { FC } from "react";
import { SiNextdotjs } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { FaRegFileAlt } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { BiSolidFolder } from "react-icons/bi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";

const Features: FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Features of Our Modern Weight Tracking Application
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Explore the powerful technologies and features that enhance your
          weight management journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1: Next.js */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <SiNextdotjs className="text-blue-600 text-3xl mr-3" />
              <h2 className="text-xl font-semibold">Next.js</h2>
            </div>
            <p className="text-gray-700">
              Built on Next.js, our application benefits from server-side
              rendering and static site generation, ensuring fast load times and
              optimized performance for all users.
            </p>
          </div>

          {/* Feature Card 2: Supabase */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <SiSupabase className="text-green-600 text-3xl mr-3" />
              <h2 className="text-xl font-semibold">Supabase Database</h2>
            </div>
            <p className="text-gray-700">
              Leveraging Supabase, we provide a robust backend with real-time
              capabilities, allowing users to securely store and access their
              weight tracking data.
            </p>
          </div>

          {/* Feature Card 3: Formik & Yup */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <FaRegFileAlt className="text-indigo-600 text-3xl mr-3" />
              <h2 className="text-xl font-semibold">Formik with Yup</h2>
            </div>
            <p className="text-gray-700">
              Formik and Yup are utilized for effective form management and
              validation, providing a seamless user experience while ensuring
              data integrity.
            </p>
          </div>

          {/* Feature Card 4: Lazy Loading */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <FiLoader className="text-yellow-500 text-3xl mr-3" />
              <h2 className="text-xl font-semibold">Lazy Loading</h2>
            </div>
            <p className="text-gray-700">
              Implementing lazy loading techniques optimizes resource loading,
              enhancing performance by only loading components when necessary.
            </p>
          </div>

          {/* Feature Card 5: Folder-Based Routing */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <BiSolidFolder className="text-teal-600 text-3xl mr-3" />
              <h2 className="text-xl font-semibold">Folder-Based Routing</h2>
            </div>
            <p className="text-gray-700">
              Our clean folder-based routing structure allows for organized
              navigation, making it easy to manage and maintain the application.
            </p>
          </div>

          {/* Feature Card 6: Redux for State Management */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <MdOutlineDashboard className="text-red-600 text-3xl mr-3" />
              <h2 className="text-xl font-semibold">Redux State Management</h2>
            </div>
            <p className="text-gray-700">
              Utilizing Redux for state management ensures that your application
              state is predictable and easily manageable, leading to a smoother
              user experience.
            </p>
          </div>

          {/* Feature Card 7: Security Features */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <BsFillShieldLockFill className="text-gray-600 text-3xl mr-3" />
              <h2 className="text-xl font-semibold">Robust Security</h2>
            </div>
            <p className="text-gray-700">
              Our application incorporates robust security measures to protect
              user data, ensuring a safe environment for tracking your health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
