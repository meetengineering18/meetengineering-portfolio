"use client";
import Hero from './components/herosection'
import Navbar from './components/navbar'
import AboutCard from './components/about'
import WhyChooseUs from './components/whychoose'
import { ProductGallery } from './components/productGallery'
import Dock from './components/connection';
import { Footer } from './components/footer';
import { FadeInWhenVisible } from './components/fade';
import { OurServices } from './components/ourservices';

import { FaWhatsapp, FaPhone, FaRegCommentDots } from "react-icons/fa"; // use quote/chat icon






const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Phone number ${text} copied to clipboard!`);
  }).catch(err => console.error('Failed to copy:', err));
};


const items = [
  { 
    icon: <FaWhatsapp size={18} color="#25D366" />, 
    label: "WhatsApp", 
    onClick: () => window.open("https://wa.me/917600616660", "_blank") 
  },

  { 
    icon: <FaPhone size={18} color="#34B7F1" />, 
    label: "Call", 
    onClick: () => copyToClipboard("+91 76006 16660") 
  },

  {
    icon: <FaRegCommentDots size={18} color="#f0ad4e" />, // quote/chat symbol
    label: "Get a Quote",
    onClick: () => window.location.href = "/quote", // redirect to /quote
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <FadeInWhenVisible direction="left" >
        <AboutCard />
      </FadeInWhenVisible>

      <FadeInWhenVisible direction="right">
        <WhyChooseUs />
      </FadeInWhenVisible>

      <FadeInWhenVisible direction="up">
        <ProductGallery />
      </FadeInWhenVisible>

<section id="services">
  <FadeInWhenVisible direction="up">
  <OurServices />
  </FadeInWhenVisible>
</section>


      <Footer />
      <Dock items={items} />

      
    </>
  )
}
