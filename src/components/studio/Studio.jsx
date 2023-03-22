import React from 'react'
import studioImg1 from '../../assests/studioImg1.png'
import studioImg2 from '../../assests/studioImg2.png'
import studioImg3 from '../../assests/studioImg3.png'
import studioImg4 from '../../assests/studioImg4.png'
import studioImg5 from '../../assests/studioImg5.png'
import studioImg6 from '../../assests/studioImg6.png'

const Studio = () => {
    return (
        <div id='studio'>
            <h1 className='text-4xl text-[#241330] font-[500] text-center mb-[50px] mt-10  max-lg:text-left max-lg:pl-[8%] max-lg:mb-[25px]'>Our Interior Design Products</h1>

            
            <div className=' flex justify-center'>

                <div className='flex justify-center w-[100%] mx-[9%] max-lg:w-[100%]  gap-2'>
                    <div >
                        <div className='mb-2'><img src={studioImg1} alt="" /></div>
                        <div><img src={studioImg2} alt="" /></div>
                    </div>
                    <div>
                        <img src={studioImg3} alt="" />
                    </div>
                    <div className='max-lg:hidden'>
                        <div className='mb-2'><img src={studioImg4} alt="" /></div>
                        <div><img src={studioImg5} alt="" /></div>
                    </div>
                    <div className='max-lg:hidden'><img src={studioImg6} alt="" /></div>
                </div>
            </div>
            <h1 className='text-center mt-4 text-xl max-md:text-left max-md:pl-[8%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, <br />
                purus sit amet luctus venenatis, lectus magna fringilla urna,<br />
                porttitor rhoncus dolor purus non enim</h1>
            <div className='text-center mt-6'>
                <button className='bg-[#4B2A63]   text-xl  leading-45 mt-4  px-14 py-4 text-white' >View all</button>
            </div>


        </div>
    )
}

export default Studio