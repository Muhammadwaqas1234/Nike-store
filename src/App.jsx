import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Store from "./components/Store";
import PaymentPage from "./components/payment";
import Layout from "./components/Layout"; 
import ShoeDetails from "./components/Details";

function App() {
  return (
    <Router basename="/Nike-store">  {/* Add the base path here */}
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/payment" element={<PaymentPage />} />  {/* Ensure full path */}
        <Route path="/details" element={<ShoeDetails />} />

        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
