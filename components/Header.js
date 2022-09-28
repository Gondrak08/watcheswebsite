import Navbar from './Navbar';
import Image from 'next/image'
import Hero from '../public/hero.png'
import Hero2 from '../public/hero2.png'

import Watch1 from '../public/watch1.svg';
import Watch2 from '../public/watch2.svg';
import Watch3 from '../public/watch3.svg';


export const Header=()=>{
    return(
        <header className='w-full  flex flex-col h-[82vh] bg-wblack relative  ' >
          

            <section className=''>
                <section className="bg-wblack" >
                    <div className='container mx-auto relative'>
                        <Navbar/>
                    </div>
                </section>
            </section>
            
            <div className='h-[100%] w-[100%] bg-no-repeat bg-cover  bg-center  bg-[url(../public/hero2.png)]' >
                    <div className='container mx-auto items-center flex h-full'>
                        <div className='h-[fit-content]  w-[fit-content] justify-self-center content flex flex-col items-start justify-center gap-5'>
                            <div id="texts" className=' flex flex-col gap-3 items-center justify-center text-white text-center'>
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

                            <div className='images-display align-center self-center flex gap-5 my-2 items-center justify-center' >
                                <div className='bg-wblacktotal 
                                    hover:cursor-pointer
                                    w-[92px] 
                                    h-[117.74px] 
                                    flex 
                                    items-center 
                                    justify-center' >
                                    <Image  className='image' src={Watch1}  width={"100%"}  height={"100%"} objectFit="contain"  />
                                </div>
                                <div className='bg-wblacktotal hover:cursor-pointer 
                                w-[92px] h-[117.74px] flex items-center justify-center'>
                                    <Image  className='image' src={Watch2} width={"100%"}  height={"100%"}  objectFit="contain" />
                                </div>
                                <div className='bg-wblacktotal hover:cursor-pointer 
                                w-[92px] h-[117.74px] flex items-center justify-center'>
                                    <Image  className='image' src={Watch3} width={"100%"}  height={"100%"} objectFit="contain"  />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
 
        </header>
    )
}

export default Header;