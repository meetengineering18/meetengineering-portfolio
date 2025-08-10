const AboutSection = () => {
  return (
    <section className="container relative z-10 mx-auto px-6 sm:px-12 md:px-20 lg:px-28 xl:px-32 py-16 flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl">

        {/* Left side: About Card */}
        <div className="max-w-lg space-y-8">
          <h2 className="text-5xl font-extrabold text-blue-700 leading-tight tracking-tight">
            About Meet Engineering
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Meet Engineering, we combine cutting-edge manufacturing technologies with expert craftsmanship to deliver precision-engineered steel components tailored to your needs. With decades of experience since 20XX, our solutions ensure maximum reliability and performance for industrial and commercial projects.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our advanced processes guarantee tight tolerances, superior strength, and consistent quality—whether it’s a single prototype or large-scale production.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Partner with us for innovative, scalable, and timely manufacturing solutions designed to propel your business forward.
          </p>
        </div>

        {/* Right side: Stats cards */}
        <div className="w-full grid grid-cols-2 gap-8 max-w-md">
          <StatCard title="Clients" value="150+" icon="🤝" />
          <StatCard title="Products" value="1200+" icon="🛠️" />
          <StatCard title="Years Since" value="20+" icon="⏳" />
          <StatCard title="Projects" value="350+" icon="📦" />
        </div>
      </div>
    </section>
  )
}

type StatCardProps = {
  title: string;
  value: string | number;
  icon?: string;
};

const StatCard = ({ title, value, icon }: StatCardProps) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-shadow duration-300 cursor-default select-none">
    <div className="text-5xl mb-4">{icon}</div>
    <div className="text-4xl font-extrabold text-blue-700 mb-2">{value}</div>
    <div className="text-gray-600 uppercase tracking-widest text-sm">{title}</div>
  </div>
);

export default AboutSection;
