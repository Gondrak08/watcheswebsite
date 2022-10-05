import Image from 'next/image';

import Thumb from '../public/thumb.png'
import Thumb2 from '../public/thumb2.png'
import Thumb3 from '../public/thumb3.png'



export const BlogSection=()=>{
    const Posts=[
        {
            image:Thumb,
            title:'20 june, 2022',
            text:'In publishing and graphic design, Lorem to demonstrate the visual.'
        },
        {
            image:Thumb2,
            title:'15 march, 2022',
            text:'In publishing and graphic design, Lorem to demonstrate the visual.'},
        {
            image:Thumb3,
            title:'24 june, 2022',
            text:'In publishing and graphic design, Lorem to demonstrate the visual.'}
    ]
    return(
        <section className="w-full h-full">
            <div className="container mx-auto py-8 flex flex-col gap-12">
                <div className="texts flex flex-col gap-5 items-center text-center w-full">
                    <h3 className="text-[35px] md:text-[45px]  text-wbrown uppercase">
                        blog updates
                    </h3>
                    <span className="font-jost text-[14px] md:text-[20px] text-wwhite opacity-[0.7]  max-w-[658px] w-full">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.
                    </span>
                </div>
                <div className='grid md:grid-cols-3 gap-8 px-5 md:px-0'>
                    {
                        Posts.map((item,index)=>(
                            <div className='card flex flex-col w-full h-full bg-[#111010]'key={index} >
                                <div>
                                    <Image 
                                        alt='relogio'
                                        src={item.image.src} 
                                        width={item.image.width} 
                                        height={item.image.height} 
                                        objectFit='contain' 
                                    />
                                </div>
                                <div className='texts w-full h-full flex flex-col gap-2 px-3 py-4' >
                                    <h4 className='text-wbrown font-signika font-[600] text-[30px] uppercase'>
                                        {item.title}
                                    </h4>
                                    <span className='text-wwhite text-[16px] font-jost font-[500] opacity-[0.7]' >
                                        {item.text}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
};

export default BlogSection;