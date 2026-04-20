import { Link, Navigate, useParams } from 'react-router-dom';
import { Facebook, Linkedin, Link as LinkIcon, Check, ArrowLeft, Clock, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Seo } from '@/seo/Seo';
import { PageHero } from '@/components/ui/PageHero';
import { BLOG_POSTS } from '@/data/blog';
import { SITE } from '@/data/site';
import { blogPostSchema, breadcrumbSchema } from '@/seo/schemas';
import { Reveal } from '@/components/ui/Reveal';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  if (!post) return <Navigate to="/blog" replace />;

  const url = `${SITE.url}/blog/${post.slug}`;
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <Seo
        title={post.title}
        description={post.summary}
        path={`/blog/${post.slug}`}
        image={post.cover}
        type="article"
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        author={post.author.name}
        keywords={post.tags}
        schemas={[
          blogPostSchema(post),
          breadcrumbSchema([
            { name: 'Início', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: post.title, url: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      <article className="py-16 lg:py-24">
        <div className="container-sm">
          <div className="flex flex-wrap items-center gap-5 text-xs text-muted mb-8">
            <span className="inline-flex items-center gap-2">
              <Calendar size={13} /> {formatDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={13} /> {post.readingMinutes} min de leitura
            </span>
            <span>
              Por <span className="text-white">{post.author.name}</span>
            </span>
          </div>

          <Reveal>
            <img
              src={post.cover}
              alt={post.title}
              className="w-full aspect-[16/9] object-cover mb-12 border border-line"
              loading="eager"
            />
          </Reveal>

          <Reveal>
            <div className="post-tldr border-l-2 border-gold pl-6 mb-14">
              <div className="text-[0.6875rem] uppercase tracking-[0.2em] text-gold mb-2">
                Em resumo
              </div>
              <p className="text-white/85 leading-relaxed">{post.tldr}</p>
            </div>
          </Reveal>

          <div className="prose-post">
            {post.body.map((section, i) => (
              <Reveal key={i} className="mb-10">
                {section.heading && (
                  <h2 className="font-serif text-2xl md:text-3xl mt-8 mb-5">{section.heading}</h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-white/80 leading-[1.85] mb-5">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc pl-6 mb-5 text-white/80">
                    {section.list.map((li, k) => (
                      <li key={k} className="mb-2">
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-12 mb-14">
            {post.tags.map((t) => (
              <span key={t} className="pill text-xs">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-6 border-y border-line py-6 mb-16 flex-wrap">
            <div className="flex items-center gap-4">
              <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-muted">
                Compartilhar
              </span>
              <div className="flex gap-2">
                <a
                  aria-label="Compartilhar no Facebook"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
                  target="_blank"
                  rel="noopener"
                  className="h-10 w-10 inline-flex items-center justify-center border border-line-hover text-muted hover:border-gold hover:text-gold transition"
                >
                  <Facebook size={14} />
                </a>
                <a
                  aria-label="Compartilhar no LinkedIn"
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                  target="_blank"
                  rel="noopener"
                  className="h-10 w-10 inline-flex items-center justify-center border border-line-hover text-muted hover:border-gold hover:text-gold transition"
                >
                  <Linkedin size={14} />
                </a>
                <button
                  aria-label="Copiar link"
                  onClick={copy}
                  className="h-10 w-10 inline-flex items-center justify-center border border-line-hover text-muted hover:border-gold hover:text-gold transition"
                >
                  {copied ? <Check size={14} /> : <LinkIcon size={14} />}
                </button>
              </div>
            </div>
            <Link to="/blog" className="btn-ghost">
              <ArrowLeft size={12} className="inline mr-2" /> Voltar para o blog
            </Link>
          </div>

          <aside className="border border-line bg-bg-card p-8 md:p-10 mb-20">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-full bg-gold/20 flex items-center justify-center font-serif text-gold text-lg shrink-0">
                {post.author.name
                  .split(' ')
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div>
                <div className="font-serif text-lg">{post.author.name}</div>
                <div className="text-xs uppercase tracking-widest text-gold mb-3">
                  {post.author.role}
                </div>
                <p className="text-body text-sm">{post.author.bio}</p>
              </div>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="container-site border-t border-line pt-20">
            <h2 className="heading-md mb-10">
              Continue <span className="italic text-gold">lendo</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group grid sm:grid-cols-[160px_1fr] gap-5 border border-line bg-bg-card overflow-hidden"
                >
                  <div className="aspect-video sm:aspect-auto sm:h-full overflow-hidden">
                    <img
                      src={r.cover}
                      alt={r.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-[0.625rem] uppercase tracking-[0.2em] text-gold mb-2">
                      {r.category}
                    </div>
                    <div className="font-serif text-base leading-snug group-hover:text-gold transition-colors">
                      {r.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
