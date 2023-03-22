import React, { Component } from "react";
import Slider from "react-slick";
import '../index.css';
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from '../assests/sliderImg1.png'
import sliderImg2 from '../assests/sliderImg2.png'
import sliderImg3 from '../assests/sliderImg3.png'
import sliderImg4 from '../assests/sliderImg4.png'
import sliderIcon from '../assests/sliderIcon.png'
import bgImg from '../assests/bgImg.png'


export default () => {


    const slider = React.useRef(null);

    const settings = {
        // dots: true,
        prevArrow: null,
        nextArrow: null,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            }]
    };
    return (
        <div id='blog' className="relative"   >
            <h1 className="ml-20 text-4xl font-[500] mt-[99px] mb-[20px] ">Blogs</h1>
            <div className="flex gap-4  mr-20 max-md:mr-0 mb-8 max-sm:mt-[-10%]">

                <button className="absolute right-10 top-[40%] max-sm:right-3" onClick={() => slider?.current?.slickNext()}><img src={sliderIcon} width={30} alt="slider wali img" /></button>
                <button className="absolute top-[40%] left-7 max-sm:left-2" onClick={() => slider?.current?.slickPrev()}> <img src={sliderIcon} className='rotate-180' width={30} alt="slider wali img" /></button>
            </div>
            <div className="flex  justify-center " >

                <div className="w-[90%] max-lg:w-[80%] ">
                    <Slider ref={slider} {...settings}>
                        <div className="p-5">

                            <div className=" ">
                                <h3 className=""><img src={sliderImg1} alt="slider wali img" /></h3>
                                <h1 className="text-2xl my-2 font-semibold">Modern Interior</h1>
                                <h1 className="mt-4">Lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit ut <br />
                                    aliquam,</h1>
                            </div>
                        </div>
                        <div className="p-5">

                            <div>
                                <h3 className=""><img src={sliderImg2} alt="slider wali img" /></h3>
                                <h1 className="text-2xl my-2 font-semibold">Exterior Project</h1>
                                <h1 className="mt-4">Lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit ut <br />
                                    aliquam,</h1>
                            </div>
                        </div>
                        <div className="p-5">

                            <div>
                                <h3 className=""><img src={sliderImg3} alt="slider wali img" /></h3>
                                <h1 className="text-2xl my-2 font-semibold">Grey Beauty</h1>
                                <h1 className="mt-4">Lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit ut <br />
                                    aliquam,</h1>
                            </div>
                        </div>
                        <div className="p-5">

                            <div>
                                <h3 className=""><img src={sliderImg4} alt="slider wali img" /></h3>
                                <h1 className="text-2xl my-2 font-semibold">Plantation interior</h1>
                                <h1 className="mt-4">Lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit ut <br />
                                    aliquam,</h1>
                            </div>
                        </div>
                        <div className="p-5">

                            <div>
                                <h3 className=""><img src={sliderImg3} alt="slider wali img" /></h3>
                                <h1 className="text-2xl my-2 font-semibold">Role of furnitures</h1>
                                <h1 className="mt-4">Lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit ut <br />
                                    aliquam,</h1>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
            <div className="flex justify-center mt-10">

                <button className='bg-[#4B2A63] max-lg:hidden mb-8  text-xl leading-45 mt-4  px-14 py-4 text-white' >View all</button>
            </div>

        </div>
    );

}