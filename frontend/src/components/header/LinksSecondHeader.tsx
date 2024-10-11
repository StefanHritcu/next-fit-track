import Link from "next/link";
import { FC } from "react";

const LinksSecondHeader: FC = () => {
  return (
    <>
      <section className="md:hidden">
        <nav className="flex items-center justify-center">
          <ul className="flex items-center justify-around">
            <li className="mx-12">
              <Link href="/" className="text-lg hover:text-yellow-400">
                How It Works
              </Link>
            </li>
            <li className="mx-12">
              <Link href="/" className="text-lg hover:text-yellow-400">
                Features
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default LinksSecondHeader;
