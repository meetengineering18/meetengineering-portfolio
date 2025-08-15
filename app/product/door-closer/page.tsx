"use client";

import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import { Footer } from "../../components/footer";
import { motion } from "framer-motion";
import Image from "next/image";

const doorCloserFeatures = [
  "Durable construction with premium stainless steel and alloys",
  "Smooth and reliable door closing mechanism with adjustable speed",
  "Suitable for commercial and industrial doors of all sizes",
  "Corrosion-resistant finish for long-lasting performance",
  "Easy installation and maintenance with client-specific customizations",
];

const doorCloserImages = [
  { src: "/door-closer.png", alt: "Door Closer Model 1" },
  { src: "/door-lock-1.png", alt: "Heavy Duty Door Closer" },
  { src: "/door-lock.png", alt: "Custom Door Closer" },
];

export default function DoorCloserPage() {
  return (
    <>
<Head>
  <title>Door Closers Manufacturer | Heavy Duty Commercial Door Solutions</title>
  <meta
    name="description"
    content="Meet Engineering manufactures durable door closers for commercial and industrial buildings. Designed for smooth operation and long-term reliability."
  />
  <meta
    name="keywords"
    content="door closers, commercial door closer manufacturer, heavy duty door hardware, industrial door closing systems"
  />
  <meta property="og:title" content="Meet Engineering | Door Closers Manufacturer" />
  <meta
    property="og:description"
    content="High-quality door closers designed for commercial and industrial use. Reliable performance with smooth door operation."
  />
  <meta property="og:url" content="https://www.meetengineering.co/product/door-closers" />
  <meta property="og:site_name" content="Meet Engineering" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Meet Engineering | Door Closers Manufacturer" />
  <meta
    name="twitter:description"
    content="Durable door closers for commercial and industrial environments. Built to last with precision engineering."
  />

  {/* JSON-LD Product Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        name: "Door Closers",
        image: ["https://www.meetengineering.co/images/door-closers.jpg"],
        description:
          "Durable door closers for industrial and commercial use.",
        category: "Door Hardware",
        brand: {
          "@type": "Brand",
          name: "Meet Engineering"
        },
        offers: {
          "@type": "Offer",
          url: "https://www.meetengineering.co/product/door-closers",
          priceCurrency: "INR",
          price: "1500.00",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition"
        }
      })
    }}
  />
</Head>


      <Navbar />
      <main className="bg-gray-50 min-h-screen text-gray-800">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-20 text-center px-4">
          <motion.h1
            className="text-5xl font-bold mb-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Door Closer Manufacturer in Gujarat
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Meet Engineering provides durable, custom door closers engineered for
            smooth operation and long-lasting performance in commercial and industrial applications.
          </motion.p>
        </section>

        {/* Images Section */}
        <section className="container mx-auto px-6 py-16 max-w-5xl">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
            Our Door Closer Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {doorCloserImages.map(({ src, alt }, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Details Section */}
        <section className="container mx-auto px-6 py-16 max-w-5xl">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Why Choose Our Door Closers?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            {doorCloserFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Custom Orders & Mass Production</h3>
            <p className="text-gray-700 text-lg max-w-3xl">
              We accommodate all order sizes from prototypes to large-scale production. Our expert team works with you to meet your specifications and delivery timelines.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Industries We Serve</h3>
            <p className="text-gray-700 text-lg max-w-3xl">
              Supplying door closers to commercial, industrial, and manufacturing sectors across Gujarat and all over India.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-800 text-white py-20 text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Request a Custom Quote</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Need a custom door closer tailored for your project? Contact us today for a free consultation and quote.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-800 font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
