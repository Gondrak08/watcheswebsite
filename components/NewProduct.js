import {useState, useEffect} from 'react';
import Image from 'next/image';

import Watch from '../public/watchnew.png';
import Watch2 from '../public/watchnew2.png';
import Watch3 from '../public/watchnew3.png';
import Watch4 from '../public/watchnew4.png';
import Watch5 from '../public/watchnew5.png';
import Watch6 from '../public/watchnew6.png';
import Watch7 from '../public/watchnew7.png';
import Watch8 from '../public/watchnew8.png';
 
import {AiFillHeart} from 'react-icons/ai';

import ReactStars from "react-rating-stars-component";
const Watchs = [
    {
        img:Watch,
        title:'Marvik',
        price:'58.00',
        discount:'50.00',
        highlight:true,
        isLiked:false,
    },
    {
        img:Watch2,
        title:'Noise',
        price:'58.00',
        discount:'50.00',
        highlight:false,
        isLiked:false,
    },
    {
        img:Watch3,
        title:'BoAt',
        price:'58.00',
        discount:'50.00',
        highlight:false,
        isLiked:false,
    },
    {
        img:Watch4,
        title:'Fire-bolt',
        price:'58.00',
        discount:'50.00',
        highlight:false,
        isLiked:false,
    },
    {
        img:Watch5,
        title:'TAAG',
        price:'58.00',
        discount:'50.00',
        highlight:false,
        isLiked:false,
    },
    {
        img:Watch6,
        title:'Casio',
        price:'58.00',
        discount:'50.00',
        highlight:false,
        isLiked:false,
    },
    {
        img:Watch7,
        title:'MARVIK',
        price:'58.00',
        discount:'50.00',
        highlight:false,
        isLiked:false,
    },
    {
        img:Watch8,
        title:'NIBOSI',
        price:'58.00',
        discount:'50.00',
        highlight:false,
        isLiked:false,
    },
    
];
export const NewProduct=()=>{
    const [watchList, setWatchList] = useState(Watchs);
     
    useEffect(()=>{
        setWatchList(Watchs)
    },[]);
    
    const ratingChanged = (newRating)=>{console.log(newRating)};
    const handleLike=(e, index, card)=>{
        const newVal = [...watchList];
        newVal[index].isLiked = !card.isLiked;
        setWatchList(newVal);
    };

    return(
        <section className="w-full h-full py-5">
            <div className="container mx-auto" >
                <div  className="text-center py-3 " >
                    <h3 className="text-[35px] md:text-[40px] lg:text-[50px] font-singika uppercase text-wpinkdark text-center " >new arrivals</h3>
                    <span className="text-jost  md:text-[14px] lg:text-[20px] text-white opacity-[0.7]" >
                        In publishing and graphic design, Lorem ipsum is a placeholder text
                        <br className='hidden md:inline' /> 
                        commonly used to demonstrate the visual.
                    </span>
                </div>
            </div>
            <div className="container mx-auto h-full" >
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-2 px-5 md:px-0 ' >
                    {watchList.map((item, index)=>(
                        <div key={index} className={`Card relative w-full h-full border-[0.1em] border-black hover:border-b-white   hover:cursor-pointer
                        ${item.highlight ? 'rounded-tl-[80px] bg-[url("../public/bgcard.png")] bg-contain bg-no-repeat bg-center bg-[#D8A688] ' :''}`
                        }>
                            <Image  src={item.img} layout="responsive" width={"100%"} height={"100%"} objectFit={item.highlight ? "contain" : "cover"} />
                           
                                < AiFillHeart  color={item.isLiked ? "red" :  "white"} 
                                className='absolute top-0 right-0 m-5 w-[28px] h-[28px]'  
                                id={item.name} onClick={(e) => handleLike(e, index, item) }
                                />
                           
                            <div className='Texts absolute z-50 bottom-0 w-full p-2 bg-transparent'>
                                <span className='text-white font-singika text-[20px] font-[500] ' >{item.title}</span>
                                <div className='flex justify-between items-center' >
                                    <div className='flex gap-2  text-[18px] font-singika' >
                                        <span className={item.highlight?'text-black':' text-wbrown'}>
                                            ${item.price}
                                        </span>
                                        <span className='text-wgray  opacity-[0.7]' >
                                            ${item.discount}
                                        </span>
                                    </div>

                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#FFA722"
                                    />

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default NewProduct;