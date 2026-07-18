<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import DocsSidebar from '$lib/components/docs/docs-sidebar.svelte';
	import MobileSidebarTrigger from '$lib/components/docs/mobile-sidebar-trigger.svelte';

	let { children } = $props();
	let mobileOpen = $state(false);
</script>

<div class="flex min-h-screen w-full flex-col">
	<Header
		class="bg-background/95 sticky top-0 z-50 border-b backdrop-blur supports-backdrop-filter:bg-background/60"
	>
		{#snippet leftContent()}
			<MobileSidebarTrigger onclick={() => (mobileOpen = !mobileOpen)} />
		{/snippet}
	</Header>
	<div class="flex flex-1">
		<DocsSidebar {mobileOpen} onCloseMobile={() => (mobileOpen = false)} />
		<main class="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
			{@render children()}
		</main>
	</div>
</div>
