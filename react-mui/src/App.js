import * as React from "react";
import BlogCategories from "./components/BlogCategories";
import Navbar from "./components/Navbar";
// import { Routes, Route, } from "react-router-dom";"react-router-dom";
// import BlogList from "./components/BlogList";

export default function App() {
  return (
    <div>
      <Navbar />,
      <BlogCategories key={"Blog"}/>
    </div>
  );
}
