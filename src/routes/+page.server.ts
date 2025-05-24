// src/routes/+page.server.ts
export async function load() {
	const modules = import.meta.glob('../../content/posts/*.md', { eager: true });

	const posts = Object.entries(modules).map(([path, module]: any) => {
		const slug = path.split('/').pop()?.replace('.md', '') || 'untitled';

		return {
			slug,
			...module.metadata
		};
	}).filter(post => post.status === 'published');

	return {
		posts
	};
}
