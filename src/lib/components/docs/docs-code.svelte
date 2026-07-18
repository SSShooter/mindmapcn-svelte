<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';

	interface Props {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children }: Props = $props();
</script>

<code class={cn('bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm', className)}>
	{@render children?.()}
</code>
