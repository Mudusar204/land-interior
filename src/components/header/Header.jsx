import React from 'react'
import '../../index.css';
import card1 from '../../assests/headerCard1.svg'
import card2 from '../../assests/headerCard2.svg'
import card3 from '../../assests/headerCard3.svg'
import headerImage from '../../assests/headerImg.png'
import headerImage2 from '../../assests/headerImg2.png'
import projectsImg1 from '../../assests/projectsImg1.png'
import projectsImg2 from '../../assests/projectsImg2.png'
import projectsImg3 from '../../assests/projectsImg3.png'
import projectsImg4 from '../../assests/projectsImg4.png'
const Header = (props) => {
    return (
        <div id='header' className='bgSection1'>
            <div className='relative box-content overflow-hidden mt-16 max-md:mt-0 mb-20'>
                <div>
                    <img src={headerImage} alt="headier image"  className=' max-sm:w-[100%]  md:w-[80%] lg:w-[60%]' height={'auto'} />
                </div>
                <div className='flex flex-col justify-center pt-8   items-center   bg-white bg-opacity-80 w-1/2 h-[60%] absolute md:top-[20%] md:right-0 max-md:left-[5%] max-md:top-[40%] max-md:w-[90%] max-sm:bottom-0  '>


                    <h1 className='text-3xl leading-54 mt-4 max-sm:text-xl'>Get personalised home Interior</h1>
                    <h1 className='text-4xl max-sm:text-3xl  mb-4 max-sm:mb-0 font-semibold '>in just 50 days</h1>
                    <button className='bg-purple-900 mb-8 uppercase text-xl max-sm:text-sm leading-45 mt-4  p-3 text-white' >speak with a online consultant</button>


                </div>
            </div>
            <div>
                <h1 className='text-center font-medium text-3xl leading-9'>Why LAND Interiors</h1>
                <div className='flex justify-around mt-24 max-sm:flex-col max-sm:items-center max-sm:gap-10'>
                    <div className='text-center flex flex-col  '>
                        <h1 className='ml-4 mb-4'>

                            <img src={card1} alt=" card wali img"  />
                        </h1>
                        <h1>50 days or we <br />
                            pay you rent</h1>
                    </div>
                    <div className='text-center flex flex-col'>
                        <h1 className='ml-3 mb-4 '>

                            <img src={card2} alt=" card wali img"  />
                        </h1>
                        <h1>1500+happy <br />
                            customers</h1>
                    </div>
                    <div className='text-center flex flex-col mt-4'>
                        <h1 className='ml-6 mb-4'>

                            <img src={card3} alt=" card wali img" width='50' />

                        </h1 >
                        <h1 className='mt-4'>300+ design <br />
                            experties</h1>
                    </div>
                </div>
            </div>
            <div className='relative mt-20 mb-20'>
                <div className='flex justify-end'>
                    <img src={headerImage2} alt="headier image"  height={'auto'}  className='md:w-[75%] '/>
                </div>
                <div className='flex flex-col justify-around max-md:text-left  text-center items-center max-md:items-start max-md:pl-10   bg-white bg-opacity-80 w-1/2 max-sm:w-[100%] h-4/5 max-md:h-[100%] max-md:top-0 absolute top-[10%] left-0 '>
                    <div className='max-md:text-left'>

                        <h1 className='text-3xl max-lg:text-2xl max-lg:my-2 max-sm:text-[1rem]  max-sm:my-0 mt-4 mb-4'>Make your dream interior in</h1>
                        <h1 className='text-5xl max-lg:text-3xl max-lg:my-2 max-sm:text-xl max-sm:my-0  mb-6'>3 easy steps</h1>
                    </div>
                    <div>

                        <h1 className='text-3xl max-lg:text-2xl max-sm:text-xl max-lg:mb-0 max-sm:my-0  mb-2 font-semibold text-purple-900 '>Explore</h1>
                        <h1 className=''>Explore more than just modular design <br />
                            ideas with our experts.</h1>
                    </div>  <div>

                        <h1 className='text-3xl max-lg:text-2xl max-sm:text-xl  max-lg:mb-0 mb-2 max-sm:my-0 font-semibold text-purple-900 '>Design</h1>
                        <h1>Complete the designs with painting, flooring <br />
                            and other decor solutions</h1>
                    </div>
                    <div>
                        <h1 className='text-3xl max-lg:text-2xl max-sm:text-xl  max-lg:mb-0 mb-2 max-sm:my-0 font-semibold text-purple-900 '>Move-in</h1>
                        <h1>Move in with ease, with our hassle-free civil work <br />
                            and installation services.</h1>

                    </div>


                </div>
            </div>
            <div  className=''>
                <h1 className='text-center text-3xl leading-3 font-semibold mb-16'>What we do?</h1>
                <div className='flex justify-around gap-10 max-lg:flex-wrap px-10'   >
                    <div>
                        <div><img src={projectsImg1} alt="" width={230} /></div>
                        <h1 className='text-center text-purple-900 text-xl mt-5 font-semibold'>Modular Kitchen</h1>

                    </div>
                    <div>
                        <div><img src={projectsImg2} alt="" width={230} /></div>
                        <h1 className='text-center text-purple-900 text-xl mt-5 font-semibold'>Bedroom</h1>

                    </div>
                    <div>
                        <div><img src={projectsImg3} alt="" width={230} /></div>
                        <h1 className='text-center text-purple-900 text-xl mt-5 font-semibold'>Living room</h1>

                    </div>
                    <div>
                        <div><img src={projectsImg4} alt="" width={230} /></div>
                        <h1 className='text-center text-purple-900 text-xl mt-5 font-semibold'>Home office</h1>
                    </div>
                </div>
                <h1 className='text-center text-md my-10 max-md:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna
                    <br /> fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper <br /> eget nulla</h1>
            </div>
        </div>

    )
}

export default Header