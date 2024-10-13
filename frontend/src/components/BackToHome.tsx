"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const IoIosArrowRoundBack = dynamic(
  () => import("react-icons/io").then((mod) => mod.IoIosArrowRoundBack),
  { ssr: false }
);

const BackToHome: FC = () => {
  const pathName = usePathname();
  const title =
    pathName === "/sign-up"
      ? "Sign-Up"
      : pathName === "/login"
      ? "Login"
      : "Home";
  return (
    <>
      <header className="relative bg-gray-900 h-28 text-gray-300">
        <Link href="/" className="absolute p-4 m-4">
          <IoIosArrowRoundBack className="ml-12 w-12 h-12 hover:scale-125 transform transition duration-300" />
        </Link>
        <section className="text-center pt-6">
          <h1>{title}</h1>
        </section>
      </header>
    </>
  );
};
export default BackToHome;
