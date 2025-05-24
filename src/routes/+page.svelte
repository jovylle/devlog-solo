<script lang="ts">
	export let data;
</script>

<h1 class="text-2xl font-bold mb-4">Devlog</h1>

<ul class="space-y-4">
	{#each data.posts as post}
		<li>
			<a href={`/log/${post.slug}`} class="text-lg font-medium text-blue-500 hover:underline">
				{post.title}
			</a>
			<div class="text-sm text-gray-500">{post.date} — effort {post.effort}/5</div>
		</li>
	{/each}
</ul>
