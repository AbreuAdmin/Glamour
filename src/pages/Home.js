import React from "react";
import AppHeader from "../components/AppHeader";
import AppMain from "../components/AppMain";
import AppFooter from "../components/AppFooter";
import AppScript from "../components/AppScript";

const Home = () => {
  return (
  <>
    <div id="boxContent">
      <AppHeader />
      <AppMain />
    </div>
    <AppFooter />
    <AppScript />
  </>
  );
};

export default Home;