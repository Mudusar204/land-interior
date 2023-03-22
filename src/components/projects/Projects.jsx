import React from 'react'
import '../../index.css';

import projectsSideImg1 from '../../assests/projectsSideImg1.png'
import projectsSideImg2 from '../../assests/projectsSideImg2.png'
import projectsSideImg3 from '../../assests/projectsSideImg3.png'
import projectsSideImg4 from '../../assests/projectsSideImg4.png'

const Projects = () => {
    return (
        <div id='projects' className='mt-[0px] pt-[80px]'>
           
            <div className='relative   '>

                {/* <h1 className='text-4xl font-[500] leading-54 ml-[149px] pb-[27px] text-[#241330] lg:hidden'>Our Projects</h1> */}
                <div className=' flex justify-center mx-[96px] gap-2 max-lg:mx-[5%] w-[783px] max-lg:w-[90%] ' >
                    <div>
                        <div>
                            <img src={projectsSideImg1} alt="headier image" height={'auto'} />

                        </div>
                        <div className='mt-2'>
                            <img src={projectsSideImg2} alt="headier image" height={'auto'} />

                        </div>

                    </div>
                    <div>
                        <div>
                            <img src={projectsSideImg3} alt="headier image" height={'auto'} />

                        </div>
                        <div className='mt-2'>
                            <img src={projectsSideImg4} alt="headier image" height={'auto'} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col  text-center  items-center max-lg:items-start  bg-white bg-opacity-80 lg:absolute lg:right-[97px] lg:top-[36px] h-[519px] max-lg:h-auto lg:w-[997px]   max-lg:mx-auto max-lg:w-[76%] max-md:w-[90%]'>
                    <h1 className='text-4xl font-[500] leading-54 mt-[63px] text-[#241330] max-lg:hidden'>Our Projects</h1>
                    <h1 className='text-center max-lg:text-left text-[18px] leading-[27px]  max-md:text-left mt-[45px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus <span className='max-md:hidden'> <br /></span> venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent
                        <span className='max-md:hidden'>    <br /></span> elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                    </h1>
                    <h1 className='text-center max-lg:text-left text-[18px] leading-[27px]   mt-[25px] '>  magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, <span><br /></span>  vel fringilla est ullamcorper eget nulla</h1>
                    <button className='bg-[#4B2A63]   text-2xl leading-[36px] font-[600] py-[23px]  px-[88px] max-lg:mx-auto text-white mt-[51px] max-lg:mb-0' >View All</button>
                </div>
            </div>
        </div>
    )
}

export default Projects