import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/theme/themeSlice';
import { FaMoon, FaAlignRight } from "react-icons/fa6";
import { BiSolidSun } from "react-icons/bi";
import { useTranslation } from 'react-i18next'; // Importing useTranslation hook
import "../../assets/app.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // For scroll effect
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const location = useLocation();
  const { i18n, t } = useTranslation(); // Using useTranslation hook

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  // Scroll effect for changing the background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Change the threshold to 100px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActiveLink = (path) => location.pathname === path;

  // Language change handler
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en'; // Toggle between 'en' and 'ar'
    i18n.changeLanguage(newLanguage); // Change the language
      document.documentElement.setAttribute('dir', newLanguage === 'ar' ? 'rtl' : 'ltr');
  };

  const toggleDarkModeWithAnimation = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className={`nav fixed inset-x-0 top-0 z-50 lg:w-[90vw] sm:w-[100vw] py-2 px-5 md:top-6 md:rounded-3xl mx-auto shadow-lg transition-all duration-300 
      ${scrolled ? 'bg-white dark:bg-secondary' : 'bg-transparent'}`}>
      {/* Logo Section */}
      <div className="relative flex items-center justify-between z-10">
        {/* Logo Section */}
        <div className="flex flex-1">

          <Link aria-current="page" className="flex items-center" to="/">
            <img className="h-24 w-56" src={logo} alt="Website Logo" />
          </Link>
          
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:flex-3 lg:items-center lg:justify-center lg:gap-5">
          <Link className={`inline-block px-2 py-1 text-lg font-medium hover:text-orange dark:hover:text-orange dark:text-white transition-all duration-200 ${isActiveLink("/") ? "text-orange dark:text-orange" : ""}`} to="/">{t('nav.home')}</Link>
          <Link className={`inline-block px-2 py-1 text-lg font-medium hover:text-orange dark:hover:text-orange dark:text-white transition-all duration-200 ${isActiveLink("/products") ? "text-orange dark:text-orange" : ""}`} to="/project">{t('nav.our_products')}</Link>
          <Link className={`inline-block px-2 py-1 text-lg font-medium hover:text-orange dark:hover:text-orange dark:text-white transition-all duration-200 ${isActiveLink("/about") ? "text-orange dark:text-orange" : ""}`} to="/about">{t('nav.about_us')}</Link>
          <Link className={`inline-block px-2 py-1 text-lg font-medium hover:text-orange dark:hover:text-orange dark:text-white transition-all duration-200 ${isActiveLink("/contact-us") ? "text-orange dark:text-orange" : ""}`} to="/contact-us">{t('nav.contact_us')}</Link>
          <Link className={`inline-block px-2 py-1 text-lg font-medium hover:text-orange dark:hover:text-orange dark:text-white transition-all duration-200 ${isActiveLink("/spaces") ? "text-orange dark:text-orange" : ""}`} to="/spaces">{t('nav.spaces')}</Link>
        </div>

        {/* Theme Toggle and Language Selector */}
        <div className="flex flex-1 items-center justify-end gap-3">
          {/* Theme Toggle Button */}
          <button onClick={toggleDarkModeWithAnimation} 
            className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-500 transform hover:scale-110 
              ${theme === "dark" ? "bg-gray-700 " : "bg-gray-200 "}`}
          >
            <div className="icon-wrapper">
              {theme === "dark" ? (
                <BiSolidSun size={24} className={`sun-icon transition-transform duration-500 ${theme === "dark" ? "rotate-180 text-orange" : ""} hover:text-orange`} />
              ) : (
                <FaMoon size={24} className={`moon-icon transition-transform duration-700 ${theme === "light" ? "rotate-360 " : ""} hover:text-blackMood ` } />
              )}
            </div>
          </button>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center w-10 h-10 rounded-full  shadow-lg  font-bold"
          >
            <div className="text-[#C0C0C0]">

            {i18n.language === 'ar' ? 'EN' : 'AR'}
            </div>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button className="lg:hidden flex items-center  justify-center w-10 h-10 rounded-full  shadow-lg "
            style={{backgroundColor:'transparent'}}
            onClick={toggleMobileMenu}>
            <FaAlignRight size={24} color='silver' />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu lg:hidden fixed inset-0 bg-white dark:bg-secondary z-20 flex flex-col items-start py-5 px-4 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
          <Link className={`menu-item block px-4 py-2 text-lg font-medium hover:text-orange dark:text-white transition-all duration-200 ${isActiveLink("/") ? "text-orange" : ""}`} to="/" onClick={toggleMobileMenu}>{t('home')}</Link>
          <Link className={`menu-item block px-4 py-2 text-lg font-medium hover:text-orange dark:text-white transition-all duration-200 ${isActiveLink("/project") ? "text-orange" : ""}`} to="/products" onClick={toggleMobileMenu}>{t('our_products')}</Link>
          <Link className={`menu-item block px-4 py-2 text-lg font-medium hover:text-orange dark:text-white transition-all duration-200 ${isActiveLink("/about") ? "text-orange" : ""}`} to="/about" onClick={toggleMobileMenu}>{t('about_us')}</Link>
          <Link className={`menu-item block px-4 py-2 text-lg font-medium hover:text-orange dark:text-white transition-all duration-200 ${isActiveLink("/contact-us") ? "text-orange" : ""}`} to="/contact-us">{t('contact_us')}</Link>
          <Link className={`menu-item block px-4 py-2 text-lg font-medium hover:text-orange dark:text-white transition-all duration-200 ${isActiveLink("/spaces") ? "text-orange" : ""}`} to="/spaces">{t('spaces')}</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
