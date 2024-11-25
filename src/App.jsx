import { useContext, useState } from "react";
import "./App.css";
import ThemeContext from "../ThemeContext.js";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import News from "./Components/News.jsx";
import Crypto from "./Components/Crypto.jsx";
import Exchanges from "./Components/Exchanges.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoDetails from "./Components/CryptoDetails.jsx";

function App() {
  const [selectedPage, setSelectedPage] = useState("Home");
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <main className={`container flex flex-col lg:flex-row ${theme}`}>
        <BrowserRouter>
          <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/news"} element={<News count={100} />} />
            <Route path={"/crypto"} element={<Crypto />} />
            <Route
              path={"/crypto/:id"}
              element={<CryptoDetails setSelectedPage={setSelectedPage} />}
            />
            <Route path={"/exchanges"} element={<Exchanges />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
