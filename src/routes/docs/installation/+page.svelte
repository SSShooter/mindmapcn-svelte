<script lang="ts">
	import DocsLayout from '$lib/components/docs/docs-layout.svelte';
	import DocsSection from '$lib/components/docs/docs-section.svelte';
	import DocsLink from '$lib/components/docs/docs-link.svelte';
	import DocsCode from '$lib/components/docs/docs-code.svelte';
	import DocsNote from '$lib/components/docs/docs-note.svelte';
	import CodeBlock from '$lib/components/docs/code-block.svelte';
	import InstallCodeBlock from '$lib/components/docs/install-code-block.svelte';
	import { MindMap, MindMapControls } from '$lib/components/ui/mindmap/index.js';
	import { installCommand } from '$lib/site.js';

	const usageCode = `<script lang="ts">
	import { MindMap, MindMapControls } from '$lib/components/ui/mindmap';
	import type { MindElixirData } from 'mind-elixir';

	const data: MindElixirData = {
		nodeData: {
			id: 'root',
			topic: 'Mind Map',
			children: [
				{ id: 'a', topic: 'Topic A' },
				{ id: 'b', topic: 'Topic B' }
			]
		}
	};
<\/script>

<!-- Give the container an explicit height — the map fills 100% of its parent. -->
<div class="relative h-[500px] w-full overflow-hidden rounded-lg border">
	<MindMap {data} readonly>
		<MindMapControls />
	</MindMap>
</div>`;
</script>

<svelte:head>
	<title>Installation - mindmapcn-svelte</title>
</svelte:head>

<DocsLayout
	title="Installation"
	description="How to install and set up mindmapcn-svelte in your project."
	prev={{ title: 'Introduction', href: '/docs' }}
	next={{ title: 'Usage', href: '/docs/usage' }}
>
	<DocsSection title="Prerequisites">
		<p>
			A project with
			<DocsLink href="https://tailwindcss.com" external>Tailwind CSS</DocsLink>
			and
			<DocsLink href="https://shadcn-svelte.com" external>shadcn-svelte</DocsLink>
			set up.
		</p>
	</DocsSection>

	<DocsSection title="Installation">
		<p>Run the following command to add the mind map component:</p>
		<InstallCodeBlock command={installCommand} showPrompt={false} />
		<p>
			This will install <DocsCode>mind-elixir</DocsCode> (and related dependencies) and add the
			component to
			<DocsCode>$lib/components/ui/mindmap</DocsCode> by default.
		</p>
		<p>
			You can also copy the component from this repository at
			<DocsCode>src/lib/components/ui/mindmap</DocsCode>.
		</p>
	</DocsSection>

	<DocsSection title="Usage">
		<p>
			Import from the installed path and wrap the map in a container with an
			<strong class="text-foreground">explicit height</strong>. The map uses
			<DocsCode>h-full</DocsCode> / <DocsCode>w-full</DocsCode>, so a parent without height will
			collapse to a blank area.
		</p>
		<p>
			MindMap uses browser APIs (DOM, fullscreen, export). It runs on the client after mount —
			no special SvelteKit form action is required.
		</p>
		<CodeBlock code={usageCode} language="svelte" />
		<div
			class="bg-background relative h-[300px] w-full overflow-hidden rounded-lg border"
		>
			<MindMap fit={true}>
				<MindMapControls />
			</MindMap>
		</div>
	</DocsSection>

	<DocsNote>
		<strong>Note:</strong> The mind map uses <code>oklch</code> colors for accessibility and theme
		support. It automatically switches between light and dark themes.
	</DocsNote>
</DocsLayout>
