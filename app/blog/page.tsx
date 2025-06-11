import { getPublishedPosts } from '@/lib/notion';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  // Group posts by tag
  const groupedByTag: Record<string, any[]> = {};
  posts.forEach((post: any) => {
    const tags = post.properties.Tags?.multi_select || [];
    tags.forEach((tag: any) => {
      if (!groupedByTag[tag.name]) groupedByTag[tag.name] = [];
      groupedByTag[tag.name].push(post);
    });
  });

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 pt-32 pb-20 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10">
        {/* Left: Blog Posts */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Weblitzstack Blog</h1>
          <p className="text-slate-400 mb-10">
            Insights, tutorials, and stories from a full-stack dev moving fast
            in public.
          </p>

          {posts.map((post: any) => {
            const title = post.properties.Title.title[0].plain_text;
            const slug = post.properties.Slug.rich_text[0].plain_text;
            const date = post.properties['Publish Date'].date.start;
            const tags = post.properties.Tags?.multi_select || [];

            return (
              <Link
                href={`/blog/${slug}`}
                key={post.id}
                className="block mb-8 p-6 rounded-lg border border-slate-700 hover:bg-[#172a46] transition"
              >
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-slate-400 text-sm mb-3">
                  {new Date(date).toDateString()}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag: any) => (
                    <span
                      key={tag.id}
                      className="bg-cyan-900 text-cyan-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Right: Categories + Newsletter */}
        <aside className="md:sticky top-24 h-fit space-y-8">
          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold">Categories</h3>
            {Object.entries(groupedByTag).map(([tag, posts]) => (
              <details
                key={tag}
                className="bg-slate-800 rounded-lg overflow-hidden"
              >
                <summary className="cursor-pointer px-4 py-2 hover:bg-slate-700 text-teal-300 font-medium">
                  {tag}
                </summary>
                <div className="max-h-60 overflow-y-auto px-4 py-2 space-y-2">
                  {posts.map((post: any) => {
                    const title = post.properties.Title.title[0].plain_text;
                    const slug = post.properties.Slug.rich_text[0].plain_text;

                    return (
                      <Link
                        key={post.id}
                        href={`/blog/${slug}`}
                        className="block text-sm text-slate-100 hover:text-cyan-400"
                      >
                        {title}
                      </Link>
                    );
                  })}
                </div>
              </details>
            ))}
          </div>

          {/* Newsletter */}
          <div className="bg-[#172a46] border border-slate-700 rounded-lg p-5">
            <h4 className="text-lg font-semibold mb-2 text-cyan-300">
              Subscribe to Weblitzstack Newsletter
            </h4>
            <p className="text-sm text-slate-400 mb-4">
              Follow my developer journey, prompt engineering breakthroughs, and
              tech insights—straight from Subic to your inbox.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="you@example.com"
                className="px-3 py-2 bg-slate-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-slate-400"
              />
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-md font-semibold transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}
