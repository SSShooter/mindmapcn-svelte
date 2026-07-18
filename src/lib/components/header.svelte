<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import GitHubButton from '$lib/components/github-button.svelte';
	import ThemeToggle from '$lib/components/theme-toggle.svelte';
	import { cn } from '$lib/utils.js';

	interface Props {
		class?: string;
		leftContent?: Snippet;
	}

	let { class: className, leftContent }: Props = $props();
</script>

<header class={cn('w-full px-6 py-4', className)}>
	<nav class="flex items-center justify-between">
		<div class="flex items-center gap-4">
			{#if leftContent}
				{@render leftContent()}
			{/if}
			<a href="/" class="flex items-center gap-1.5 transition-opacity hover:opacity-80">
				<img src="/icon.png" alt="mindmapcn-svelte icon" class="size-6" />
				<span class="font-semibold tracking-tight">mindmapcn-svelte</span>
			</a>
		</div>
		<div class="flex h-4 items-center gap-1.5">
			<GitHubButton />
			<Separator orientation="vertical" />
			<ThemeToggle />
		</div>
	</nav>
</header>
