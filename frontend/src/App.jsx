import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Profil from "@pages/Profil";

import { NavBar } from "@components";

function App() {
  return (
    <>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/profil" element={<Profil />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <NavBar />
    </>
  );
}

export default App;
