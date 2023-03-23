import React, { Component } from "react";
import Slider from "react-slick";
// import '../index.css';
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import contactMainImg from '../../assests/contactsMainImg.png'
import contactRightImg from '../../assests/contactsRightImg.png'
import contactLeftImg from '../../assests/contactsleftImg.png'
import contactProfileImg from '../../assests/contactsProfileImg.png'
import sliderIcon from '../../assests/sliderIcon.png'

export default () => {


    const slider = React.useRef(null);

    const settings = {
        // dots: true,
        className: 'nd-slider',
        prevArrow: null,
        nextArrow: null,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "200px",
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 1500,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    prevArrow: null,
                    nextArrow: null,
                    centerMode: false,
                    // centerPadding: "100px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            }, {
                breakpoint: 800,
                settings: {
                    prevArrow: null,
                    nextArrow: null,
                    centerMode: false,
                    // centerPadding: "50px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            }, {
                breakpoint: 500,
                settings: {
                    prevArrow: null,
                    nextArrow: null,
                    centerMode: false,
                    // centerPadding: "50px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            }]
    };
    return (
            <div className="relative overflow-hidden">
        <div className="w-[100%] ">

                <Slider ref={slider} {...settings}>
                    <div className="">
                        <div className=' max-md:mx-10 mx-20 relative  bg-red-400'><img src={contactMainImg} height={536} className='max-sm:h-[300px]' alt="" />
                            <div className='absolute h-[45%] w-[60%] overflow-visible z-10 bg-gray-50 max-lg:w-[75%] max-lg:left-[12%] max-md:w-[90%] max-md:bottom-[10%] max-md:left-[5%] max-md:h-[70%] left-[20%] bottom-[-10%] flex flex-col justify-center  text-center'>
                                <div className='flex justify-center '>
                                    <img src={contactProfileImg} className='mt-[-10%]' alt=" profile img" width={100} height={100} />
                                </div>
                                <h1 className='mt-0 max-md:mt-0 '>Lorem ipsum dolor sit amet, consectetur adipiscing   <span className="max-sm:hidden"> <br /></span> elit ut aliquam, purus sit amet luctus venenatis, lectus <span className="max-sm:hidden"> <br /></span> magna fringilla urna, porttitor</h1>
                                <div className="">
                                    <h1 className='text-2xl font-semibold mt-[10] ' >-Jeo Stanlee</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" ">
                        <div className='relative max-md:mx-10 mx-20'><img src={contactMainImg} height={536} className='max-sm:h-[300px]' alt="" />
                            <div className='absolute h-[45%] w-[60%] bg-gray-50 max-lg:w-[75%] max-lg:left-[12%] max-md:w-[90%] max-md:bottom-[10%] max-md:left-[5%] max-md:h-[70%] left-[20%] bottom-[-10%] flex flex-col justify-center  text-center'>
                                <div className='flex justify-center '>
                                    <img src={contactProfileImg} className='mt-[-10%]' alt=" profile img" width={100} height={100} />
                                </div>
                                <h1 className='mt-0 max-md:mt-0 '>Lorem ipsum dolor sit amet, consectetur adipiscing  <span className="max-sm:hidden"> <br /></span> elit ut aliquam, purus sit amet luctus venenatis, lectus <span className="max-sm:hidden"> <br /></span> magna fringilla urna, porttitor</h1>
                                <div>
                                    <h1 className='text-2xl font-semibold mt-[10] ' >-Jeo Stanlee</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" ">

                        <div className='relative max-md:mx-10 mx-20'><img src={contactMainImg} height={536} className='max-sm:h-[300px]' alt="" />
                            <div className='absolute h-[45%] w-[60%] bg-gray-50 max-lg:w-[75%] max-lg:left-[12%] max-md:w-[90%] max-md:bottom-[10%] max-md:left-[5%] max-md:h-[70%] left-[20%] bottom-[-10%] flex flex-col justify-center  text-center'>
                                <div className='flex justify-center '>
                                    <img src={contactProfileImg} className='mt-[-10%]' alt=" profile img" width={100} height={100} />
                                </div>
                                <h1 className='mt-0 max-md:mt-0 '>Lorem ipsum dolor sit amet, consectetur adipiscing <span className="max-sm:hidden"> <br /></span> elit ut aliquam, purus sit amet luctus venenatis, lectus <span className="max-sm:hidden"> <br /></span> magna fringilla urna, porttitor</h1>
                                <div>
                                    <h1 className='text-2xl font-semibold mt-[10] ' >-Jeo Stanlee</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
            <div className="flex gap-4  mr-20 max-md:mr-0 mb-8 max-sm:mt-[-10%]">

                <button className="absolute right-10 top-[50%] max-sm:right-3 lg:hidden" onClick={() => slider?.current?.slickNext()}><img src={sliderIcon} width={30} alt="slider wali img" /></button>
                <button className="absolute top-[50%] left-7 max-sm:left-2 lg:hidden" onClick={() => slider?.current?.slickPrev()}> <img src={sliderIcon} className='rotate-180' width={30} alt="slider wali img" /></button>
            </div>
        </div>
    );

}