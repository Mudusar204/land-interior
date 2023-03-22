import React from 'react'
import contactMainImg from '../../assests/contactsMainImg.png'
import contactRightImg from '../../assests/contactsRightImg.png'
import contactLeftImg from '../../assests/contactsleftImg.png'
import contactProfileImg from '../../assests/contactsProfileImg.png'
import Slider from './Slider'
const Contacts = () => {
    return (
        <div id='contact'>
            <h1 className='text-center text-[#241330]  text-4xl font-semibold mt-[168px] max-md:text-left max-md:ml-[5%]'>Our Happy Costumers</h1>
            <h1 className='text-center text-[18px] leading-[27px] mt-[50px] max-md:text-left max-md:ml-[5%] mb-[72px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet <br />
                luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</h1>
           <Slider/>
            <div className='mt-[160px] mb-[243px] mx-[10%]'>
                 <h1 className='  mb-10 mt-[1%]  text-4xl font-normal'>Let talk about your Dream home</h1>
                <div className=' lg:flex md:justify-between  max-lg:flex-none '>
                    <div className=' w-[30%] max-lg:w-[90%] max-lg:my-10'>
                        <input type="text" placeholder='Name' className='focus:outline-none  rounded-none w-[100%] border-b-2 py-2 text-2xl mt-[25px]  border-gray-400' />
                    </div>
                    <div className='w-[30%] max-lg:w-[90%] max-lg:my-10'>
                        <input type="text" placeholder='Phone/Email' className='focus:outline-none rounded-none w-[100%] border-b-2 py-2 text-2xl mt-[25px] border-gray-400' />
                    </div>
                    <div className='  max-lg:w-[100%] max-lg:flex max-lg:justify-center'  >
                        <button className='bg-[#4B2A63]  text-2xl  leading-[36px] font-semibold  py-[22px]  px-[104px] text-white' >Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contacts