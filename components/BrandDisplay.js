import Image from 'next/image';
import Frame  from '../public/Frame.png';
import Frame2 from '../public/Frame2.png';
import Frame3 from '../public/Frame3.png';
import Frame4 from '../public/Frame4.png';
import Frame5 from '../public/Frame5.png';
import Frame6 from '../public/Frame6.png';

export const BrandDisplay = () => {
    console.log(Frame)
    return(
        <section id="brandDisplay" className='w-full py-12 bg-[#111010]' >
            <div className='container mx-auto w-full flex flex-wrap lg:flex-nowrap items-center justify-center md:justify-between gap-5 '>
                <div className='hover:cursor-pointer w-[250px] h-[85px] bg-[#2B2B2B] flex items-center justify-center'>
                    <Image src={Frame} width={Frame.width}  height={Frame.height} objectFit="contain"  />
                </div>
                <div className='hover:cursor-pointer w-[250px] h-[85px] bg-wbrown flex items-center justify-center'>
                    <Image src={Frame2} width={Frame2.width}  height={Frame2.height} />
                </div>
                <div className='hover:cursor-pointer w-[250px] h-[85px] bg-[#2B2B2B]  flex items-center justify-center'>
                    <Image src={Frame3} width={Frame3.width}  height={Frame3.height} />
                </div>
                <div className='hover:cursor-pointer w-[250px] h-[85px] bg-[#2B2B2B]  flex items-center justify-center'>
                    <Image src={Frame4} width={Frame4.width}  height={Frame4.height} />
                </div>
                <div className='hover:cursor-pointer w-[250px] h-[85px] bg-[#2B2B2B]  flex items-center justify-center'>
                    <Image src={Frame5} width={Frame5.width}  height={Frame5.height} />
                </div>
                <div className='hover:cursor-pointer w-[250px] h-[85px] bg-[#2B2B2B] flex items-center justify-center'>
                    <Image src={Frame6} width={Frame6.width}  height={Frame6.height} />
                </div>
            </div>
        </section>
    )
}

export default BrandDisplay;