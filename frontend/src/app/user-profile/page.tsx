import Header from "@/components/header/Header";
import UserProfileComponent from "@/components/UserProfileComponent";
import { FC } from "react";

const UserProfile: FC = () => {
  return (
    <>
      <div>
        <Header />
        <UserProfileComponent />
      </div>
    </>
  );
};
export default UserProfile;
