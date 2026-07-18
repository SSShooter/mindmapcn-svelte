<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';
	import { highlightCode } from '$lib/highlight.js';
	import CopyButton from './copy-button.svelte';

	interface Props {
		code: string;
		class?: string;
		children?: Snippet;
	}

	let { code, class: className, children }: Props = $props();

	let activeTab = $state<'preview' | 'code'>('preview');
	let highlightedCode = $state('');

	$effect(() => {
		const current = code;
		let cancelled = false;
		highlightCode(current, 'svelte').then((html) => {
			if (!cancelled) highlightedCode = html;
		});
		return () => {
			cancelled = true;
		};
	});
</script>

<div class="w-full overflow-hidden rounded-lg border">
	<div class="bg-muted/30 flex h-12 items-center justify-between border-b px-2">
		<div class="flex gap-2">
			<button
				type="button"
				onclick={() => (activeTab = 'preview')}
				class={cn(
					'rounded px-2 py-1 text-xs font-medium transition-colors',
					activeTab === 'preview'
						? 'bg-muted text-foreground dark:bg-muted/80'
						: 'text-muted-foreground hover:text-foreground hover:bg-muted dark:hover:bg-muted/80'
				)}
			>
				Preview
			</button>
			<button
				type="button"
				onclick={() => (activeTab = 'code')}
				class={cn(
					'rounded px-3 py-1 text-xs font-medium transition-colors',
					activeTab === 'code'
						? 'bg-muted text-foreground dark:bg-muted/80'
						: 'text-muted-foreground hover:text-foreground hover:bg-muted dark:hover:bg-muted/80'
				)}
			>
				Code
			</button>
		</div>
		<CopyButton text={code} />
	</div>

	<div class={cn('h-[400px] overflow-hidden', className)}>
		{#if activeTab === 'preview'}
			<div class="h-full">
				{@render children?.()}
			</div>
		{:else}
			<div
				class="bg-muted/20 h-full overflow-auto p-4 text-sm [&_code]:bg-transparent! [&_pre]:bg-transparent!"
			>
				{#if highlightedCode}
					{@html highlightedCode}
				{:else}
					<pre class="font-mono text-sm whitespace-pre-wrap">{code}</pre>
				{/if}
			</div>
		{/if}
	</div>
</div>
