import { FC, Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/header/Header";

const InfoContent = dynamic(() => import("./InfoContent"), {
  ssr: false,
});

const addPersonalInformations: FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <InfoContent />
      </Suspense>
    </>
  );
};
export default addPersonalInformations;
