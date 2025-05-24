<script lang="ts">
	import { onMount } from 'svelte';
	export let data;

	let PostComponent;
	let error = '';

	onMount(async () => {
		try {
			const modules = import.meta.glob('/content/posts/*.md');
			const match = modules[`/content/posts/${data.slug}.md`];

			if (!match) {
				error = 'Post not found';
				return;
			}

			const mod = await match();
			PostComponent = mod.default;
		} catch (e) {
			error = 'Error loading post';
		}
	});
</script>

{#if error}
	<p class="text-red-600">{error}</p>
{:else if PostComponent}
	<article class="prose max-w-none">
		<PostComponent />
	</article>
{:else}
	<p>Loading...</p>
{/if}
