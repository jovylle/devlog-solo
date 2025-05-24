<script lang="ts">
  const modules = import.meta.glob('/content/posts/*.md', { eager: true });

  const posts = Object.entries(modules).map(([path, module]: any) => {
    return {
      ...module.metadata,
      slug: path.split('/').pop()?.replace('.md', '') || 'untitled'
    };
  }).filter(post => post.status === 'published');
</script>

<h1 class="text-2xl font-bold mb-4">Devlog</h1>

<ul class="space-y-4">
  {#each posts as post}
    <li>
      <a href={`/log/${post.slug}`} class="text-lg font-medium text-blue-500 hover:underline">
        {post.title}
      </a>
      <div class="text-sm text-gray-500">{post.date} — effort {post.effort}/5</div>
    </li>
  {/each}
</ul>
