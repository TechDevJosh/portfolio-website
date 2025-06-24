import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-500 space-y-2">
        <p>
          102 St. James Subd., Brgy. Calapacuan, Subic, Zambales, Philippines
        </p>
        <p className="flex justify-center items-center gap-2">
          <a
            href="mailto:josiah@weblitzstack.com"
            aria-label="Email josiah@weblitzstack.com"
            className="hover:text-white"
          >
            <MdEmail size={20} />
          </a>
        </p>
        <p>&copy; 2025 weblitzstack.com</p>
        {/* If you ever add social or legal links here, make sure they have text or aria-labels for accessibility. */}
      </div>
    </footer>
  );
}
