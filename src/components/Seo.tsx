import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  structuredData?: Record<string, unknown>;
}

const SITE_URL = 'https://meridianvl.pro';

function upsertMeta(selector: string, attribute: 'name' | 'property', value: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }

  meta.content = content;
}

export default function Seo({ title, description, keywords, path = '/', structuredData }: SeoProps) {
  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);

    if (keywords) {
      upsertMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
    }

    const pageUrl = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', pageUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;

    let script = document.head.querySelector<HTMLScriptElement>('script[data-seo-schema="page"]');

    if (structuredData) {
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.dataset.seoSchema = 'page';
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(structuredData);
    } else if (script) {
      script.remove();
    }
  }, [description, keywords, path, structuredData, title]);

  return null;
}
