import dynamic from "next/dynamic";
import { FC } from "react";

const FaGithub = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaGithub),
  { ssr: false }
);

const CiLinkedin = dynamic(
  () => import("react-icons/ci").then((mod) => mod.CiLinkedin),
  { ssr: false }
);

const FaFacebook = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaFacebook),
  { ssr: false }
);

const MdOutlineEmail = dynamic(
  () => import("react-icons/md").then((mod) => mod.MdOutlineEmail),
  { ssr: false }
);
const Footer: FC = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300">
        <div className="flex flex-col justify-center items-center">
          <section className="pt-2">
            <p className="text-xl px-4 my-2">
              © {new Date().getFullYear()}, Designed and Developed by{" "}
              <span className="text-red-600">Stefan Hritcu</span>. All rights
              reserved.
            </p>
          </section>
          <nav className="flex justify-center items-center mb-4">
            {/* GITHUB */}
            <a
              className="p-4  mx-4 md:mx-8 text-gray-300"
              rel="noopener"
              title="To Github"
              target="_blank"
              aria-label="Link to Stefan's Github profile"
              href="https://github.com/StefanHritcu"
            >
              <FaGithub />
            </a>

            {/* LINKEDIN */}
            <a
              className="p-4  mx-4 md:mx-8 text-gray-300"
              rel="noopener"
              title="To Linkedin"
              target="_blank"
              aria-label="Link to Stefan's Linkedin profile"
              href="https://www.linkedin.com/in/stefan-florian-hritcu-ba615431b/u"
            >
              <CiLinkedin />
            </a>
            {/* FACEBOOK */}
            <a
              className="p-4  mx-4 md:mx-8 text-gray-300"
              rel="noopener"
              title="To Facebook"
              target="_blank"
              aria-label="Link to Stefan's Facebook profile"
              href="https://www.facebook.com/profile.php?id=61563101911367"
            >
              <FaFacebook />
            </a>
            {/* EMAIL */}
            <a
              className="p-4 mx-4 md:mx-8 text-gray-300"
              rel="noopener"
              title="To Mail"
              target="_blank"
              aria-label="Link to Stefan's Email profile"
              href="mailto:stefano.94h@gmail.com"
            >
              <MdOutlineEmail />
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
};
export default Footer;
