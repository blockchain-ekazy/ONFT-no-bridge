import { Route, Routes, Navigate } from "react-router-dom";
import Gallery from "./pages/Gallery";
import { NotificationContainer } from "react-notifications";
import React from "react";
import Request from "./pages/Request";
import FAQ from "./pages/FAQ";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/address/:address" element={<Gallery />} />
        <Route path="/request" element={<Request />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer theme="colored" hideProgressBar={true} />
      <NotificationContainer />
    </div>
  );
}

export default App;
