import dynamic from "next/dynamic";
import { FC, Suspense } from "react";

const SignUpComponent = dynamic(() => import("./SignUpComponent"), {
  ssr: false,
});

const SignUp: FC = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <SignUpComponent />
      </Suspense>
    </div>
  );
};

export default SignUp;
