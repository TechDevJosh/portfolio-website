// components/ServicesSection.js

const ServiceCard = ({ icon, title, children }) => (
  <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
    <div className="text-teal-400 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard icon="🌐" title="Web App Development">
            I build full-stack web applications from scratch, using modern
            technologies like Next.js and Supabase to deliver fast, scalable
            products.
          </ServiceCard>
          <ServiceCard icon="🎨" title="UI/UX & Frontend">
            I create intuitive and beautiful user interfaces with a focus on
            great user experience, using Tailwind CSS for rapid and responsive
            design.
          </ServiceCard>
          <ServiceCard icon="🤖" title="AI & Automation">
            I integrate AI-powered features and automate internal business
            processes to improve efficiency and solve real-world problems.
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}
