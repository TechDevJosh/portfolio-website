// components/ExperienceSection.js

const ExperienceItem = ({ role, company, duration, children }) => (
  <div className="relative pl-10 border-l-2 border-teal-400 pb-10 last:border-l-transparent last:pb-0">
    <div className="absolute -left-2.5 top-0 w-5 h-5 bg-gray-900 border-4 border-teal-400 rounded-full"></div>
    <p className="text-sm text-gray-500 mb-1">{duration}</p>
    <h3 className="text-xl font-bold">{role}</h3>
    <p className="text-teal-400 font-semibold mb-4">{company}</p>
    <div className="text-gray-400 space-y-3">{children}</div>
  </div>
);

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div>
          <ExperienceItem
            role="Full-Stack Developer & Founder"
            company="Weblitzstack.com"
            duration="2025 - Present"
          >
            <p>
              Leading the development of modern, AI-powered web solutions for
              clients, focusing on performance, scalability, and solving
              real-world business problems.
            </p>
          </ExperienceItem>
          <ExperienceItem
            role="AI Consultant & Executive Assistant"
            company="Subic Waterfront View Resort Inc. | Subic, Philippines"
            duration="2020 - Present"
          >
            <ul className="list-disc pl-5 space-y-1">
              <li>Promoted from Admin to AI Consultant within 12 months.</li>
              <li>
                Integrated 300+ operational memos into a structured, searchable
                knowledge base using GPT.
              </li>
              <li>
                Designed and developed an automated payroll assistant tool and
                AI-powered guest query responses.
              </li>
            </ul>
          </ExperienceItem>
          <ExperienceItem
            role="Remote Sales & Digital Marketing Specialist"
            company="Fiesta Communities Inc. | Remote"
            duration="2023 - Present"
          >
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Generated over PHP 40M+ in sales revenue through strategic
                Facebook Ads and CRM optimization.
              </li>
              <li>
                Consistently exceeded monthly sales targets by up to 200%.
              </li>
            </ul>
          </ExperienceItem>
          <ExperienceItem
            role="Property Manager"
            company="SNCC Realty | Olongapo City, Philippines"
            duration="2023 - Present"
          >
            <ul className="list-disc pl-5 space-y-1">
              <li>Managed a portfolio of 4 commercial properties.</li>
              <li>
                Achieved 50% operational cost reduction through strategic vendor
                negotiations.
              </li>
            </ul>
          </ExperienceItem>
        </div>
      </div>
    </section>
  );
}
