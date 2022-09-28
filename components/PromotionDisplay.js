import {useState, useEffect} from 'react';
import Image from 'next/image';
import CountDown from './CountDown';
import Promotion from '../public/promotion.png';
import Promotion2 from '../public/promotion2.png';
import Promotion3 from '../public/promotion3.png';

export const PromotionDisplay = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        if(!isMounted) setIsMounted(true);
    },[])

    return (
        <section className='w-full h-full py-5 ' >
            <div className='container mx-auto'>
                <div className='card-displays grid gap-5 grid-cols-3'>
                    {
                        [{
                            img: Promotion,
                            title: 'flat 33% off',
                            text: 'on timex watches',
                            button: true
                        }, {
                            img: Promotion2,
                            title: 'digital smart',
                            text: ' - watch - ',
                            button: false,
                        }, {
                            img: Promotion3,
                            title: 'upto 50% off',
                            text: 'on fossil watches',
                            button: true
                        }].map((item, index) => (
                            <a key={index} className='flex flex-col h-[100%] ' >
                                <div className='relative text-white h-[fit-content]' >
                                    <Image src={item.img} layout="responsive" objectFit="contain" />
                                    {
                                        item.button ? (
                                            <div className='
                                            absolute 
                                            top-[20%] 
                                            bottom-[50%] 
                                            left-[5%] 
                                            right-0
                                            flex
                                            flex-col
                                            
                                            h-[fit-content]
                                            w-[fit-content]
                                            text-center
                                            items-center
                                            ' >
                                                <h4 className='font-kranky text-[29px] uppercase ' 
                                                >{item.title}</h4>
                                                <span className='font-signika text-[30px] uppercase w-[151px] leading-[139.5%] ' >{item.text}</span>
                                                <a className='font-jost text-[16px] p-[0.3em] max-w-[115px] w-full self-center bg-wbrown' >Buy Now!</a>
                                            </div>
                                        ) : (
                                            <div className='absolute 
                                            w-full h-full 
                                            bg-wbrown bg-opacity-[0.1] 
                                            top-0 
                                            flex 
                                            items-center 
                                            justify-center ' >
                                                <div className='text-center w-[fit-content] h-[fit-content] text-white bg-wbrown bg-blur-[15px] bg-opacity-[0.5] p-3' >
                                                    <h4 className='font-signika text-[25px] landing-[139.5%] uppercase m-0 ' >{item.title}</h4>
                                                    <span className='font-signika text-[60px] landing-[139.5%] uppercase m-0 ' >{item.text}</span>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className='bg-white py-2'>
                                    <CountDown date="2022-12-24T00:00:00" />
                                </div>
                            </a>
                        )
                        )
                    }
                </div>
            </div>
        </section>
    )
};

export default PromotionDisplay;