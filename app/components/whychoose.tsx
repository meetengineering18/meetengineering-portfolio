import {
  ShieldCheck,
  Clock,
  Award,
  Wrench,
  Users,
  Building2,
  Lightbulb,
} from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Precision Quality",
    desc: "Every part we make is tested for durability and accuracy to meet top industry standards.",
    descShort: "Tested for durability and accuracy."
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Timely Delivery",
    desc: "We understand deadlines. Our streamlined processes ensure on-time production and delivery.",
    descShort: "We deliver on time, every time."
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: "Trusted Experience",
    desc: "With decades of manufacturing experience, clients rely on us for complex solutions.",
    descShort: "Decades of proven expertise."
  },
  {
    icon: <Wrench className="h-8 w-8 text-blue-600" />,
    title: "Custom Engineering",
    desc: "We tailor parts to your exact specs, whether for prototypes or large-scale production.",
    descShort: "Parts tailored to your needs."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Client-Centric",
    desc: "We prioritize client satisfaction and work closely to understand their evolving needs.",
    descShort: "We put clients first."
  },
  {
    icon: <Building2 className="h-8 w-8 text-blue-600" />,
    title: "In-House Infrastructure",
    desc: "From design to delivery, everything is done under one roof for better control and efficiency.",
    descShort: "Complete in-house control."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
    title: "Innovative Solutions",
    desc: "We solve complex manufacturing challenges with creativity and engineering expertise.",
    descShort: "Creative manufacturing solutions."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Why Choose Us</h2>

        {/* Desktop View */}
        <div className="hidden sm:block">
          {/* First row with 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {reasons.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition transition-transform transform hover:scale-[1.02] duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Second row with 3 cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {reasons.slice(4).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] flex flex-col items-center justify-center text-center hover:shadow-xl transition transition-transform transform hover:scale-[1.02] duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="sm:hidden space-y-4">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 flex items-start gap-4"
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.descShort}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
