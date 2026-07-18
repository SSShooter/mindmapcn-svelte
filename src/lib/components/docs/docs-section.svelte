<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		children?: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<section class="space-y-5">
	{#if title}
		<h2 class="text-xl font-semibold tracking-tight">{title}</h2>
	{/if}
	<div
		class="text-muted-foreground space-y-4 leading-7 [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-6"
	>
		{@render children?.()}
	</div>
</section>
