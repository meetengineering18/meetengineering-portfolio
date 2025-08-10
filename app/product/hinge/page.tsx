"use client";

import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import { Footer } from "../../components/footer";
import { motion } from "framer-motion";
import Image from "next/image";

const hingeFeatures = [
  "Custom sizes and designs to meet client requirements",
  "Made from premium stainless steel for corrosion resistance",
  "High durability and smooth operation for heavy-duty use",
  "Precision-engineered for consistent quality and fit",
  "Suitable for industrial, commercial, and architectural applications",
];

const hingeImages = [
  { src: "/250mm-hinges.png", alt: "Stainless Steel Hinge 1" },
  { src: "/hinges-1.png", alt: "Stainless Steel Hinge 2" },
  { src: "/hingesss.png", alt: "Custom Industrial Hinge" },
  { src: "/hinges-small.png", alt: "Custom Industrial Hinge" },
  { src: "/hingess.png", alt: "Custom Industrial Hinge" },
  { src: "/door-hinges.png", alt: "Custom Industrial Hinge" },
];

export default function HingePage() {
  return (
    <>
      <Head>
        <title>Stainless Steel Hinges Manufacturer | Custom Hinges in Gujarat</title>
        <meta
          name="description"
          content="Meet Engineering is a leading manufacturer of stainless steel hinges in Gujarat, India. Custom-made hinges for industrial and commercial applications with superior quality and timely delivery."
        />
        <meta
          name="keywords"
          content="hinges manufacturer, stainless steel hinges, custom hinges, industrial hinges Gujarat, door hinges, metal hinges manufacturer, hardware parts Gujarat, precision hinges India"
        />
        <meta property="og:title" content="Meet Engineering | Stainless Steel Hinges Manufacturer" />
        <meta
          property="og:description"
          content="Custom stainless steel hinges manufactured to client specifications in Gujarat, India. Reliable, durable, and designed for industrial use."
        />
        <meta property="og:url" content="https://yourdomain.com/product/hinge" />
        <meta property="og:site_name" content="Meet Engineering" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meet Engineering | Stainless Steel Hinges Manufacturer" />
        <meta
          name="twitter:description"
          content="Premium custom stainless steel hinges manufacturer based in Gujarat, India. Serving industries across India with quality and reliability."
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
            Stainless Steel Hinges Manufacturer in Gujarat
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Meet Engineering provides custom-manufactured stainless steel hinges
            designed to meet the highest industry standards. Durable, reliable, and
            tailored for industrial applications.
          </motion.p>
        </section>

        {/* Images Section */}
        <section className="container mx-auto px-6 py-16 max-w-5xl">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
            Our Hinge Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {hingeImages.map(({ src, alt }, index) => (
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
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">
            Why Choose Our Hinges?
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            {hingeFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Custom Orders & Mass Production</h3>
            <p className="text-gray-700 text-lg max-w-3xl">
              Whether you need a prototype or large-scale production, we accommodate
              all order sizes. Our expert team works closely with you to create hinges
              that match your exact specifications and performance requirements.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Industries We Serve</h3>
            <p className="text-gray-700 text-lg max-w-3xl">
              We supply stainless steel hinges to a variety of industries including
              construction, manufacturing, and commercial hardware sectors
              throughout Gujarat and all over India.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-800 text-white py-20 text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Request a Custom Quote</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Need custom hinges tailored for your project? Contact us today for a free consultation and quote.
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
