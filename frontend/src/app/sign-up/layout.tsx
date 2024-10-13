import BackToHome from "@/components/BackToHome";
import Providers from "../Providers";
import "./../../styles/globals.css";

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <BackToHome />
      {children}
    </Providers>
  );
}
