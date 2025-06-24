'use client'

import { useTheme } from 'next-themes'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Carousel } from './carousel';
import { useCallback } from "react";
import Link from 'next/link';






const Hero = () => {

  const scrollToServices = useCallback(() => {
  const section = document.getElementById("services");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}, []);
  const { theme } = useTheme()


    const slideData = [

    {

      src: "/box-round-strip.png",
    },
    {

      src: "/250mm-hinges.png",
    },
    {

      src: "/door-handle.png",
    },
        {

      src: "/door-hinges.png",
    },
        {

      src: "/hinges-small.png",
    },
        {

      src: "/door-closer.png",
    },
            {

      src: "/ring-insert.png",
    },
  ];

  return (

    <section className="relative  overflow-hidden pt-10 w-full h-full"> {/* full viewport height + padding for navbar */}
      {/* Background Grid Pattern */}
      <div
        className={`absolute inset-0 z-0 ${
          theme === 'dark' ? 'grid-pattern-dark' : 'grid-pattern'
        }`}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-5 md:px-10 lg:px-19 xl:px-20 h-full flex items-center ">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full"> {/* full height grid */}
          
          {/* Left Side - Company Information */}
          <div className="flex flex-col space-y-5 justify-center h-full animate-slideInFromLeft">
            <div>
<h1 className="font-bold tracking-tighter leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
  <span className="text-blue-600 block">MEET</span>
  <span className="text-black-800 dark:text-black-100">ENGINEERING</span>
</h1>

              <p className="mt-4 text-xl font-semibold uppercase tracking-wider text-muted-foreground">
                MFG. OF PRECISION ENGINEERING PARTS OF STEEL METAL
              </p>
            </div>

            <p className="text-muted-foreground text-gray-600 text-2xl max-w-lg">
              We specialize in custom stainless steel components for industrial and commercial applications. 
              From prototyping to bulk production, we ensure accuracy, durability, and on-time delivery.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Gundlav, Valsad – Trusted since 2004</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 98258 69799</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>meetengineering18@gmail.com</span>
              </div>
            </div>



            <div className="flex flex-wrap gap-4 pt-4">
<button onClick={scrollToServices} className="relative inline-flex h-14 w-auto overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring- focus:ring-slate-400 focus:ring-offset-4 focus:ring-offset-slate-50">
  {/* Rotating gradient background */}
  <span className="absolute inset-[0.6] rounded-full animate-spin-slow [background:conic-gradient(from_0deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

  {/* Button content with glassy background */}
  <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950/90 px-6 py-2 text-base font-medium text-white backdrop-blur-xl">
    Our Services 
  </span>
</button>




    <Link href="/contact">
      <button className="shadow-[0_0_0_0.5px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        Get Quote
      </button>
    </Link>
            </div>
          </div>

          {/* Right Side - Carousel */}

                  <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
            
      

        </div>
      </div>


    </section>
  )
}

export default Hero
