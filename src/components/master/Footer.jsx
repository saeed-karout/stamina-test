import logo from '../../assets/logo.png'
import '../../assets/app.css'
import SocialMedia from '../SocialMedia';
import { Link } from 'react-router-dom';

const FooterComponents = () => {

    return (
        <footer className="relative">
            {/* Adding wave background */}
            <div className="absolute inset-0 overflow-hidden ">
                <div className="custom-shape-divider-top-1726393508">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
               </div>
            </div>

            <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row justify-around items-center py-14 space-y-10 lg:space-y-0 lg:space-x-10">
                    {/* Logo and Map */}
                    <div className="text-center lg:text-left">
                        <a href="https://pagedone.io/" className="flex justify-center lg:justify-start mb-8">
                            <img src={logo} className='w-56' alt="Logo" />
                        </a>
                        <div className="flex justify-center lg:justify-start">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.7942154245166!2d46.75463477488915!3d24.73394415030926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee32a7e7e3233%3A0x160dc46ac045c22c!2z2LTYqNmD2Kkg2KfZhNi02KfZhSDZhNmE2YXZgtin2YjZhNin2Ko!5e0!3m2!1sen!2snl!4v1726390506516!5m2!1sen!2snl"
                                width="250"
                                height="150"
                                style={{ border: '1px solid #e7e7e7'  }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Quick Links and Our Products */}

<div className="flex flex-row  gap-10">
  <div>
    <h4 className="text-lg text-black dark:text-white font-medium mb-7 text-center lg:text-left">Quick Links</h4>
    <ul className="space-y-6 text-center lg:text-left">
      <li>
        <Link to="/" className="text-black dark:text-white opacity-40 hover:text-gray dark:hover:text-gray">Home</Link>
      </li>

      <li>
        <Link to="/about" className="dark:text-white opacity-40 hover:text-gray dark:hover:text-gray">About</Link>
      </li>

      <li>
        <Link to="/contact-us" className="dark:text-white opacity-40 hover:text-gray dark:hover:text-gray">Contact US</Link>
      </li>

      <li>
        <Link to="/catalogue" className="dark:text-white opacity-40 hover:text-gray dark:hover:text-gray">Catalogue</Link>
      </li>
    </ul>
  </div>

  <div>
    <h4 className="text-lg dark:text-white font-medium mb-7 text-center lg:text-left">Our Products</h4>
    <ul className="space-y-6 text-center lg:text-left">
      <li><Link to="/lima-mixers" className="dark:text-white opacity-40 hover:text-gray dark:hover:text-gray">LIMA Mixers</Link></li>
      <li><Link to="/stamina-mixers" className="dark:text-white opacity-40 hover:text-gray dark:hover:text-gray">STAMINA Mixers</Link></li>
      <li><Link to="/ceramics" className="dark:text-white opacity-40 hover:text-gray dark:hover:text-gray">Ceramics</Link></li>
      <li><Link to="/showers" className="dark:text-white opacity-40 hover:text-gray dark:hover:text-gray">Showers</Link></li>
    </ul>
  </div>
</div>

                    {/* Subscribe Section */}
                    <div className="flex flex-col text-center lg:text-left mx-3">
                        <h2 className="text-lg dark:text-white font-medium mb-7">Keep in touch</h2>
                        <p className="dark:text-white  opacity-40 hover:text-gray-900 mb-5">Subscribe to our website to get products that meet the needs of every home.</p>
                        <div className="relative flex items-center w-full lg:w-auto">
                            <span className="absolute left-5 top-4 hidden md:block">
                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.25201 4L7.15881 7.89529C9.26862 9.16117 10.3235 9.79412 11.4825 9.76654C12.6416 9.73896 13.6652 9.05656 15.7124 7.69175L20.748 4M9 17H13C16.7712 17 18.6569 17 19.8284 15.8284C21 14.6569 21 12.7712 21 9C21 5.22876 21 3.34315 19.8284 2.17157C18.6569 1 16.7712 1 13 1H9C5.22876 1 3.34315 1 2.17157 2.17157C1 3.34315 1 5.22876 1 9C1 12.7712 1 14.6569 2.17157 15.8284C3.34315 17 5.22876 17 9 17Z"
                                        stroke="silver"
                                    />
                                </svg>
                            </span>
                            <input
                                type="text"
                                name="email"
                                className="py-3 px-5 h-14 pl-14 border border-gray rounded-full text-lg dark:text-white placeholder-gray-300 focus:outline-none flex-1 dark:bg-secondary"
                                placeholder="Enter Your Email Address"
                            />
                            <button
                                type="submit"
                                className="ml-4 h-14 py-3.5 px-7 bg-indigo-600 transition-all duration-500 shadow-md rounded-full text-[#4b4a4a] dark:text-white font-semibold hover:bg-indigo-700"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="py-9 border-t border-gray-300 mt-10">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-5 sm:space-y-0">
                        <p className="text-gray-dark font-semibold text-center sm:text-left flex" >
                            <p className='dark:text-white mx-1'>  Copyright 2024 Stamina </p>
                             <p className='text-white dark:text-gray-dark mx-1'>  All rights reserved</p> 
                        </p>
                        <div className="flex space-x-6">
                           <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponents;
