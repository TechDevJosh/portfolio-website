// ✅ contents same as before...
'use client'
export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 fixed top-0 left-0 z-[1000] bg-[#0B0E11] border-b border-gray-800 flex justify-center gap-6 text-white">
      <a href="#home" className="hover:text-teal-400 transition">Home</a>
      <a href="#services" className="hover:text-teal-400 transition">Services</a>
      <a href="#proof" className="hover:text-teal-400 transition">Proof</a>
      <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
    </nav>
  )
}
