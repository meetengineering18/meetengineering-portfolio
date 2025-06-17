"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export const GetAQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, integrate with backend or email API
    alert("Quote request submitted!");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-blue-800">Request a Quote</h3>

      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 dark:bg-slate-700 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 dark:bg-slate-700 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 dark:bg-slate-700 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message / Requirements</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 dark:bg-slate-700 dark:text-white"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded font-semibold transition"
      >
        Submit Request
      </button>
    </motion.form>
  );
};
