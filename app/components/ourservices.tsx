'use client';
import { motion } from 'framer-motion';
import { Wrench, Ruler, ShieldCheck, Box, Truck, Hammer } from 'lucide-react';

const services = [
  {
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    title: 'Custom Fabrication',
    description: 'We design and build metal components tailored to your exact specifications.',
  },
  {
    icon: <Ruler className="w-8 h-8 text-blue-600" />,
    title: 'Precision Machining',
    description: 'High-accuracy CNC and lathe machining for industrial-grade components.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: 'Quality Testing',
    description: 'Every product undergoes strict quality testing for performance and durability.',
  },
  {
    icon: <Box className="w-8 h-8 text-blue-600" />,
    title: 'Mass Production',
    description: 'Efficient, scalable production lines for high-volume manufacturing needs.',
  },
  {
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    title: 'Logistics & Delivery',
    description: 'Safe and on-time delivery of manufactured products to your location.',
  },
  {
    icon: <Hammer className="w-8 h-8 text-blue-600" />,
    title: 'Assembly & Integration',
    description: 'We assist with final assembly and integration into your systems on request.',
  },
];

export const OurServices = () => {
  return (
    <section className="bg-gray-50 dark:bg-slate-900 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
