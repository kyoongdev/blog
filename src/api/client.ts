import { notFound } from 'next/navigation';

interface FetchOptions {
  revalidate?: number;
  tags?: string[];
  cache?: RequestCache;
}

export const fetchClient = async <T>(url?: string, options?: FetchOptions): Promise<T> => {
  const response = await fetch(`${url}`, {
    next: { revalidate: options?.revalidate ?? 60 * 60 * 24, tags: options?.tags },
    cache: options?.cache,
  });

  if (response.status === 404) return notFound();

  const data = (await response.json()) as T;
  return data;
};
