import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const logo = document.getElementById("logo");
      const searchBar = document.getElementById("searchBar");
      const navbarText = document.querySelectorAll(".navbar-text");

      if (window.scrollY > 50) {
        navbar.classList.add("py-4", "bg-gray-900", "shadow-md");
        navbar.classList.remove("py-6", "bg-transparent");

        logo.classList.add("h-12");
        logo.classList.remove("h-16");

        searchBar.classList.add("w-[25rem]", "py-1.5");
        searchBar.classList.remove("w-[30rem]", "py-2.5");

        navbarText.forEach((text) => {
          text.classList.add("text-sm");
          text.classList.remove("text-base");
        });
      } else {
        navbar.classList.add("py-6", "bg-transparent");
        navbar.classList.remove("py-4", "bg-gray-900", "shadow-md");

        logo.classList.add("h-16");
        logo.classList.remove("h-12");

        searchBar.classList.add("w-[30rem]", "py-2.5");
        searchBar.classList.remove("w-[25rem]", "py-1.5");

        navbarText.forEach((text) => {
          text.classList.add("text-base");
          text.classList.remove("text-sm");
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false); 
  };

  return (
    <div
      id="navbar"
      className="navbar fixed top-0 left-0 w-full py-6 px-5 flex justify-center items-center z-50 transition-all duration-300"
    >
      <img
        id="logo"
        src="/src/assets/images/logo.png"
        alt="Gojek Logo"
        className="absolute h-16 left-6 transition-all duration-300"
      />

      <div
        id="searchBar"
        className="w-[30rem] border border-gray-300 rounded-full flex items-center justify-between px-4 py-2.5 transition-all duration-300 hidden sm:flex"
      >
        <Link
          to="/"
          className="text-base font-medium text-white navbar-text"
          onClick={scrollToTop}
        >
          Home
        </Link>
        <span className="border-l h-6 border-gray-300"></span>
        <Link
          to="/careers"
          className="text-base font-medium text-white navbar-text"
          onClick={scrollToTop}
        >
          Careers
        </Link>
        <span className="border-l h-6 border-gray-300"></span>
        <Link
          to="/products"
          className="text-base font-medium text-white navbar-text"
          onClick={scrollToTop}
        >
          Products
        </Link>
        <span className="border-l h-6 border-gray-300"></span>
        <Link
          to="/blog"
          className="text-base font-medium text-white navbar-text"
          onClick={scrollToTop}
        >
          Blog
        </Link>
        <span className="border-l h-6 border-gray-300"></span>
        <Link
          to="/download"
          className="text-base font-medium text-white navbar-text"
          onClick={scrollToTop}
        >
          Download
        </Link>
      </div>

      <button
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        className="sm:hidden absolute right-6 top-6 z-50"
      >
        <div className="w-6 h-0.5 bg-white mb-2"></div>
        <div className="w-6 h-0.5 bg-white mb-2"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-gray-900 py-4 flex flex-col items-center space-y-4">
          <Link
            to="/"
            className="text-base font-medium text-white navbar-text"
            onClick={scrollToTop}
          >
            Home
          </Link>
          <Link
            to="/careers"
            className="text-base font-medium text-white navbar-text"
            onClick={scrollToTop}
          >
            Careers
          </Link>
          <Link
            to="/products"
            className="text-base font-medium text-white navbar-text"
            onClick={scrollToTop}
          >
            Products
          </Link>
          <Link
            to="/blog"
            className="text-base font-medium text-white navbar-text"
            onClick={scrollToTop}
          >
            Blog
          </Link>
          <Link
            to="/download"
            className="text-base font-medium text-white navbar-text"
            onClick={scrollToTop}
          >
            Download
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
