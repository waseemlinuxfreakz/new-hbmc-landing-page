import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer";
import { useEffect } from "react";
import i18next from "i18next";

const Main = () => {
  useEffect(() => {
    if (i18next.language === "ar") {
      document.dir = "rtl";
    }
  }, []);

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
