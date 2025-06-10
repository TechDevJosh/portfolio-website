import Navbar from '@/components/Navbar'

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-teal-700 mb-4">My Recent Projects & Achievements</h2>
          <p className="text-center text-gray-700 mb-12">
            Here's a glimpse of the impactful solutions I've delivered.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Interactive SEO Landing Page',
                desc: 'Designed and coded a responsive, SEO-optimized landing page with interactive JS components.',
                tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'UX/UI'],
                img: 'https://placehold.co/400x250/2A9D8F/FFFFFF?text=SEO+Landing+Page',
              },
              {
                title: 'AI-Powered Policy Integration',
                desc: 'Transformed 300+ unstructured resort policies into searchable guides using GPT-4.',
                tags: ['GPT-4', 'Prompt Engineering', 'Process Automation'],
                img: 'https://placehold.co/400x250/264653/FFFFFF?text=AI+Policy+System',
              },
              {
                title: 'Facebook Ad Revenue Optimization',
                desc: 'Generated PHP 40M+ in sales through Facebook Ads and CRM systems.',
                tags: ['Facebook Ads', 'CRM', 'Lead Generation', 'Sales'],
                img: 'https://placehold.co/400x250/F4A261/202124?text=FB+Ad+Revenue',
              },
              {
                title: 'Property Cost Reduction',
                desc: 'Cut monthly costs from PHP 55K to 28.5K via vendor negotiations and system upgrades.',
                tags: ['Cost Optimization', 'Vendor Management', 'Operations'],
                img: 'https://placehold.co/400x250/E9C46A/202124?text=Cost+Reduction',
              },
              {
                title: 'OCR VAT Compliance Tool (In Dev)',
                desc: 'Developing an OCR + GPT tool for BIR-compliant VAT receipt extraction.',
                tags: ['AI', 'OCR', 'Python', 'Compliance'],
                img: 'https://placehold.co/400x250/e76f51/FFFFFF?text=OCR+VAT+Tool',
              },
              {
                title: 'Automated Transcription System',
                desc: 'Created OpenAI Whisper-based tool for accurate audio-to-text conversion.',
                tags: ['OpenAI Whisper', 'Automation', 'Communication'],
                img: 'https://placehold.co/400x250/2A9D8F/FFFFFF?text=Transcription+System',
              },
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition transform hover:-translate-y-1">
                <img src={project.img} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-teal-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-teal-700 text-xs font-semibold px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
