"use client";
import React from "react";
import AboutSection from "../components/about";
import { Footer } from "../components/footer";  
import Navbar from "../components/navbar";
import { OurServices } from "../components/ourservices";

const AboutPage = () => {
  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-800 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Precision. Innovation. Commitment. Learn how Meet Engineering redefines steel solutions across industries.
        </p>
      </section>

      {/* Company Overview & Stats */}
      <AboutSection />

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide innovative, reliable, and high-precision engineering solutions that empower industries to achieve optimal performance and growth.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be a global leader in custom steel manufacturing by leveraging technology, sustainability, and a customer-first approach.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Quality", text: "We never compromise on quality. Each product undergoes rigorous inspection and meets international standards." },
              { title: "Innovation", text: "We embrace modern techniques and technologies to stay ahead and deliver cutting-edge solutions." },
              { title: "Integrity", text: "Transparency and honesty are at the core of our operations and client relationships." },
              { title: "Customer Focus", text: "We tailor solutions to meet client-specific requirements and provide end-to-end support." },
              { title: "Teamwork", text: "Collaboration drives our growth. Our team thrives on unity, mutual respect, and shared goals." },
              { title: "Sustainability", text: "We invest in eco-friendly processes and aim for minimal environmental impact." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Our Manufacturing Process</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Requirement Analysis",
            "Design & Prototyping",
            "Precision Manufacturing",
            "Quality Assurance & Delivery"
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-blue-600 mb-2">{idx + 1}</div>
              <div className="text-lg font-medium">{step}</div>
            </div>
          ))}
        </div>
      </section>

      <OurServices/>

      {/* Call to Action */}
      <section className="bg-blue-800 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Let's discuss how we can deliver tailor-made engineering solutions that push your business forward.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-800 font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
        >
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default AboutPage;
