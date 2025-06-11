// components/FinalCTA.js

import ContactSection from './ContactSection';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 max-w-3xl mx-auto">
          Ready to Transform Your Business? <br />
          <span className="text-teal-400">
            Let&apos;s Build Your AI-Powered Solution.
          </span>
        </h2>

        {/* We are reusing the ContactSection component you already have */}
        <ContactSection />
      </div>
    </section>
  );
}
