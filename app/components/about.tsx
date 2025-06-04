const AboutSection = () => {
  
  return (
    
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left side: About Card */}
        <div className="max-w-lg">
          <h2 className="!text-5xl font-bold !text-blue-800 !mb-6">About Meet Engineering</h2>
          <p className="text-gray-700 dark:text-gray-600 text-lg leading-relaxed mb-4">
            At Meet Engineering, we combine cutting-edge manufacturing technologies with expert craftsmanship to deliver precision-engineered steel components tailored to your needs. With decades of experience since 20XX, our solutions ensure maximum reliability and performance for industrial and commercial projects.
          </p>
          <p className="text-gray-700 dark:text-gray-600 text-lg leading-relaxed mb-4">
            Our advanced processes guarantee tight tolerances, superior strength, and consistent quality—whether it’s a single prototype or large-scale production.
          </p>
          <p className="text-gray-700 dark:text-gray-600 text-lg leading-relaxed">
            Partner with us for innovative, scalable, and timely manufacturing solutions designed to propel your business forward.
          </p>
        </div>

        {/* Right side: Stats cards */}
<div className="w-full h-full">
  <div className="grid grid-cols-2 gap-6 h-full">
    <StatCard title="Clients" value="150+" />
    <StatCard title="Products" value="1200+" />
    <StatCard title="Years Since" value="20+" />
    <StatCard title="Projects" value="350+" />
  </div>
</div>


      </div>
    </section>
  )
}


type StatCardProps = {
  title: string;
  value: string | number;
};

const StatCard = ({ title, value }: StatCardProps) => (
  <div className="w-full h-full bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center">
    <div className="text-4xl font-extrabold text-blue-600 mb-2">{value}</div>
    <div className="text-gray-600 dark:text-gray-400 uppercase tracking-widest">{title}</div>
  </div>
);



export default AboutSection;
