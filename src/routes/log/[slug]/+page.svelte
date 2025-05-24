<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Devlog | {data.post.title ?? 'Untitled'}</title>
</svelte:head>

<article class="prose prose-sm max-w-none">
	{@html data.post.html}
</article>
