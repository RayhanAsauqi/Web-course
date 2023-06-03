import { Route, Routes } from "react-router-dom";
import NavbarComponents from "./components/NavbarComponents";
// import FooterComponents from "./components/FooterComponents";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import SyaratKeten from "./pages/SyaratKeten";
import FaqPage from "./pages/FaqPage";
import TestimonialPage from "./pages/TestimonialPage";

function App() {
  return (
    <div>
      <NavbarComponents />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testi" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratKetentuan" Component={SyaratKeten} />
      </Routes>
      {/* <FooterComponents /> */}
    </div>
  );
}

export default App;
