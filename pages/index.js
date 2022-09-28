import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {
  Header,
  BrandDisplay, 
  PromotionDisplay,
  NewProduct,
  HeroSecond,
  Offers,
  BlogSection,
  Footer
} from '../components/index';

export default function Home() {
  return (
    <div className=' w-full h-full bg-wblack'>
      <Header />
      <BrandDisplay/>
      {/* <PromotionDisplay/> */}
      <NewProduct/>
      <HeroSecond/>
      <Offers/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}
