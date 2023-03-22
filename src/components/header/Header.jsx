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
            <div className='relative box-border mt-[68px] max-lg:mt-0  max-md:mt-0 mb-20'>
                <div>
                    <img src={headerImage} alt="headier image"
                        //  className=' max-sm:w-[100%]  md:w-[80%] lg:w-[60%]'
                        width={1090} className='lg:h-auto max-lg:h-[757px] max-sm:h-[500px]' />
                </div>
                <div className='flex flex-col justify-center    items-center  
                    bg-white bg-opacity-80 w-[978px] max-lg:w-[90%]   absolute top-[105px] lg:right-0 max-lg:mx-[5%] max-lg:top-[394px] max-sm:top-[265px]
                    ' >
                    {/* md:top-[20%] md:right-0 max-md:left-[5%] max-md:top-[40%] max-md:w-[90%] max-sm:bottom-0   */}
                    <h1 className='text-[36px] leading-[54px] mt-[61px] max-sm:text-xl'>Get personalised home Interior</h1>
                    <h1 className='text-[48px] max-sm:text-3xl leading-[72px]  max-sm:mb-0 font-semibold '>in just 50 days</h1>
                    <button className='bg-[#4B2A63] mt-[44px] max-lg:mt-[80px]  max-sm:mt-[40px]  uppercase text-[30px] font-[600] mb-[77px] max-sm:text-sm leading-45  py-[25px] px-[50px] max-sm:px-[20px] text-white' >speak with a online consultant</button>
                </div>
            </div>
            <div>
                <h1 className='text-center font-[500] text-[36px] mt-[141px] leading-[54px]'>Why LAND Interiors</h1>
                <div className='flex justify-center gap-[473px] max-xl:gap-[317px] mt-[95px] max-md:flex-col max-md:items-center max-md:gap-10'>
                    <div className='text-center flex flex-col  '>
                        <h1 className='ml-4 mb-[29px]'>

                            <img src={card1} alt=" card wali img" />
                        </h1>
                        <h1 className='text-[18px] leading-[27px]'>50 days or we <br />
                            pay you rent</h1>
                    </div>
                    <div className='text-center flex flex-col'>
                        <h1 className='ml-3 mb-[29px] '>

                            <img src={card2} alt=" card wali img" />
                        </h1>
                        <h1 className='text-[18px] leading-[27px]'>1500+happy <br />
                            customers</h1>
                    </div>
                    <div className='text-center flex flex-col mt-4'>
                        <h1 className='ml-6 mb-[27px]'>

                            <img src={card3} alt=" card wali img" width='50' />

                        </h1 >
                        <h1 className='text-[18px] leading-[27px]'>300+ design <br />
                            experties</h1>
                    </div>
                </div>
            </div>
            <div className='relative mt-[110px] box-content'>
                <div className='flex justify-end'>
                    <img src={headerImage2} alt="headier image" height={'auto'} className=' w-[1386px] h-[924px] max-lg:w-[1090px] max-lg:h-[804px] ' />
                </div>
                <div className='flex   flex-col  max-lg:text-left max-lg:pl-[95px] max-sm:pl-[20px] text-center  max-lg:items-start    bg-white bg-opacity-80 w-[828px] max-lg:w-[544px] max-sm:w-[100%]  max-sm:h-[100%]  max-lg:top-0 absolute top-[58px] left-0 '>
                    <div className='max-md:text-left'>

                        <h1 className='text-[#241330] text-4xl leading-[54px] font-[500] max-lg:mt-[71px]  mt-[62px] '>Make your dream interior in</h1>
                        <h1 className='text-5xl text-[#241330] font-[500] leading-[72px]'>3 easy steps</h1>
                    </div>
                    <div>

                        <h1 className='text-4xl  font-semibold text-[#4B2A63] mt-[76px] max-lg:mt-[48px] leading-[54px] '>Explore</h1>
                        <h1 className='text-[18px] max-lg:text-[22px] leading-[27px] mt-[7px]'>Explore more than just modular design <br />
                            ideas with our experts.</h1>
                    </div>  <div>

                        <h1 className='text-4xl  font-semibold text-[#4B2A63] mt-[56px] max-lg:mt-[36px] leading-[54px]'>Design</h1>
                        <h1 className='text-[18px] max-lg:text-[22px] leading-[27px] mt-[7px]'>Complete the designs with painting, flooring <br />
                            and other decor solutions</h1>
                    </div>
                    <div>
                        <h1 className='text-4xl  font-semibold text-[#4B2A63] mt-[56px] max-lg:mt-[36px]  leading-[54px] '>Move-in</h1>
                        <h1 className='text-[18px] max-lg:text-[22px] leading-[27px] mt-[7px] mb-[83px] max-lg:mb-[123px]'>Move in with ease, with our hassle-free civil work <span className='max-sm:hidden'> <br /></span>
                            and installation services.</h1>
                    </div>
                </div>
            </div>
            <div className='max-lg:ml-[15%] max-md:mx-[30%] max-sm:mx-[25%]'>
                <h1 className='text-center text-4xl leading-[54px] mt-[123px] max-lg:mt-[44px]  max-lg:text-left font-medium '>What we do?</h1>
                <div className='flex mt-[60px] lg:justify-center  gap-[75px] max-lg:gap-x-[89px] max-lg:gap-y-[40px]  max-lg:flex-wrap'   >
                    <div>
                        <div><img src={projectsImg1} alt="" width={286} height={340}  className='max-lg:w-[343px] ' /></div>
                        <h1 className='text-center text-[#4B2A63] text-[24px] leading-[36px] mt-[33px] max-lg:mt-[40px] font-semibold'>Modular Kitchen</h1>

                    </div>
                    <div>
                        <div><img src={projectsImg2} alt="" width={286} height={340} className='max-lg:w-[343px] ' /></div>
                        <h1 className='text-center text-[#4B2A63] text-[24px] leading-[36px] mt-[33px] max-lg:mt-[40px] font-semibold'>Bedroom</h1>

                    </div>
                    <div>
                        <div><img src={projectsImg3} alt="" width={286} height={340}  className='max-lg:w-[343px]'/></div>
                        <h1 className='text-center text-[#4B2A63] text-[24px] leading-[36px] mt-[33px] max-lg:mt-[40px] font-semibold'>Living room</h1>

                    </div>
                    <div>
                        <div><img src={projectsImg4} alt="" width={286} height={340} className='max-lg:w-[343px] ' /></div>
                        <h1 className='text-center text-[#4B2A63] text-[24px] leading-[36px] mt-[33px] max-lg:mt-[40px] font-semibold'>Home office</h1>
                    </div>
                </div>
                <h1 className='text-center text-[18px] leading-[27px] mt-[47px] h-[144px] max-lg:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna
                    <br /> fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper <br /> eget nulla</h1>
            </div>
        </div>

    )
}

export default Header