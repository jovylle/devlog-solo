<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.post.title} | Devlog</title>
</svelte:head>

<article class="prose max-w-none">
	<h1>{data.post.title}</h1>
	<p class="text-sm text-gray-500">{data.post.date} — effort {data.post.effort}/5</p>
	{@html data.post.html}
</article>
