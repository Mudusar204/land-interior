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
      top: Element.offsetTop - 10,
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
    <div className='bg-[#F8F8F8] '>
      <div className='flex justify-between  nav-1st-section'>
        <img className='mt-[37px] ml-[37px] max-lg:mb-[44px] lg:w-[111px] lg:h-[111px] max-lg:w-[133px] max-lg:h-[133px] ' src={logo} alt='logo' />
        <button onClick={menuFunction} className='lg:hidden mr-[64px] '>
          <img src={menuIcon} alt='' />
        </button>
        <div className='flex gap-[108px] mt-[78px] mr-[94px] max-lg:hidden'>
          <span className='text-[#451A64] text-xl  font-[500] nav-text'>
            Join as Design Expert
          </span>
          <span className='text-[#451A64] text-xl  font-[500]'>
            Partner with LAND Interior
          </span>
        </div>
      </div>
      <div className={`  max-lg:${loader ? 'block' : 'hidden'
        }   text-xl `}>
        <ul
          className={`  max-lg:${loader ? 'block' : 'hidden'
            } flex justify-center gap-[82px] max-md:gap-[50px] max-sm:gap-[5px] font-normal list-none mt-[38px] pb-[58px]`}
        >
          <li className='text-[20px] px-2 '> <Link onClick={() => handleLinkClick('header')}>About</Link></li>
          <li className='text-[20px] px-2 font-[400]'> <Link onClick={() => handleLinkClick('projects')}>Projects</Link></li>
          <li className='text-[20px] px-2 font-[400]'> <Link onClick={() => handleLinkClick('studio')}>Studio</Link></li>
          <li className='text-[20px] px-2 font-[400]'> <Link onClick={() => handleLinkClick('blog')}>Blog</Link></li>
          <li className='text-[20px] px-2 font-[400]'> <Link onClick={() => handleLinkClick('contact')}>Contact</Link></li>
          {/* <li> <Link onClick={() => handleLinkClick('footer')}>Footer</Link></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
