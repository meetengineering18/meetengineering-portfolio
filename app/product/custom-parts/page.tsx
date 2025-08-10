"use client";

import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import { Footer } from "../../components/footer";
import { motion } from "framer-motion";
import Image from "next/image";

const customPartsFeatures = [
  "Fully customizable metal parts as per client specifications",
  "Manufactured using stainless steel, aluminum, and other alloys",
  "High precision and tolerance using advanced CNC machining",
  "Suitable for diverse industries including automotive, construction, and machinery",
  "Mass production capabilities with fast turnaround times",
];

const customPartsImages = [
  { src: "/box-strip.png", alt: "Custom Metal Part 1" },
  { src: "/ring-insert.png", alt: "Precision CNC Metal Part" },
  { src: "/nails.png", alt: "Industrial Custom Metal Parts" },
];

export default function CustomMetalPartsPage() {
  return (
    <>
      <Head>
        <title>Custom Metal Parts Manufacturer | Stainless Steel Parts Gujarat</title>
        <meta
          name="description"
          content="Meet Engineering offers fully custom metal parts manufacturing in Gujarat, India. Precision stainless steel and alloy parts tailored for your industrial needs."
        />
        <meta
          name="keywords"
          content="custom metal parts, stainless steel parts manufacturer, CNC machined parts, industrial metal fabrication Gujarat, custom alloy parts India"
        />
        <meta property="og:title" content="Meet Engineering | Custom Metal Parts Manufacturer" />
        <meta
          property="og:description"
          content="High precision custom metal parts manufacturer based in Gujarat, India. Serving automotive, construction, and industrial sectors with reliable fabrication."
        />
        <meta property="og:url" content="https://yourdomain.com/product/custom-metal-parts" />
        <meta property="og:site_name" content="Meet Engineering" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meet Engineering | Custom Metal Parts Manufacturer" />
        <meta
          name="twitter:description"
          content="Premium custom metal parts manufacturing services in Gujarat, India. Precision-engineered stainless steel and alloy parts for various industries."
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
            Custom Metal Parts Manufacturer in Gujarat
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Meet Engineering specializes in manufacturing custom metal parts tailored to your exact specifications, using premium stainless steel and alloys for industrial-grade quality.
          </motion.p>
        </section>

        {/* Images Section */}
        <section className="container mx-auto px-6 py-16 max-w-5xl">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
            Custom Metal Parts Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {customPartsImages.map(({ src, alt }, index) => (
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
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Why Choose Our Custom Metal Parts?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            {customPartsFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Custom Orders & Mass Production</h3>
            <p className="text-gray-700 text-lg max-w-3xl">
              Whether prototype runs or large batch manufacturing, we offer flexible solutions with rapid turnaround times. Our engineering team ensures your metal parts meet precise tolerances and performance standards.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Industries We Serve</h3>
            <p className="text-gray-700 text-lg max-w-3xl">
              Our custom metal parts support automotive, construction, machinery, and commercial sectors across Gujarat and all over India.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-800 text-white py-20 text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Request a Custom Quote</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Have a custom metal part requirement? Contact us today for expert advice and a free quote.
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
