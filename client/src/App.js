import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/z-index.component";
import {
  Home,
  Collection,
  Author,
  Search,
  NFTDetails,
} from "./pages/z-index.page";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/author" element={<Author />} />
        <Route path="/search" element={<Search />} />
        <Route path="/nft-details" element={<NFTDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
