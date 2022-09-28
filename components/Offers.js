import { useEffect, useState } from 'react';

import Image from 'next/image';
import Face from '../public/watchface.svg';
import Frame2 from '../public/watchface2.svg';
import Frame3 from '../public/watchface3.svg';
import Frame4 from '../public/watchface4.svg';

const Images = [
    {
        image: Face
    },
    {
        image: Frame2
    },
    {
        image: Frame3
    },
    {
        image: Frame4
    },
];

export const Offers=()=>{
    const [images, setImages] = useState(null);

    useEffect(()=>{
        setImages(Images);
    },[Images])

    return(
        <section id='offers-display' className='w-full h-full'>
            <div className='container h-full py-8 mx-auto flex flex-col gap-10 justify-center'>
                <div className='texts mx-auto py-3 max-w-[658px] w-full h-[fit-content] text-center'>
                    <h3 className='text-[35px] md:text-[45px]  text-wbrown uppercase'>best delicious offers</h3>
                    <span className='font-jost text-[14px] md:text-[20px] text-wwhite opacity-[0.7] max-w-[258px] w-full' >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.</span>
                </div>
                <div className='w-full h-full grid grid-cols-4 gap-5 md:gap-12  lg:gap-20 '>
                    {
                        images ? images.map((item, index)=>(
                            <div className='card p-5 '>
                                {console.log(item.image.width)}
                                <Image src={item.image.src} 
                                width={item.image.width} 
                                height={item.image.height}
                                objectFit='contain'
                                layout='responsive'
                                className=''  
                                />
                            </div>
                        )):null
                    }
                </div>
            </div>
        </section>
    )
}
export default Offers;