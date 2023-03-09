import React from 'react'
import contactMainImg from '../../assests/contactsMainImg.png'
import contactRightImg from '../../assests/contactsRightImg.png'
import contactLeftImg from '../../assests/contactsleftImg.png'
import contactProfileImg from '../../assests/contactsProfileImg.png'
const Contacts = () => {
    return (
        <div id='contact'>
            <h1 className='text-center  text-4xl font-semibold mt-16 max-md:text-left max-md:ml-[5%]'>Our Happy Costumers</h1>
            <h1 className='text-center mt-10 max-md:text-left max-md:ml-[5%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet <br />
                luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</h1>
            <div className='flex justify-between gap-20 mt-16   mb-20'>
                <div className='flex flex-col justify-center max-md:hidden' ><img src={contactLeftImg} alt="" /></div>
                <div className='relative max-md:mx-10 '><img src={contactMainImg} alt="" />
                    <div className='absolute h-[45%] w-[60%] bg-gray-50 max-lg:w-[75%] max-lg:left-[12%] max-md:w-[90%] max-md:bottom-[10%] max-md:left-[5%] max-md:h-[70%] left-[20%] bottom-[-10%] flex flex-col justify-center  text-center'>
                        <div className='flex justify-center '>
                            <img src={contactProfileImg} className='mt-[-10%]' alt=" profile img" width={100} height={100} />
                        </div>
                        <h1 className='mt-0 max-md:mt-0 '>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit ut aliquam, purus sit amet luctus venenatis, lectus <br /> magna fringilla urna, porttitor</h1>
                        <div>
                            <h1 className='text-2xl font-semibold mt-[10] ' >-Jeo Stanlee</h1>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center max-md:hidden'><img src={contactRightImg} alt="" /></div>
            </div>
            <div className='mt-32 mb-10'>
                <h1 className='ml-[7%] max-md:ml-[5%] mb-10 mt-[1%] max-md:text-2xl text-4xl font-normal'>Let talk about your Dream home</h1>
                <div className='ml-[5%] md:flex md:justify-around  max-md:flex-none '>
                    <div className=' w-[30%] max-md:w-[90%] max-md:my-10'>
                        <input type="text" placeholder='Name' className='focus:outline-none  rounded-none w-[100%] border-b-2 py-2 border-gray-400' />
                    </div>
                    <div className='w-[30%] max-md:w-[90%] max-md:my-10'>
                        <input type="text" placeholder='Phone/Email' className='focus:outline-none rounded-none w-[100%] border-b-2 py-2 border-gray-400' />
                    </div>
                    <div className=' w-[25%] max-md:w-[100%] max-md:flex max-md:justify-center'  >
                        <button className='bg-purple-900  text-xl  leading-45  p-2  px-16 text-white' >Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contacts