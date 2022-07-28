import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import App from "./App";
import BlogList from "./components/BlogList"
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/blog/logistics-management" element={<BlogList categories="logistics-management" key={"logic"}/>}/>

      <Route path="/blog/Marketplace-management" element={<BlogList categories="marketplace-management" key={"Market Place"}/>}/> 

      <Route path="/blog/Inventory-management" element={<BlogList categories="inventory-management" key={"Inventory"}/>}/>

      <Route path="/blog/supply-Chain-management" element={<BlogList categories="supply-Chain-management" key={"Supply Chain"}/>}/>
      
      <Route path="/blog/brand-awareness" element={<BlogList categories="brand-awareness" key={"Brand Awareness"}/>}/>
      
      <Route path="/blog/emerging-trends" element={<BlogList categories="emerging-trends" key={"emerging-trends"}/>}/>
      
      <Route path="/blog/payment-reconiliation" element={<BlogList categories="payment-reconiliation" key={"payment-reconiliation"}/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
