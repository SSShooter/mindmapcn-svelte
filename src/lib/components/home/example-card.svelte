<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';

	interface Props {
		label: string;
		class?: string;
		delay?: string;
		children?: Snippet;
	}

	let { label, class: className, delay = 'delay-500', children }: Props = $props();
</script>

<div
	class={cn(
		'bg-card relative overflow-hidden rounded-xl border border-border/50 shadow',
		delay,
		className
	)}
>
	{#if label}
		<div
			class="bg-background/90 text-muted-foreground absolute top-2 left-2 z-10 rounded px-2 py-1 text-[10px] tracking-wider uppercase backdrop-blur-sm"
		>
			{label}
		</div>
	{/if}
	{@render children?.()}
</div>
