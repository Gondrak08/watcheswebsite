import {useState} from 'react';

import Image from 'next/image'
import Logo from '../public/logo.svg';
import User from '../public/user.svg';
import Heart from '../public/heart.svg';
import Search from '../public/search.svg'

import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

export const MobNavbar = (prop)=>{
  return(
    <div className='modal  h-screen  transform w-[70vw] fixed top-0 right-0 z-10  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 animate-slide-in shadow-2xl ' >
        <div className='mobNav flex flex-col' >
        <AiOutlineClose
            fontSize={48}
            className="text-white  cursor-pointer visible md:hidden p-3 self-end"
            onClick={() => prop.handleModal()}
        /> 
        {/* <button  onClick={()=> handleModal()} className='visible md:hidden p-3 text-white  bg-green-500  w-[fit-content] self-end' >
          X
        </button> */}
          <ul className='flex pt-3 pr-5 flex-col gap-5 items-end uppercase text-wwhite text-[14px]' >
              {['watches','mens', 'womens', 'new arrivals', 'featured', 'sale'].map((link, index)=>(
                <li key={index} ><a href='#' className="hover:underline " >{link}</a></li>
              ))}
          </ul>
          <ul className='flex justify-center mt-5 gap-5'>
              <Image priority={true} src={User} width={32} height={32} className="hover:opacity-[0.7] hover:cursor-pointer" />
              <Image priority={true} src={Heart} width={32} height={32} className="hover:opacity-[0.7] hover:cursor-pointer"/>
              <Image priority={true} src={Search} width={32} height={32} className="hover:opacity-[0.7] hover:cursor-pointer"/>
          </ul>
        </div>
    </div>
  )
};

export const Navbar = ()=>{
  const [isOpen, setIsOpen] = useState(false);

  function handleModal(){
      setIsOpen(!isOpen)
  }

  return(
      <div className='responsive' >
        <nav className="hidden md:flex z-50  py-5 items-center justify-between w-[100%] h-auto" >
            <Image priority={true} src={Logo} width={168} height={41} />
            <ul className='flex gap-5 uppercase text-wwhite text-[14px]' >
              {['watches','mens', 'womens', 'new arrivals', 'featured', 'sale'].map((link, index)=>(
                <li key={index} ><a href='#'>{link}</a></li>
              ))}
            </ul>
            <ul className='flex gap-5'>
                <Image src={User} width={32} height={32} className="hover:opacity-[0.7] hover:cursor-pointer " />
                <Image src={Heart} width={32} height={32} className="hover:opacity-[0.7] hover:cursor-pointer"/>
                <Image src={Search} width={32} height={32} className="hover:opacity-[0.7] hover:cursor-pointer"/>
            </ul>
        </nav>

        <HiMenuAlt4
            fontSize={38}
            color="white"
            className={`visible md:hidden w-[fit-content] absolute right-0 ${isOpen?'opacity-0':''} `} 
            onClick={()=> handleModal()}
        />
      
        {isOpen && <MobNavbar handleModal={handleModal}/> }
      </div>
    )
};

export default Navbar;