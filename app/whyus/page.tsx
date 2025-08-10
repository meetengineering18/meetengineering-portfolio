"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Award,
  Wrench,
  Users,
  Building2,
  Lightbulb,
} from "lucide-react";
import Navbar from "../components/navbar";
import { Footer } from "../components/footer";
import { OurServices } from "../components/ourservices";

const reasons = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
    title: "Precision Quality",
    desc: "We use advanced machinery and strict quality protocols to ensure every part is engineered to exact specifications, passing multiple layers of inspection.",
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    title: "Timely Delivery",
    desc: "Our workflow is optimized with lean practices and smart inventory systems, so your projects stay on schedule without compromising quality.",
  },
  {
    icon: <Award className="h-10 w-10 text-blue-600" />,
    title: "Trusted Experience",
    desc: "With over 20+ years in precision steel fabrication, our team has solved diverse engineering challenges across sectors like construction, automotive, and machinery.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-blue-600" />,
    title: "Custom Engineering",
    desc: "From CAD design to final delivery, we work with clients to prototype, test, and refine solutions tailored to their unique functional needs.",
  },
  {
    icon: <Users className="h-10 w-10 text-blue-600" />,
    title: "Client-Centric Approach",
    desc: "We treat every client like a partner—listening, communicating clearly, and adapting to evolving project requirements throughout the journey.",
  },
  {
    icon: <Building2 className="h-10 w-10 text-blue-600" />,
    title: "In-House Infrastructure",
    desc: "With CNC machines, laser cutters, welding bays, and a dedicated design team all in-house, we maintain full control over timelines and quality.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-blue-600" />,
    title: "Innovative Solutions",
    desc: "Whether it's reducing material waste, enhancing strength-to-weight ratio, or integrating new alloys, our engineers think ahead to build smarter.",
  },
];

const WhyUsPage = () => {
  return (
    <>
      <Head>
        <title>Meet Engineering | Custom Steel Parts Manufacturer in Gujarat, India</title>
        <meta
          name="description"
          content="Meet Engineering specializes in precision manufacturing of custom stainless steel parts, hinges, and hardware for industrial clients across Gujarat and India."
        />
        <meta
          name="keywords"
          content="hinges manufacturer, custom steel parts, stainless steel parts Gujarat, industrial metal parts India, mass production steel components, steel hardware supplier, custom metal fabrication Gujarat, precision steel fabrication, industrial hinges manufacturer, metal parts supplier India"
        />
        <meta property="og:title" content="Meet Engineering | Custom Steel Parts Manufacturer" />
        <meta
          property="og:description"
          content="Delivering high-quality, custom-engineered stainless steel parts and hinges to industries across Gujarat and India."
        />
        <meta property="og:url" content="https://yourdomain.com/why-us" />
        <meta property="og:site_name" content="Meet Engineering" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meet Engineering | Custom Steel Parts Manufacturer" />
        <meta
          name="twitter:description"
          content="Precision custom stainless steel parts and hinges manufactured in Gujarat for industrial clients across India."
        />
      </Head>
      <main className="bg-gray-50 min-h-screen text-gray-800">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-20 text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Why Choose Meet Engineering
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            We don't just manufacture steel components — we engineer reliability, precision, and trust. Here's what makes us the preferred partner for industries across India and beyond.
          </motion.p>
        </section>

        {/* Intro Text Section */}
        <section className="container mx-auto px-6 py-16 max-w-5xl">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              A Legacy Built on Excellence
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded in the early 2000s, Meet Engineering has become a one-stop destination for industries seeking high-quality custom-fabricated steel products. From architectural frames to precision gear housings, our work powers structures, machines, and innovations across sectors.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              What sets us apart is not just our infrastructure, but our mindset—each project is approached with a commitment to engineer beyond expectations. Our skilled workforce, modern machinery, and agile production lines empower us to deliver exceptional outcomes, time and again.
            </p>
          </motion.div>
        </section>

        {/* Cards Section */}
        <section className="container mx-auto px-6 py-10">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">Our Core Strengths</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <OurServices />

        {/* Call to Action */}
        <section className="bg-blue-800 text-white py-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Have a Custom Requirement?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              From initial sketch to final delivery, Meet Engineering brings your vision to life with technical precision and integrity.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-800 font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
            >
              Get in Touch
            </a>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default WhyUsPage;
