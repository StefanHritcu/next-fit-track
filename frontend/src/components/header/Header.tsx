"use client";

import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import LinksSecondHeader from "./LinksSecondHeader";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";

const FaUser = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaUser),
  {
    ssr: false,
  }
);
const CiLogin = dynamic(
  () => import("react-icons/ci").then((mod) => mod.CiLogin),
  {
    ssr: false,
  }
);

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Features", href: "/features" },
];

const Header: FC = () => {
  const isLoggiedIn = useSelector((state: AppState) => state.user.isLoggedIn);
  const userNickname = useSelector(
    (state: AppState) => state.user.userNickname
  );
  return (
    <header className="flex flex-col bg-gray-900 text-gray-300">
      <section className="flex justify-around items-center mt-4">
        {/* LOGO LINK */}
        <Link
          href="/"
          className="text-4xl p-4 hover:scale-105 transform transition duration-300"
        >
          <Image
            src="/assets/images/logoFitTrackPro.png"
            alt="Fit Track Pro Logo"
            width={180}
            height={60}
          />
        </Link>

        {/* RESPONSIVE LINKS MENU */}
        <nav className="hidden md:block">
          <ul className="flex items-center justify-around">
            {menuItems.map((item) => (
              <li key={item.label} className="mx-10">
                <Link
                  href={item.href}
                  className="text-lg hover:text-yellow-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* USER LOGIN/REGISTRATION & PROFILE */}
        {isLoggiedIn ? (
          <Link
            href="user-profile"
            className="flex items-center hover:scale-125 transform transition duration-300"
          >
            <FaUser className="mx-2" />
            <span className="mx-2">{userNickname}</span>
          </Link>
        ) : (
          <Link href="sign-up">
            <CiLogin className="hover:scale-125 transform transition duration-300" />
          </Link>
        )}
      </section>

      {/* SECOND HEADER */}
      <LinksSecondHeader />
    </header>
  );
};

export default Header;
