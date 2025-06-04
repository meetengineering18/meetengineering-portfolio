import Hero from './components/herosection'
import Navbar from './components/navbar'
import AboutCard from './components/about'
import WhyChooseUs from './components/whychoose'
import { ProductGallery } from './components/productGallery'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutCard/>
      <WhyChooseUs/>
      <ProductGallery/>
      
    </>
  )
}
