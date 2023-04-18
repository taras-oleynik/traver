import React from "react";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import data from "./data.js";

export default function App() {
  const mainContent = data.map((item) => {
    return <Main key={item} item={item} />;
  });

  return (
    <>
      <Navbar />
      {mainContent}
    </>
  );
}
