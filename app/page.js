'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/*
  IMPORTANT SEO & METADATA NOTES:
  To finalize the site's polish and ensure it looks great when shared online,
  please update your `app/layout.js` file with the following metadata.

  1. In your `app` directory, open `layout.js`.
  2. Replace the existing `metadata` export with this:

  // --- Start of code for app/layout.js ---
  export const metadata = {
    title: 'Expert Web Design & Development in the Philippines | WeblitzStack',
    description: 'WeblitzStack offers custom web design, e-commerce solutions, and web application development for businesses in Olongapo and the Philippines. Get a quote today!',
    openGraph: {
      title: 'Expert Web Design & Development in the Philippines | WeblitzStack',
      description: 'High-performance, lead-generating websites for businesses in Olongapo and beyond.',
      url: 'https://weblitzstack.com',
      siteName: 'WeblitzStack',
      images: [
        {
          url: 'https://weblitzstack.com/og-image.jpg', // Replace with your actual OG image URL
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
  // --- End of code for app/layout.js ---
*/

// --- SVG Icon Components ---
const CheckCircle = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ArrowRight = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ChevronDown = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ClockIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const Github = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

// --- Reusable Components ---
const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link
        href="/"
        className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-lime-400 text-transparent bg-clip-text"
      >
        WeblitzStack
      </Link>
      <nav className="hidden md:flex items-center space-x-6">
        <Link
          href="#services"
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          Services
        </Link>
        <Link
          href="#work"
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          Our Work
        </Link>
        <Link
          href="#pricing"
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          Pricing
        </Link>
        <Link
          href="#about"
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          About
        </Link>
        <Link
          href="#contact"
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          Contact
        </Link>
      </nav>
      <Link
        href="https://launch.weblitzstack.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-block bg-teal-600 text-white font-bold px-6 py-2 rounded-full hover:bg-teal-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-teal-400"
      >
        Get a Quote
      </Link>
      <button className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>
  </header>
);

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          &copy; {year} WeblitzStack. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

const TechIcon = ({ src, name }) => (
  <div className="group flex flex-col items-center justify-center gap-2 p-4 bg-gray-800 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-teal-500/10">
    <div className="w-12 h-12 flex items-center justify-center">
      <Image
        src={src}
        alt={`${name} logo`}
        width={48}
        height={48}
        className="object-contain transition-transform duration-300 group-hover:scale-110"
        unoptimized
      />
    </div>
    <span className="text-sm font-semibold text-gray-300 text-center">
      {name}
    </span>
  </div>
);

// --- Page Sections ---
const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center text-center bg-gray-900 pt-24"
    style={{
      background:
        'radial-gradient(ellipse at bottom, #111827 0%, #000000 100%)',
    }}
  >
    <div className="max-w-5xl px-6">
      <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold text-white leading-tight mb-6">
        Expert{' '}
        <span className="bg-gradient-to-r from-teal-400 to-lime-400 text-transparent bg-clip-text">
          Web Design
        </span>{' '}
        & Development in the Philippines
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
        We build high-performance, lead-generating websites for businesses in
        Olongapo and beyond. From custom e-commerce stores to AI-powered web
        applications, we bring your ideas to life.
      </p>
      <div className="flex justify-center items-center gap-4">
        <Link
          href="#pricing"
          className="inline-block bg-teal-600 text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-teal-400"
        >
          View Our Plans
        </Link>
      </div>
    </div>
  </section>
);

const ServicesSection = () => {
  const services = [
    {
      title: 'Custom Web Design & Development',
      description:
        'From corporate websites to promotional landing pages, we build bespoke, responsive websites tailored to your brand.',
    },
    {
      title: 'E-commerce Solutions',
      description:
        'Tap into the booming Philippine e-commerce market with a powerful, secure, and user-friendly online store.',
    },
    {
      title: 'Web Application Development',
      description:
        'Automate your processes and improve efficiency with custom web-based applications and software.',
    },
    {
      title: 'Beyond WordPress: The Custom-Code Advantage',
      description:
        'While many are familiar with WordPress, our custom-coded solutions offer superior performance, security, and unlimited scalability, free from the constraints of templates and plugins.',
    },
    {
      title: 'UI/UX Design',
      description:
        'We craft intuitive and beautiful user interfaces that provide a seamless user experience and drive engagement.',
    },
    {
      title: 'Website Maintenance & Support',
      description:
        'Keep your website secure, fast, and up-to-date with our ongoing maintenance and support packages.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold text-center mb-4">
          Our Web Development Services
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          We offer a complete suite of web development services to bring your
          vision from concept to launch.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-800 p-8 rounded-lg border border-transparent hover:border-teal-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-teal-400">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ModernStacksSection = () => {
  const stacks = [
    {
      name: 'Next.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'React',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      name: 'Node.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Tailwind CSS',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      name: 'HTML5',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    },
    {
      name: 'Supabase',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
    },
    {
      name: 'Vercel',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
    },
    {
      name: 'GitHub',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    },
    {
      name: 'VS Code',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    },
    {
      name: 'ChatGPT',
      src: 'https://cdn.worldvectorlogo.com/logos/chatgpt-4.svg',
    },
    {
      name: 'Gemini',
      src: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg',
    },
    { name: 'Claude', src: '/claude-color.png' },
    { name: 'Perplexity', src: '/perplexity.webp' },
    { name: 'Resend', src: '/resend.png' },
    {
      name: 'Namecheap',
      src: 'https://cdn.worldvectorlogo.com/logos/namecheap.svg',
    },
    {
      name: 'NPM',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-[clamp(2rem,6vw,3rem)] font-bold text-white mb-4">
          Our Technology & Tools
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Leveraging cutting-edge AI and robust technologies to deliver powerful
          solutions.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-6 md:gap-8">
          {stacks.map((stack) => (
            <TechIcon key={stack.name} {...stack} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-20 bg-gray-800/50">
    <div className="container mx-auto px-6 max-w-6xl">
      <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold text-center mb-4">
        Your Web Development Partner in the Philippines
      </h2>
      <span className="block w-20 h-1 bg-teal-500 rounded-full mx-auto mb-12"></span>
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div className="p-1.5 rounded-full bg-gradient-to-r from-teal-400 to-lime-400 inline-block shadow-2xl transition-all duration-300 ease-in-out hover:scale-105">
            <Image
              src="/founder.jpg"
              alt="Josiah Manzano, Founder of WeblitzStack"
              width={300}
              height={300}
              priority
              className="rounded-full object-cover w-[250px] h-[250px] md:w-[288px] md:h-[288px]"
            />
          </div>
        </div>
        <div className="md:col-span-2 text-gray-300 space-y-6 text-lg">
          <p>
            I&apos;m Josiah Manzano — the founder of WeblitzStack, a full-stack
            web development agency based in Subic, Philippines. We specialize in
            custom web design and e-commerce solutions that solve real business
            problems.
          </p>
          <p>
            My journey into tech wasn&apos;t in a classroom. I taught myself to
            code, debug, and deploy by combining relentless curiosity with
            cutting-edge AI. From managing hospitality operations to automating
            payroll, I’ve applied technology where it matters most—on the
            ground, with real users, under real pressure.
          </p>
          <p>
            As your web development partner, I build fast, iterate smart, and
            deliver solutions that are as elegant as they are effective.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const WorkSection = ({ projects }) => (
  <section id="work" className="py-20 bg-gray-900">
    <div className="container mx-auto px-6">
      <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold text-center mb-4">
        Our Work
      </h2>
      <span className="block w-20 h-1 bg-teal-500 rounded-full mx-auto mb-12"></span>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden group transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-900/40"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-700 text-teal-400 text-xs font-semibold px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center group-hover:text-lime-400 transition-colors duration-300"
              >
                View Project{' '}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const tiers = {
    monthly: [
      {
        name: 'Standard',
        price: { setup: 'P5,000', monthly: 'P500' },
        ideal:
          'For local businesses & startups needing a professional online presence.',
        timeline: '7-10 Days',
        features: [
          '4 essential pages',
          'CMS for easy updates',
          'Fully managed hosting & database',
          'Domain & renewal included',
          'Mobile responsive',
          'Basic SEO',
          'HTTPS/SSL security',
          'Google Analytics',
          'Free yearly refresh',
        ],
        cta: 'Choose Standard',
      },
      {
        name: 'Plus',
        price: { setup: 'P15,000', monthly: 'P1,000' },
        ideal:
          'For clinics and service providers ready to scale and generate leads.',
        timeline: '11-21 Days',
        features: [
          'Everything in Standard',
          'Up to 8 total pages',
          'Blog setup (CMS-enabled)',
          'Inquiry/booking forms',
          'Testimonials carousel',
          'WhatsApp/FB Messenger chat',
          '1 monthly content upload',
          'Priority tech support',
          'Quarterly reports',
        ],
        cta: 'Choose Plus',
        popular: true,
      },
      {
        name: 'Pro',
        price: { setup: 'P30,000', monthly: 'P2,000' },
        ideal: 'For growing businesses focused on conversions and automation.',
        timeline: '21-30 Days',
        features: [
          'Everything in Plus',
          'AI chatbot assistant',
          'Custom quote/survey forms',
          'Online payment integration',
          'Advanced animations',
          'Social media feed integrations',
          '3 monthly content uploads',
          'Monthly SEO & analytics reports',
          'Admin training session',
        ],
        cta: 'Choose Pro',
      },
    ],
    annual: [
      {
        name: 'Standard',
        price: { annual: 'P10,000' },
        ideal: 'For businesses wanting a one-time payment.',
        timeline: '7-10 Days',
        features: ['All Standard features', '1 Year of Maintenance & Support'],
        cta: 'Go Annual',
      },
      {
        name: 'Plus',
        price: { annual: 'P25,000' },
        ideal: 'Best value for growing businesses.',
        timeline: '11-21 Days',
        features: ['All Plus features', '1 Year of Maintenance & Support'],
        cta: 'Go Annual',
        popular: true,
      },
      {
        name: 'Pro',
        price: { annual: 'P50,000' },
        ideal: 'For businesses seeking long-term value.',
        timeline: '21-30 Days',
        features: ['All Pro features', '1 Year of Maintenance & Support'],
        cta: 'Go Annual',
      },
    ],
  };

  const rushOptions = [
    { tier: 'Standard', time: '3 Days', cost: '+ P4,000' },
    { tier: 'Plus', time: '7 Days', cost: '+ P10,000' },
    { tier: 'Pro', time: '14 Days', cost: '+ P20,000' },
  ];

  const currentTiers = tiers[billingCycle];

  return (
    <section id="pricing" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold text-center mb-4">
          Web Design Pricing in the Philippines
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Choose a plan that scales with you. No hidden fees.
        </p>

        <div className="flex justify-center mb-10">
          <div className="bg-gray-800 p-1 rounded-full flex items-center border border-gray-700">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-teal-600 text-white shadow-md' : 'text-gray-400'}`}
            >
              Monthly Subscription
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${billingCycle === 'annual' ? 'bg-teal-600 text-white shadow-md' : 'text-gray-400'}`}
            >
              One-Time Payment
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTiers.map((tier) => (
            <div
              key={tier.name}
              className={`border ${tier.popular ? 'border-teal-500 shadow-lg shadow-teal-900/30' : 'border-gray-700'} rounded-lg p-6 flex flex-col relative bg-gray-900 transition-all duration-300 hover:border-teal-400/70 hover:scale-[1.02]`}
            >
              {tier.popular && (
                <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full absolute -top-4 right-6">
                  POPULAR
                </span>
              )}
              <h3 className="text-2xl font-bold text-center mb-2">
                {tier.name}
              </h3>
              <p className="text-gray-400 text-center text-sm h-10">
                {tier.ideal}
              </p>

              <div className="text-center my-6">
                {billingCycle === 'monthly' ? (
                  <>
                    <span className="text-4xl font-extrabold">
                      {tier.price.setup}
                    </span>
                    <span className="text-lg text-gray-400"> setup</span>
                    <p className="text-xl font-bold mt-1">
                      {tier.price.monthly}
                      <span className="text-base font-normal text-gray-400">
                        /month
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-extrabold">
                      {tier.price.annual}
                    </span>
                    <p className="text-base font-normal text-gray-400 mt-1">
                      One-Time Payment
                    </p>
                  </>
                )}
              </div>

              <div className="flex items-center justify-center text-sm text-gray-400 mb-6">
                <ClockIcon className="w-4 h-4 mr-2" />
                <span>Est. Delivery: {tier.timeline}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`w-full text-center font-bold py-3 rounded-lg transition-all duration-300 ease-in-out transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 ${tier.popular ? 'bg-teal-600 text-white hover:bg-teal-700 hover:scale-105' : 'bg-gray-700 hover:bg-gray-600'}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-4">Need It Faster?</h3>
          <p className="text-gray-300 mb-8">
            Choose an expedited delivery option for your project.
          </p>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
            {rushOptions.map((option) => (
              <div
                key={option.tier}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <h4 className="font-bold text-lg text-teal-400">
                  {option.tier} Tier
                </h4>
                <p className="text-3xl font-bold my-2">{option.time}</p>
                <p className="text-gray-400">{option.cost}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How much does a website cost in the Philippines?',
      answer:
        "Website costs vary based on complexity. Our 'Standard' plan starts at P5,000 for setup + P500/month, which is ideal for a basic 5-page site. E-commerce and custom web applications will have different pricing. We offer detailed quotes after a consultation.",
    },
    {
      question: 'What is your web design process?',
      answer:
        'Our process is collaborative. We start with a discovery call to understand your goals, followed by UI/UX design and mockups. Once the design is approved, we move to development, testing, and finally, launch. We keep you updated at every stage.',
    },
    {
      question: 'Do you offer e-commerce website development?',
      answer:
        'Yes, we specialize in e-commerce development. We can build powerful online stores or create completely custom e-commerce web applications to fit your business needs.',
    },
    {
      question: 'Can you make my website appear on Google?',
      answer:
        'Yes, all our website packages include basic SEO (Search Engine Optimization) to help you get started. We ensure your site is built with SEO best practices to improve its visibility on search engines like Google.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left p-6"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-teal-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out grid ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-20 bg-gray-800/50">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold mb-4">
        Ready to Start Your Project?
      </h2>
      <span className="block w-20 h-1 bg-teal-500 rounded-full mx-auto mb-10"></span>
      <p className="text-gray-300 text-lg mb-8">
        Let's connect. Whether you have a question or a project proposal,
        I&aposm here to help you build the future of your business.
      </p>
      <a
        href="mailto:josiah@weblitzstack.com"
        className="inline-block bg-teal-600 text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-teal-400"
      >
        Get In Touch
      </a>
    </div>
  </section>
);

// --- Main Page Component ---
export default function Home() {
  const yourProjects = [
    {
      title: 'WeblitzStack Instant Quoter',
      description:
        'An online tool for getting instant website quotations, streamlining the initial client consultation process.',
      imageUrl: '/launchweblitz.jpg',
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'Zustand', 'Vercel'],
      liveUrl: 'https://launch.weblitzstack.com',
    },
    {
      title: 'Casa Brillantes Airbnb',
      description:
        'A website for an Airbnb property in Subic, Zambales. Currently under active development.',
      imageUrl: '/casabrillantes.jpg',
      techStack: ['Next.js', 'Tailwind CSS', 'Supabase', 'Vercel'],
      liveUrl: 'https://casa-brillantes.vercel.app/',
    },
    {
      title: 'Subic Waterfront Resort Website',
      description:
        'A visually striking resort website featuring a full-screen, scroll-snapping interface and a booking modal.',
      imageUrl: '/SubicWaterfrontHero.png',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
    },
    {
      title: 'Upwork-Style Sales Landing Page',
      description:
        'A comprehensive sales page designed to convert, featuring multiple interactive sections and animations.',
      imageUrl: '/Upwork.png',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
      liveUrl: '/upwork-sample',
    },
  ];

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkSection projects={yourProjects} />
        <ModernStacksSection />
        <PricingSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
