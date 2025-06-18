const TestimonialCard = ({ quote, author, title }) => (
  <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
    <p className="text-gray-300 italic mb-6">&quot;{quote}&quot;</p>
    <div>
      <p className="font-bold text-white">{author}</p>
      <p className="text-teal-400 text-sm">{title}</p>
    </div>
  </div>
);

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <TestimonialCard
            quote="Josiah delivered the project ahead of schedule and the quality was exceptional. The booking system he built has transformed our operations."
            author="Jane Doe"
            title="Manager, Subic Waterfront View Resort"
          />
          <TestimonialCard
            quote="The automation tool built for our payroll saves us hours of manual work every single week. It's reliable, fast, and exactly what we needed."
            author="John Smith"
            title="Operations Head"
          />
        </div>
      </div>
    </section>
  );
}
