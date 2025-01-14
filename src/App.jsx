import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Careers from "./pages/Careers";
import Download from "./pages/Download";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/download" element={<Download />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
