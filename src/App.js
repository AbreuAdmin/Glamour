import React from "react";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import AppScript from "./components/AppScript";
import "./css/App.css";

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