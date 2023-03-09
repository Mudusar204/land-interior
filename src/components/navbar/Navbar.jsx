import React, { useState } from 'react';
import '../../index.css';
import './navbar.css';
import menuIcon from '../../assests/menuIcon.png';
import logo from '../../assests/logo.png';
import { Link } from 'react-router-dom';
import 'animate.css';
const Navbar = () => {
  function handleLinkClick(e) {
    // e.preventDefault();
    const Element = document.getElementById(e);
    const scrollOptions = {
      top: Element.offsetTop-10,
      behavior: 'smooth',
      duration: 1000, 
    };
    window.scroll(scrollOptions);
  }
  const [loader, setLoader] = useState(false);

  const menuFunction = () => {
    setLoader(!loader);
  };

  return (
    <div className='nav-bg'>
      <div className='flex justify-between items-center nav-1st-section'>
        <img src={logo} alt='logo' height='111' width='111' />
        <button onClick={menuFunction} className='md:hidden mr-10'>
          <img src={menuIcon} alt='' />
        </button>
        <div className='flex gap-x-20 max-md:hidden'>
          <span className='text-[#451A64] text-xl nav-text'>
            Join as Design Expert
          </span>
          <span className='text-[#451A64] text-xl '>
            Partner with LAND Interior
          </span>
        </div>
      </div>
      <div  className={`  max-md:${loader ? 'block' : 'hidden'
            } flex gap-6 justify-center pb-10 text-xl `}>
        <ul
          className={`  max-md:${loader ? 'block' : 'hidden'
            } flex gap-6 text-xl `}
        >

          <li> <Link onClick={() => handleLinkClick('header')}>About</Link></li>
          <li> <Link onClick={() => handleLinkClick('projects')}>Projects</Link></li>
          <li> <Link onClick={() => handleLinkClick('studio')}>Studio</Link></li>
          <li> <Link onClick={() => handleLinkClick('blog')}>Blog</Link></li>
          <li> <Link onClick={() => handleLinkClick('contact')}>Contact</Link></li>
          {/* <li> <Link onClick={() => handleLinkClick('footer')}>Footer</Link></li> */}
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
