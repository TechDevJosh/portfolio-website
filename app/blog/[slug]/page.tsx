import { getPageBySlug, getPageContentBlocks } from '@/lib/notion';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPageBySlug(params.slug);
  if (!page) return notFound();

  const blocks = await getPageContentBlocks(page.id);
  const title = page.properties.Title.title[0].plain_text;
  const date = page.properties['Publish Date'].date.start;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-slate-400 text-sm mb-8">
          {new Date(date).toDateString()}
        </p>

        {blocks.map((block: any) => {
          if (block.type === 'paragraph') {
            return (
              <p
                key={block.id}
                className="mb-6 text-lg leading-relaxed text-slate-100"
              >
                {block.paragraph.rich_text.map((text: any, i: number) => (
                  <span key={i}>{text.plain_text}</span>
                ))}
              </p>
            );
          }
          return null;
        })}

        <Link
          href="/blog"
          className="mt-12 inline-block text-cyan-400 hover:underline font-medium"
        >
          ← Back to Blog Menu Page
        </Link>
      </div>
    </div>
  );
}
