<script lang="ts">
	import { Zap, Moon, Puzzle, Code } from '@lucide/svelte';
	import DocsLayout from '$lib/components/docs/docs-layout.svelte';
	import DocsSection from '$lib/components/docs/docs-section.svelte';
	import DocsLink from '$lib/components/docs/docs-link.svelte';
	import DocsCode from '$lib/components/docs/docs-code.svelte';

	const features = [
		{
			icon: Zap,
			title: 'Zero Config',
			description: 'Works out of the box with reasonable defaults. No complex setup required.'
		},
		{
			icon: Moon,
			title: 'Theme Aware',
			description: 'Automatically adapts to light and dark mode with shadcn-svelte integration.'
		},
		{
			icon: Puzzle,
			title: 'Composable',
			description: 'Built as a Svelte component, easy to integrate and extend.'
		},
		{
			icon: Code,
			title: 'TypeScript',
			description: 'Full type safety with comprehensive TypeScript support.'
		}
	];
</script>

<svelte:head>
	<title>Introduction - mindmapcn-svelte</title>
</svelte:head>

<DocsLayout
	title="Introduction"
	description="Beautiful, accessible mind map components for presentation-first apps."
	next={{ title: 'Installation', href: '/docs/installation' }}
>
	<DocsSection>
		<p>
			<strong class="text-foreground">mindmapcn-svelte</strong> provides beautifully designed,
			accessible, and customizable mind map components. Built on
			<DocsLink href="https://github.com/ssshooter/mind-elixir-core" external>Mind Elixir</DocsLink>,
			styled with
			<DocsLink href="https://tailwindcss.com" external>Tailwind CSS</DocsLink>, and designed to work
			with
			<DocsLink href="https://shadcn-svelte.com" external>shadcn-svelte</DocsLink>.
		</p>
	</DocsSection>

	<DocsSection title="Presentation first">
		<p>
			mindmapcn-svelte is optimized for
			<strong class="text-foreground">display and embedding</strong>
			— org charts, knowledge maps, project plans, and other read-mostly diagrams. Prefer
			<DocsCode>readonly</DocsCode> when viewers should not edit nodes.
		</p>
		<p>
			Editing still works if you leave the map interactive, but this library is not a full mind-map
			editor UI (no built-in undo toolbar, inspector, etc.). For the complete instance API —
			methods, events, and advanced options — use <DocsCode>useMindMap().mind</DocsCode> and see
			<DocsLink href="https://github.com/ssshooter/mind-elixir-core" external
				>Mind Elixir Core</DocsLink
			>.
		</p>
	</DocsSection>

	<DocsSection title="Why mindmapcn-svelte?">
		<p>
			Integrating a mind map into a Svelte application usually involves complex wrappers or outdated
			libraries. mindmapcn-svelte gives you a modern, beautiful, and fully typed Mind Map component
			that fits a shadcn-svelte-based app with sensible defaults for themes, controls, and layout.
		</p>
	</DocsSection>

	<DocsSection title="Features">
		<div class="not-prose mt-4 grid gap-4 sm:grid-cols-2">
			{#each features as feature (feature.title)}
				<div class="bg-card space-y-2 rounded-lg border p-4">
					<div class="flex items-center gap-2">
						<div class="bg-primary/10 flex size-8 items-center justify-center rounded-md">
							<feature.icon class="text-primary size-4" />
						</div>
						<h3 class="text-foreground font-medium">{feature.title}</h3>
					</div>
					<p class="text-muted-foreground text-sm">{feature.description}</p>
				</div>
			{/each}
		</div>
	</DocsSection>
</DocsLayout>
