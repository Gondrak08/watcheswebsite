import Image from 'next/image';

import Logo from '../public/logo.svg'

import Fb from '../public/fbLogo.png'
import Insta from '../public/instaLogo.png';
import Twitter from '../public/twitterLogo.png';
import Google from '../public/googleLogo.png';

export const Footer=()=>{
    return(
        <footer className="w-full h-full bg-[#111010]">
            <div className="container mx-auto w-full h-full py-16 px-5 md:px-0">
                <section className="grid md:grid-cols-3 lg:grid-cols-4 gap-8" >
                    <div className="col-1 flex flex-col items-start gap-2 text-[14px] text-wwhite font-jost">
                        <Image src={Logo} />
                        <span className="font-signika" >
                            Lorem Ipsum is simply dummy typesetting industry. a type specimen book.
                        </span>
                        <span className="mt-3 font-[700]">
                            Call Us: +00 333 7770
                        </span>
                        <span className="font-[600]" >
                            Email: email@watchkart.com
                        </span>
                    </div>
 
                    <div className="col-2 text-wwhite md:pl-8 flex flex-col gap-3 " >
                        <span className="font-jost font-[700] text-[22px] mt-1" >Discover</span>
                        <ul className="flex flex-col gap-3" >
                            <li>
                                Make Time For Good
                            </li>
                            <li>
                                About Us
                            </li>
                            <li>
                                Careers
                            </li>
                            <li>
                                Store Locator
                            </li>
                        </ul>
                    </div>
 
                    <div className="col-3 text-wwhite flex flex-col gap-3 " >
                        <span className="font-jost font-[700] text-[22px] mt-1" >Customer Care</span>
                        <ul className="flex flex-col gap-3" >
                            <li>
                                Watch Instructions {"&"} Care
                            </li>
                            <li>
                                Warranty {"&"} Repairs
                            </li>
                            <li>
                                Order Status
                            </li>
                            <li>
                                FAQ
                            </li>
                        </ul>
                    </div>
 
                    <div className="col-4 text-wwhite flex flex-col gap-3">
                        <span className="font-jost font-[700] text-[22px] text-wwhite mt-1">Newsletter</span>
                        <div className="flex flex-col gap-5">
                            <span className="font-jost font-[500] text-[18px] text-wwhite" >
                                Enter your email and We'll Send you more information
                            </span>
                            <div className="relative  h-[3.5em]" >
                                <input type="text" placeholder="Your Email" 
                                className="p-4 w-full h-full bg-black border border-[1px] border-white rounded-3xl font-poppins placeholder:text-wwhite " />
                                <button className="absolute right-[3%] top-[16%]   rounded-full bg-wbrown px-3 text-[25px] font-[700]  text-wwhite" >
                                    {">"} 
                                </button>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

            <section className="w-full border-0 border-t-[0.5px] border-t-white border-opacity-[0.3]" >
                <div className="container mx-auto dev-content flex flex-wrap gap-2 md:gap-0 justify-center md:justify-between items-center text-white py-5">
                    <span className="font-jost text-[19px] text-wwhite" >
                        Vitor Alecrim All Right Reserved, 2022    
                    </span>
                    <div className="flex gap-8 items-center" >
                        {[Fb, Insta, Twitter, Google].map((item, index)=>(
                            <a key={index} className="w-[fit-content] h-[fit-content] hover:cursor-pointer " >
                                <Image alt="logo" src={item.src} width={item.width} height={item.height} />
                            </a>
                        ))}
                    </div>       
                </div>
            </section>
        </footer>   
    )
};

export default Footer;
