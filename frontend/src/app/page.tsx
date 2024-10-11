"use client";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "./../redux/store";
import { login, logout } from "@/redux/slices/userSlice";

export default function Home() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: AppState) => state.user.isLoggedIn);

  const handleLoggati = () => {
    if (isLoggedIn) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  return (
    <>
      <div>Dajeee home</div>
      <button onClick={handleLoggati}>{isLoggedIn ? "Logout" : "Login"}</button>

      <div>{isLoggedIn ? <p>Logged</p> : <p>Not Logged</p>}</div>
    </>
  );
}
