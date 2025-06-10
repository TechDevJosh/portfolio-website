import Navbar from '@/components/Navbar-backup';

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="p-10">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <ul className="mt-4 list-disc ml-5">
          <li>Lessons of War (YouTube Channel)</li>
          <li>AI Email Builder Web App</li>
          <li>Auto-Updating Job Board</li>
          <li>AI for Subic Waterfront</li>
        </ul>
      </main>
    </>
  );
}
