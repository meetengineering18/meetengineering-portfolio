"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export const GetAQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    comment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post("/api/inquiry", formData)
      .then(() => {
        alert("Quote request submitted!");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-blue-800">Request a Quote</h3>

      <div>
        <label className="block text-sm font-medium mb-1  text-blue-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-gray-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-blue-700">Phone No</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          maxLength={10}
          pattern="[0-9]{10}"
          className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-gray-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1  text-blue-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-gray-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1  text-blue-700">Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-gray-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1  text-blue-700">Message / Requirements</label>
        <textarea
          name="comment"
          rows={4}
          value={formData.comment}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-gray-900"
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
