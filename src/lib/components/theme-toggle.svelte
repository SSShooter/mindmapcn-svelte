<script lang="ts">
	import { onMount } from 'svelte';
	import { mode, setMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	function toggle() {
		setMode(mode.current === 'dark' ? 'light' : 'dark');
	}
</script>

{#if !mounted}
	<div class="size-4"></div>
{:else}
	<Button onclick={toggle} variant="ghost" aria-label="Toggle theme" size="icon-sm">
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="size-4"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 2a10 10 0 0 1 0 20" fill="currentColor" stroke="none" />
		</svg>
	</Button>
{/if}
