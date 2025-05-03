import React from "react";
import "./style/App.scss";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import AppScript from "./components/AppScript";

function App() {
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
}

export default App;