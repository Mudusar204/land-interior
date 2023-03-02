import React from 'react'
import youtube from '../../assests/youTube.png'
import linkedIn from '../../assests/linkedIn.png'
import fb from '../../assests/fb.png'
import twiter from '../../assests/twiter.png'
import instagram from '../../assests/instagram.png'
import logo from '../../assests/logo.png'

const Footer = (props) => {
    return (
        <div className='bg-slate-100' id='footer'>
            <div className='flex justify-around  pt-10 pb-7'>
                <div >
                    <div className='flex justify-center md:justify-start'>
                        <img src={logo} alt="" /><br />
                    </div>
                    <div className='text-center md:hidden max-md:my-8'>
                    <ul className=' md:my-20'>
                        <li>hafizmudusar37@gmail.com</li>
                        <li>+927487 78797989</li>
                    </ul>
                    </div>
                    <div className='max-md:hidden'>

                        <h1 className='ml-8'>We introduce our selves as  LAND Interior and <br />
                            Architectural Design Consultancy – one of the
                            <br /> best interior designers in Chennai.
                            <br /> Chennai Luxury Interior and Architectural Design
                            <br /> Consultancy has challenged the conventional <br />
                            way of interior designing and given new <br />
                            dimensions to the art of interior designing.   </h1><br />
                    </div>
                    <div className='flex gap-7 ml-8'>
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
                <div className='max-md:hidden'>
                    <br /> <br />
                    <h1 className='text-xl'>WHAT WE DO</h1>
                    <br /><br />
                    <ul>
                        <li>Interior Design</li>
                        <li>Kitchen</li>
                        <li>Ceiling</li>
                        <li>Bedroom</li>
                        <li>Smart Home</li>
                    </ul>

                </div>

                <div className='max-md:hidden'>
                    <br /><br />
                    <h1 className='text-xl'>
                        Get in touch
                    </h1>
                    <br /><br />
                    <ul>
                        <li>hafizmudusar37@gmail.com</li>
                        <li>+927487 78797989</li>
                    </ul>
                    <br /><br /><br />
                    <div className=' flex justify-center mt-10 pb-12' >
                        <ul className='flex gap-8 flex-wrap text-xl' >
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