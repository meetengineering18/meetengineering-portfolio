"use client";

import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import { Footer } from "../components/footer";
import { motion } from "framer-motion";
import { ProductGallery } from "../components/productGallery";

const products = [
  {
    title: "Stainless Steel Hinges",
    description:
      "High-quality, corrosion-resistant hinges customized for industrial and commercial use.",
    href: "/product/hinge",
  },
  {
    title: "Door Closers",
    description:
      "Reliable and durable door closers tailored to your specifications for smooth operation.",
    href: "/product/door-closer",
  },
  {
    title: "Custom Metal Parts",
    description:
      "Precision-engineered custom metal parts for all your industrial and manufacturing needs.",
    href: "/product/custom-parts",
  },
];

export default function ProductPage() {
  return (
    <>
      <Head>
  <title>Stainless Steel Hinges Manufacturer | Rust-Resistant Door Hardware</title>
  <meta
    name="description"
    content="Meet Engineering manufactures premium stainless steel hinges for doors, gates, and industrial applications. Rust-resistant and built for strength."
  />
  <meta
    name="keywords"
    content="stainless steel hinges, heavy duty hinges, rust-resistant door hardware, industrial door hinges"
  />
  <meta property="og:title" content="Meet Engineering | Stainless Steel Hinges Manufacturer" />
  <meta
    property="og:description"
    content="High-quality stainless steel hinges built for strength and corrosion resistance. Ideal for industrial and commercial use."
  />
  <meta property="og:url" content="https://www.meetengineering.co/product/stainless-steel-hinges" />
  <meta property="og:site_name" content="Meet Engineering" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Meet Engineering | Stainless Steel Hinges Manufacturer" />
  <meta
    name="twitter:description"
    content="Premium stainless steel hinges for industrial and commercial applications."
  />

  {/* JSON-LD Product Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        name: "Stainless Steel Hinges",
        image: ["https://www.meetengineering.co/images/stainless-steel-hinges.jpg"],
        description:
          "Rust-resistant stainless steel hinges for doors and gates.",
        category: "Hinges",
        brand: {
          "@type": "Brand",
          name: "Meet Engineering"
        },
        offers: {
          "@type": "Offer",
          url: "https://www.meetengineering.co/product/stainless-steel-hinges",
          priceCurrency: "INR",
          price: "250.00",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition"
        }
      })
    }}
  />
</Head>

      <Navbar />

      <main className="bg-gray-50 min-h-screen text-gray-800 py-20 px-6">
        {/* Intro Text Section */}
        <section className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-4 text-blue-800">Our Products</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-700 leading-relaxed">
            At Meet Engineering, we specialize in manufacturing precision steel components tailored to meet the diverse needs of industries across Gujarat and India. Whether you need robust hinges, efficient door closers, or custom metal parts designed for your specific application, our expert team delivers quality, durability, and innovation every step of the way.
          </p>
        </section>

        {/* Product Cards Section */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {products.map(({ title, description, href }, idx) => (
            <motion.a
              key={idx}
              href={href}
              className="block p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h2>
              <p className="text-gray-700">{description}</p>
              <span className="inline-block mt-6 px-5 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
                Learn More
              </span>
            </motion.a>
          ))}
        </section>

        {/* Product Gallery */}
        <ProductGallery />

        {/* Outro Text Section */}
        <section className="max-w-4xl mx-auto mt-20 text-center px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Why Choose Meet Engineering?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our commitment to precision engineering, timely delivery, and exceptional customer service makes us a trusted partner for industrial steel solutions. Explore our products or contact us to discuss custom requirements — we bring your vision to life with unmatched expertise.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
