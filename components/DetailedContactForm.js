// components/DetailedContactForm.js

'use client';

// A small helper component to keep the form fields consistent
const FormField = ({ label, description, children }) => (
  <div className="space-y-2">
    <label className="block text-base font-semibold text-white">{label}</label>
    {description && <p className="text-sm text-gray-400">{description}</p>}
    {children}
  </div>
);

export default function DetailedContactForm() {
  return (
    <section className="w-full max-w-3xl mx-auto">
      {/* The introductory paragraph has been removed from this component */}
      <form className="space-y-8">
        <FormField
          label="What type of project do you need completed?"
          description="This will help me understand the basic needs of your project and set the right budget and timeline expectations."
        >
          <select className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400">
            <option>Select Project Type</option>
            <option>Web App</option>
            <option>Marketing Website</option>
            <option>Web App Audit</option>
            <option>Website Audit</option>
            <option>Other</option>
          </select>
        </FormField>

        <FormField
          label="Which services do you need?"
          description="Please specify the type level of completion you'd like me to deliver on this project."
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              'Development',
              'Development & Design',
              'Development & Design & SEO',
              'SEO',
              'Other',
            ].map((service) => (
              <div key={service} className="flex items-center">
                <input
                  type="radio"
                  name="project-services"
                  id={service}
                  className="h-4 w-4 text-teal-600 bg-gray-700 border-gray-600 focus:ring-teal-500"
                />
                <label
                  htmlFor={service}
                  className="ml-3 block text-sm text-gray-300"
                >
                  {service}
                </label>
              </div>
            ))}
          </div>
        </FormField>

        <FormField
          label="What's the budget for your project?"
          description="This will help me guide you toward the most appropriate solution within your budget. Consider this a starting point to our conversation, not a final quote."
        >
          <select className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400">
            <option>Select Budget</option>
            <option>Less than $500</option>
            <option>$500 - $1,500</option>
            <option>$1,500 - $5,000</option>
            <option>$5,000 - $20,000</option>
          </select>
        </FormField>

        <FormField
          label="When do you need this project completed?"
          description="Select the option that best expresses your expectations for the timeline of this project."
        >
          <select className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400">
            <option>Select Completion Time</option>
            <option>Less than 1 week</option>
            <option>2-4 weeks</option>
            <option>1-2 months</option>
            <option>3+ months</option>
          </select>
        </FormField>

        <div className="pt-6 border-t border-gray-800 space-y-8">
          <FormField label="Full Name">
            <input
              type="text"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400"
            />
          </FormField>
          <FormField label="Email">
            <input
              type="email"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400"
            />
          </FormField>
          <FormField label="Website URL (optional)">
            <input
              type="url"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400"
            />
          </FormField>
          <FormField label="Your Message">
            <textarea
              rows="6"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400"
            ></textarea>
          </FormField>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-teal-600 text-white text-lg font-bold px-8 py-3 rounded-full hover:bg-teal-700 transition"
          >
            Let's Build Your Website
          </button>
        </div>
      </form>
    </section>
  );
}
