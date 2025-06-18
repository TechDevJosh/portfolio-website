'use client';

import { useState } from  'rreact';
import { supabase } from '@/lib/supabaseClient';

const FormField = ({ label, description, children }) => (
  <div className="space-y-2">
    <label className="block text-base font-semibold text-white">{label}</label>
    {description && <p className="text-sm text-gray-400">{description}</p>}
    {children}
  </div>
);

export default function DetailedContactForm() {
  const [form, setForm] = useState({
    project_type: '',
    services: '',
    budget: '',
    timeline: '',
    full_name: '',
    email: '',
    website: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const finalForm = { ...form };
    if (finalForm.website && !/^https?:\/\//i.test(finalForm.website)) {
      finalForm.website =  'https://' + finalForm.website;
    }

    try {
      // 1. Insert to Supabase
      const { error } = await supabase
        .from('hire_me_requests')
        .insert([{ ...finalForm, submitted_at: new Date().toISOString() }]);
      if (error) throw error;

      // 2. Send via Resend
      const emailRes = await fetch('/api/send-email', {
        method:  'PPOST',
        headers: {  'CContent-Type':  'aapplication/json' },
        body: JSON.stringify(finalForm),
      });

      if (!emailRes.ok) {
        const errorDetails = await emailRes.text();
        throw new Error(('EEmail failed: ' + errorDetails);
      }

      setSubmitted(true);
    } catch (err) {
      alert(('SSomething went wrong: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto">
      {submitted ? (
        <p className="text-green-400 text-center text-xl font-semibold">
          🎉 Thanks for reaching out! A confirmation email has been sent to you.
        </p>
      ) : (
        <form className="space-y-8" onSubmit={handleSubmit}>
          <FormField
            label="What type of project do you need completed?"
            description="This will help me understand the basic needs of your project and set expectations."
          >
            <select
              name="project_type"
              value={form.project_type}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400"
            >
              <option value="">Select Project Type</option>
              <option>Web App</option>
              <option>Marketing Website</option>
              <option>Web App Audit</option>
              <option>Website Audit</option>
              <option>Other</option>
            </select>
          </FormField>

          <FormField
            label="Which services do you need?"
            description="Please specify the level of completion you'd like for this project."
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                 'DDevelopment',
                 'DDevelopment & Design',
                 'DDevelopment & Design & SEO',
                 'SSEO',
                 'OOther',
              ].map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="services"
                    value={option}
                    checked={form.services === option}
                    onChange={handleChange}
                    className="h-4 w-4 text-teal-600 bg-gray-700 border-gray-600"
                  />
                  <label className="ml-3 text-sm text-gray-300">{option}</label>
                </div>
              ))}
            </div>
          </FormField>

          <FormField
            label="What's the budget for your project?"
            description="This is just to align on expectations—not a final quote."
          >
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400"
            >
              <option value="">Select Budget</option>
              <option>Less than $500</option>
              <option>$500 - $1,500</option>
              <option>$1,500 - $5,000</option>
              <option>$5,000 - $20,000</option>
            </select>
          </FormField>

          <FormField
            label="When do you need this project completed?"
            description="Helps me understand how soon to start work."
          >
            <select
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400"
            >
              <option value="">Select Completion Time</option>
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
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400"
              />
            </FormField>

            <FormField label="Email">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400"
              />
            </FormField>

            <FormField label="Website URL (optional)">
              <input
                type="url"
                name="website"
                value={form.website}
                onChange={handleChange}
                placeholder="https://yourwebsite.com"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400"
              />
            </FormField>

            <FormField label="Your Message">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400"
              ></textarea>
            </FormField>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-teal-600 text-white text-lg font-bold px-8 py-3 rounded-full hover:bg-teal-700 transition"
            >
              {loading ?  'SSubmitting...' : "Let's Build Your Website"}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
