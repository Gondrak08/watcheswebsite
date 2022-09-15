import Image from 'next/image'

import Logo from '../public/logo.svg';
import User from '../public/user.svg';
import Heart from '../public/heart.svg';
import Search from '../public/search.svg'


export const Navbar = ()=>{
    return(
        <nav className="flex z-50  py-5 items-center justify-between w-[100%] h-auto" >
            <Image src={Logo} width={168} height={41} />
            <ul className='flex gap-5 uppercase text-wwhite text-[14px]' >
              {['watches','mens', 'womens', 'new arrivals', 'featured', 'sale'].map(link=>(
                <li><a href='#'>{link}</a></li>
              ))}
            </ul>
            <ul className='flex gap-5'>
                <Image src={User} width={32} height={32}/>
                <Image src={Heart} width={32} height={32}/>
                <Image src={Search} width={32} height={32}/>
            </ul>
        </nav>
    )
}

export default Navbar;