import Header from "@/components/header/Header";
import Providers from "../Providers";
import "./../../styles/globals.css";

export default function howItWoklrs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Header />
      {children}
    </Providers>
  );
}
