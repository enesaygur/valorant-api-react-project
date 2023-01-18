import Header from "components/Header";
import Footer from "components/Footer";
import Home from "pages/Home";
import Agents from "pages/Agents";
import Gears from "pages/Gears";
import Maps from "pages/Maps";
import Weapons from "pages/Weapons";
import { Route, Routes } from "react-router-dom";
import {  useSelector } from "react-redux";
import Api from "api/Api";
function App() {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/agents" element={<Agents />} />
        <Route exact path="/gears" element={<Gears />} />
        <Route exact path="/maps" element={<Maps />} />
        <Route exact path="/weapons" element={<Weapons />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
