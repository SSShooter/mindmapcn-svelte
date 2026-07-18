<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<div
	class="bg-muted/40 text-muted-foreground rounded-lg border px-5 py-4 text-sm leading-relaxed [&>strong]:text-foreground [&>strong]:font-medium"
>
	{@render children?.()}
</div>
