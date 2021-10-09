import React from "react";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div style={{ backgroundColor: "rgba(226, 245, 228, 0.87)" }}>
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
    </div>
  );
};

export default Header;
