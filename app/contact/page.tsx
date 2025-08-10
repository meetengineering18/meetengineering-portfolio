'use client';
import { motion } from 'framer-motion';
import { GetAQuoteForm } from '../components/GetAQuoteForm';
import Navbar from '../components/navbar';
import { Footer } from '../components/footer';

const Contact = () => {
  return (
    <main className="bg-gray-50 min-h-screen text-gray-800">
      <Navbar />

      {/* Header */}
      <section className="bg-blue-800 text-white py-20 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          We’re here to discuss your project, provide solutions, and ensure your components are built to last.
        </motion.p>
      </section>

      {/* Form Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <GetAQuoteForm />
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
