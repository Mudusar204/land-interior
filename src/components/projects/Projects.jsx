import React from 'react'
import '../../index.css';

import projectsSideImg1 from '../../assests/projectsSideImg1.png'
import projectsSideImg2 from '../../assests/projectsSideImg2.png'
import projectsSideImg3 from '../../assests/projectsSideImg3.png'
import projectsSideImg4 from '../../assests/projectsSideImg4.png'

const Projects = () => {
    return (
        <div id='projects' className='pt-1'>
           
            <div className='relative   mt-20 pb-20'>

                <h1 className='text-3xl leading-54 mt-4 md:hidden pl-10 pb-8'>Our Projects</h1>

                <div className=' flex gap-2 pl-10  w-[50%] max-lg:w-[75%] max-md:w-[100%] max-md:px-10' >
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
                <div className='flex flex-col justify-around text-center  items-center gap-8 py-32 bg-white bg-opacity-80 w-[60%] h-[70%] absolute top-[7%] right-0 max-md:static max-md:py-0 max-md:w-[100%] max-md:px-10  '>


                    <h1 className='text-3xl leading-54 mt-4 max-md:hidden'>Our Projects</h1>
                    <h1 className='text-center text-md  max-md:text-left'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus <br /> venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent
                        <br /> elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                    </h1>
                    <h1 className='text-center text-md max-md:text-left '>  magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,  vel fringilla est ullamcorper eget nulla</h1>

                    <button className='bg-purple-900   text-xl leading-45  p-3 px-16 text-white' >Veiw All</button>


                </div>
            </div>
        </div>
    )
}

export default Projects