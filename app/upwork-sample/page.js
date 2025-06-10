// app/upwork-sample/page.js
'use client';

import Navbar from '@/components/Navbar';

export default function UpworkSamplePage() {
  return (
    <div className="bg-gray-900">
      <Navbar />

      {/* This main container is pushed down from the top to avoid the navbar (pt-20).
        It's also set up as a full-height flex container so we can position the banner and iframe.
      */}
      <main className="pt-20 h-screen flex flex-col">
        {/* The banner you requested */}
        <div className="text-center p-3 bg-yellow-300 text-black font-semibold flex-shrink-0">
          <p>
            This is a sample landing page built to demonstrate SEO and
            interactive features. The branding and content below belong to
            Upwork.
          </p>
        </div>

        {/* The iframe now grows to fill all remaining space */}
        <iframe
          src="/Upwork Sample Landing Sales Page.html"
          title="Upwork Sample Landing Sales Page"
          className="w-full h-full border-none flex-grow"
        />
      </main>
    </div>
  );
}
