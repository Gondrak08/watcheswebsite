import Navbar from './Navbar';
import Image from 'next/image'
import Hero from '../public/hero.png'
import Hero2 from '../public/hero2.png'

import Watch1 from '../public/watch1.svg';
import Watch2 from '../public/watch2.svg';
import Watch3 from '../public/watch3.svg';


export const Header=()=>{
    return(
        <header className='w-full h-[75vh] bg-wblack relative  ' >
          

            <section className='absolute z-50 w-full ' >
                <section className="bg-wblack" >
                    <div className='container mx-auto responsive'>
                        <Navbar/>
                    </div>
                </section>
            </section>
            
            <div className=' relative h-[100%] w-[100%] bg-no-repeat bg-containe  bg-bottom  bg-[url(../public/hero2.png)]' >
                    <div className='container h-full'>
                        <div className='h-full relative left-[8.5em]  content flex flex-col items-center justify-center gap-5'>
                        <div id="texts" className='relative  flex flex-col gap-3 items-center justify-center text-white text-center'>
                            <h1> 
                                up to 50% off
                            </h1>
                            <h2>
                                super luxury, super watches
                            </h2>
                            <span  className='max-w-[525px] w-full' >
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.
                            </span>
                            <a className='hover:cursor-pointer py-[13px] px-[33px] my-3 bg-wbrown uppercase' >
                                explore more
                            </a>
                        </div>

                        <div className='images-display  flex gap-5 my-2 items-center justify-center' >
                            <div className='bg-wblacktotal 
                                hover:cursor-pointer
                                w-[92px] 
                                h-[117.74px] 
                                flex 
                                items-center 
                                justify-center' >
                                <Image  className='image' src={Watch1}  objectFit="contain"  />
                            </div>
                            <div className='bg-wblacktotal hover:cursor-pointer 
                            w-[92px] h-[117.74px] flex items-center justify-center'>
                                <Image  className='image' src={Watch2}  objectFit="contain" />
                            </div>
                            <div className='bg-wblacktotal hover:cursor-pointer 
                            w-[92px] h-[117.74px] flex items-center justify-center'>
                                <Image  className='image' src={Watch3}  objectFit="contain"  />
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
 
        </header>
    )
}

export default Header;