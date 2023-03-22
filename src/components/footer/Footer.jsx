import React from 'react'
import youtube from '../../assests/youTube.png'
import linkedIn from '../../assests/linkedIn.png'
import fb from '../../assests/fb.png'
import twiter from '../../assests/twiter.png'
import instagram from '../../assests/instagram.png'
import logo from '../../assests/logo.png'

const Footer = (props) => {
    return (
        <div className='bg-[#F8F8F8]' id='footer'>
            <div className='flex   pt-[63px] max-lg:pt-[37px] pb-[50px] max-lg:pb-[33px]'>
                <div className='ml-[200px] max-lg:mx-auto max-xl:ml-[100px]'   >
                    <div className='flex justify-center lg:justify-start'>
                        <img src={logo} alt="" /><br />
                    </div><br />
                    <div className='text-center lg:hidden '>
                    <ul className=' mb-6'>
                        <li>hafizmudusar37@gmail.com</li>
                        <li>+927487 78797989</li>
                    </ul>
                    </div>
                    <div className='max-lg:hidden'>

                        <h1 className='ml-8 text-[18px] font-[400] text-[#3D3D3D]'>We introduce our selves as  LAND Interior and <br />
                            Architectural Design Consultancy – one of the
                            <br /> best interior designers in Chennai.
                            <br /> Chennai Luxury Interior and Architectural Design
                            <br /> Consultancy has challenged the conventional <br />
                            way of interior designing and given new <br />
                            dimensions to the art of interior designing.   </h1><br />
                    </div>
                    <div className='flex gap-7 items-center ml-8'>
                        <div>

                            <img src={fb} alt="" />
                        </div>
                        <div>

                            <img src={linkedIn} alt="" />
                        </div>
                        <div>

                            <img src={twiter} alt="" />
                        </div>
                        <div>

                            <img src={youtube} alt="" />
                        </div>
                        <div>

                            <img src={instagram} alt="" />
                        </div>
                    </div>

                </div>
                <div className='max-lg:hidden ml-[248px] max-xl:ml-[100px]'>
                    <br /> <br />
                    <h1 className='text-xl font-[600] text-[#4F4F4F]'>WHAT WE DO</h1>
                    <br /><br />
                    <ul className='text-[18px] font-[500] text-[#4F4F4F]'>
                        <li>Interior Design</li>
                        <li>Kitchen</li>
                        <li>Ceiling</li>
                        <li>Bedroom</li>
                        <li>Smart Home</li>
                    </ul>

                </div>

                <div className='max-lg:hidden ml-[275px] max-xl:ml-[150px]'>
                    <br /><br />
                    <h1 className='text-xl font-[600] text-[#4F4F4F]'>
                        Get in touch
                    </h1>
                    <br /><br />
                    <ul className='text-[18px] font-[500] text-[#4F4F4F]'>
                        <li>hafizmudusar37@gmail.com</li>
                        <li>+927487 78797989</li>
                    </ul>
                    <br /><br /><br />
                    <div className=' flex justify-center mt-10 pb-12' >
                        <ul className='flex gap-x-[83px] flex-wrap text-[18px] text-[#4F4F4F]' >
                            <li>About</li>
                            <li>Projects</li>
                            <li>Studio</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer