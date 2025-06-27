import React from 'react';
import { Trees, Building2, Car, Utensils, Music, Shield, Wifi, Camera } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Trees,
      title: "Lush Green Lawn",
      description: "2000 sq ft of beautifully maintained lawn area perfect for outdoor ceremonies and celebrations",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Building2,
      title: "AC Banquet Hall",
      description: "Spacious air-conditioned hall accommodating up to 1000 guests with modern amenities",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Car,
      title: "Ample Parking",
      description: "Convenient parking space for 200+ vehicles ensuring hassle-free access for all guests",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Professional catering with diverse menu options to suit all tastes and dietary requirements",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Music,
      title: "Sound & Lighting",
      description: "State-of-the-art audio-visual equipment and professional lighting for perfect ambiance",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security services ensuring the safety of your guests and belongings",
      color: "from-gray-500 to-slate-600"
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet connectivity throughout the venue",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: Camera,
      title: "Photography Support",
      description: "Dedicated spaces and lighting setups perfect for professional photography and videography",
      color: "from-amber-500 to-yellow-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes Chhaya Party Plot the perfect choice for your special occasions. 
            Every detail is designed to create unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need Under One Roof
          </h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we provide comprehensive solutions 
            to make your event seamless and memorable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-6 py-3 rounded-full text-sm font-medium">Weddings</span>
            <span className="bg-white/20 px-6 py-3 rounded-full text-sm font-medium">Birthday Parties</span>
            <span className="bg-white/20 px-6 py-3 rounded-full text-sm font-medium">Corporate Events</span>
            <span className="bg-white/20 px-6 py-3 rounded-full text-sm font-medium">Get-togethers</span>
            <span className="bg-white/20 px-6 py-3 rounded-full text-sm font-medium">Conferences</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;