import React from "react";
import NavBar from "../ui/NavBar"
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  if (pathname === "/login" ) {
    return null;
  }

  return (
    <header className="w-[600px] h-[70px] flex flex-row bg-purple-50 rounded-b-full items-center text-center justify-center">
        <NavBar />
    </header>
  );
};
export default Header;
