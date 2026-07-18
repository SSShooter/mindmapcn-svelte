<script lang="ts">
	import { Check, Copy } from '@lucide/svelte';
	import { cn } from '$lib/utils.js';

	interface Props {
		text: string;
		class?: string;
	}

	let { text, class: className }: Props = $props();
	let copied = $state(false);

	async function copy() {
		await navigator.clipboard.writeText(text);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<button
	type="button"
	onclick={copy}
	class={cn('hover:bg-muted rounded p-1.5 transition-colors', className)}
	aria-label="Copy code"
>
	{#if copied}
		<Check class="size-3.5 text-emerald-500" />
	{:else}
		<Copy class="text-muted-foreground size-3.5" />
	{/if}
</button>
