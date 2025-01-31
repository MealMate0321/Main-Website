import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar, Offer } from "../components";
import OrderBtn from "../components/OrderBtn";

const HomeLayout = () => {
  return <>
  <Navbar/>
  {/* <Offer/> */}
  <Outlet/>
  <OrderBtn/>
  <Footer/>
  </>
};

export default HomeLayout;
