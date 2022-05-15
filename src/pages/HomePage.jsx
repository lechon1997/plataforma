import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import { BrowserRouter } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </div>
  );
};

export default HomePage;
