import { docs, DocArticle } from '@/data/docs';

export function getAllDocs(): DocArticle[] {
  return docs;
}

export function getDocBySlug(slug: string): DocArticle | undefined {
  return docs.find((doc) => doc.slug === slug);
}

export function getDocsByCategory(category: string): DocArticle[] {
  return docs.filter((doc) => doc.category === category);
}

export function getDocCategories(): string[] {
  const categories = docs.map((doc) => doc.category);
  return Array.from(new Set(categories));
}
