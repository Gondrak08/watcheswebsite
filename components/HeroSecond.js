const HeroSecond=()=>{
    return(
        <section className='w-full h-[25em] md:h-[45em] bg-[url("../public/bghero.png")] bg-no-repeat bg-cover  bg-center'>
            <div className='container relative mx-auto h-full ' >
                <div className='content h-[fit-content] flex justify-end absolute top-[20%] md:top-[155px] right-0'>
                    <div className='texts flex text-center flex-col gap-2  w-full max-w-[35em] '>
                        <h2 className='font-kranky text-wwhite text-[35px] md:text-[50px] lg:text-[60px]' >
                            sale up to 75% off !
                        </h2>
                        <span className='font-signika text-wwhite  text-[25px] md:text-[45px] font-[600] ' >platinum design</span>
                        <span className='font-jost text-[14px] md:text-[18px] text-[#ffffff] max-w-[525px] w-full font-[500] opacity-[0.7] ' >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.</span>
                        <a className='font-jost text-white bg-wbrown w-[fit-content] self-center py-3 px-12 my-5'>
                            shop now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSecond;