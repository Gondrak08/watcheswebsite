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
      <PromotionDisplay/>
      <NewProduct/>
      <HeroSecond/>
      <Offers/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}
