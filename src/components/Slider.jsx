import React, { Component } from "react";
import Slider from "react-slick";
import '../index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from '../assests/sliderImg1.png'
import sliderImg2 from '../assests/sliderImg2.png'
import sliderImg3 from '../assests/sliderImg3.png'
import sliderImg4 from '../assests/sliderImg4.png'
import bgImg from '../assests/bgImg.png'


export default class Resizable extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },]
        };
        return (
            <div id='blog' className=""  >
                <h1 className="ml-20 text-4xl font-medium mb-10 ">Blogs</h1>

                <div className="flex  justify-center " >

                    <div className="w-11/12 ">
                        <Slider {...settings}>
                            <div className="mr-4">
                                <h3 className="pr-10"><img src={sliderImg1} alt="slider wali img" /></h3>
                                <h1 className="text-2xl my-2 font-semibold">Modern Interior</h1>
                                <h1 className="mt-4">Lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit ut <br />
                                    aliquam,</h1>
                            </div>
                            <div>
                                <h3 className="mr-10"><img src={sliderImg2} alt="slider wali img" /></h3>
                                <h1 className="text-2xl my-2 font-semibold">Exterior Project</h1>
                                <h1 className="mt-4">Lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit ut <br />
                                    aliquam,</h1>
                            </div>
                            <div>
                                <h3 className="mr-10"><img src={sliderImg3} alt="slider wali img" /></h3>
                                <h1 className="text-2xl my-2 font-semibold">Grey Beauty</h1>
                                <h1 className="mt-4">Lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit ut <br />
                                    aliquam,</h1>
                            </div>
                            <div>
                                <h3 className="mr-10"><img src={sliderImg4} alt="slider wali img" /></h3>
                                <h1 className="text-2xl my-2 font-semibold">Plantation interior</h1>
                                <h1 className="mt-4">Lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit ut <br />
                                    aliquam,</h1>
                            </div>
                            <div>
                                <h3 className="mr-10"><img src={sliderImg3} alt="slider wali img" /></h3>
                                <h1 className="text-2xl my-2 font-semibold">Role of furnitures</h1>
                                <h1 className="mt-4">Lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit ut <br />
                                    aliquam,</h1>
                            </div>

                        </Slider>
                    </div>
                </div>
                <div className="flex justify-center mt-10">

                    <button className='bg-purple-900 mb-8  text-xl leading-45 mt-4  px-14 py-4 text-white' >View all</button>
                </div>

            </div>
        );
    }
}