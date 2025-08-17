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
import { GetAQuoteForm } from './components/GetAQuoteForm';
import Head from 'next/head';






const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Phone number ${text} copied to clipboard!`);
  }).catch(err => console.error('Failed to copy:', err));
};


const items = [
  { 
    icon: <FaWhatsapp size={18} color="#25D366" />, 
    label: "WhatsApp", 
    onClick: () => window.open("https://wa.me/919825869799", "_blank") 
  },

  { 
    icon: <FaPhone size={18} color="#34B7F1" />, 
    label: "Call", 
    onClick: () => copyToClipboard("+91 98258 69799") 
  },

  {
    icon: <FaRegCommentDots size={18} color="#f0ad4e" />, // quote/chat symbol
    label: "Get a Quote",
    onClick: () => window.location.href = "/contact", // redirect to /quote
  }
];

export default function Home() {
  return (
    
    <>
    <Head>
  <title>Meet Engineering | Stainless Steel & Metal Parts Manufacturer in Gujarat, India</title>
  
  <meta
    name="description"
    content="Meet Engineering is a leading manufacturer and supplier of precision stainless steel hardware parts including hinges, door closers, and custom metal components. Based in Gujarat, India, we provide high-quality, budget-friendly mass production services to industries across India."
  />
  
  <meta
    name="keywords"
    content="
      hinge manufacturer Gujarat,
      stainless steel part manufacturer India,
      custom metal parts manufacturer Valsad,
      industrial steel components India,
      door closer supplier Gujarat,
      metal hardware parts India,
      mass production steel parts Gujarat
    "
  />
  
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Meet Engineering" />
  
  {/* Open Graph / Social Media Tags */}
  <meta property="og:title" content="Meet Engineering | Stainless Steel & Metal Parts Manufacturer in Gujarat, India" />
  <meta
    property="og:description"
    content="Providing durable and precision-engineered stainless steel hinges, door closers, and custom metal parts for industries across Gujarat and India. Reliable mass production and on-time delivery."
  />
  <meta property="og:type" content="website" />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Meet Engineering | Stainless Steel & Metal Parts Manufacturer in Gujarat, India" />
  <meta
    name="twitter:description"
    content="Durable, custom stainless steel and metal hardware parts manufactured in Gujarat, India. Serving industrial clients with quality and timely delivery."
  />
  
  {/* Local Business Schema JSON-LD (Google Structured Data) */}
 <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `
      {
        "@context": "https://schema.org/",
        "@graph": [
          {
            "@type": "Product",
            "name": "Custom Metal Parts",
            "category": "Custom Fabrication",
            "description": "High-quality custom steel parts manufactured in bulk for industrial applications.",
            "brand": { "@type": "Brand", "name": "Meet Engineering" },
            "offers": {
              "@type": "Offer",
              "url": "https://meetengineering.co/custom-metal-parts",
              "price": "0.00",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            }
          },
          {
            "@type": "Product",
            "name": "Door Closers",
            "category": "Hardware",
            "description": "Durable stainless steel door closers for commercial and industrial use.",
            "brand": { "@type": "Brand", "name": "Meet Engineering" },
            "offers": {
              "@type": "Offer",
              "url": "https://meetengineering.co/door-closers",
              "price": "0.00",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            }
          },
          {
            "@type": "Product",
            "name": "Stainless Steel Hinges",
            "category": "Hardware",
            "description": "Precision stainless steel hinges designed for heavy-duty applications.",
            "brand": { "@type": "Brand", "name": "Meet Engineering" },
            "offers": {
              "@type": "Offer",
              "url": "https://meetengineering.co/stainless-steel-hinges",
              "price": "0.00",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            }
          }
        ]
      }
      `
    }}
  />
</Head>

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
<div className='container mx-auto px-4 py-16 max-w-4xl'>
<GetAQuoteForm/>
</div>


      <Footer />
      <Dock items={items} />

      
    </>
  )
}
