import { blogPosts, BlogPost } from '@/data/blog';

export type { BlogPost };

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllCategories(): string[] {
  const categories = blogPosts.map((post) => post.category);
  return Array.from(new Set(categories)).sort();
}

export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  const sameCategory = blogPosts.filter(
    (post) =>
      post.slug !== slug &&
      post.category.toLowerCase() === currentPost.category.toLowerCase()
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const otherPosts = blogPosts.filter(
    (post) =>
      post.slug !== slug &&
      post.category.toLowerCase() !== currentPost.category.toLowerCase()
  );

  return [...sameCategory, ...otherPosts].slice(0, limit);
}
