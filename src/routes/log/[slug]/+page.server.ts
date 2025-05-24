import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const modules = import.meta.glob('/content/posts/*.md', { eager: true });

  const match = Object.entries(modules).find(([path]) =>
    path.includes(`${params.slug}.md`)
  );

  if (!match) throw error(404, 'Post not found');

  const [, module]: any = match;

  return {
    post: {
      slug: params.slug,
      ...module.metadata,
      component: module.default
    }
  };
}
