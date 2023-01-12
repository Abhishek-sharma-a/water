import Footer from "./components/Footer";

import "./assets/App.css";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Pages from "./components/Pages";
import Element from "./components/Element";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import React, { Suspense, lazy } from "react";
import Register from "./components/Register";

const Dashboard = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./components/Dashboard.jsx")), 5000);
  });
});
function App() {
  return (
    <>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Services" element={<Pages />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/element" element={<Element />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
