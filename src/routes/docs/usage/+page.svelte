<script lang="ts">
	import DocsLayout from '$lib/components/docs/docs-layout.svelte';
	import DocsSection from '$lib/components/docs/docs-section.svelte';
	import DocsCode from '$lib/components/docs/docs-code.svelte';
	import ComponentPreview from '$lib/components/docs/component-preview.svelte';
	import BasicMindMapExample from '$lib/components/docs/examples/basic-mindmap-example.svelte';
	import OnChangeMindMapExample from '$lib/components/docs/examples/onchange-mindmap-example.svelte';
	import ReadonlyMindMapExample from '$lib/components/docs/examples/readonly-mindmap-example.svelte';
	import DirectionMindMapExample from '$lib/components/docs/examples/direction-mindmap-example.svelte';
	import LocaleMindMapExample from '$lib/components/docs/examples/locale-mindmap-example.svelte';
	import CustomThemeMindMapExample from '$lib/components/docs/examples/custom-theme-mindmap-example.svelte';
	import MarkdownMindMapExample from '$lib/components/docs/examples/markdown-mindmap-example.svelte';
	import CompactMindMapExample from '$lib/components/docs/examples/compact-mindmap-example.svelte';
	import ImageProxyMindMapExample from '$lib/components/docs/examples/image-proxy-mindmap-example.svelte';

	import basicSource from '$lib/components/docs/examples/basic-mindmap-example.svelte?raw';
	import onChangeSource from '$lib/components/docs/examples/onchange-mindmap-example.svelte?raw';
	import readonlySource from '$lib/components/docs/examples/readonly-mindmap-example.svelte?raw';
	import directionSource from '$lib/components/docs/examples/direction-mindmap-example.svelte?raw';
	import localeSource from '$lib/components/docs/examples/locale-mindmap-example.svelte?raw';
	import themeSource from '$lib/components/docs/examples/custom-theme-mindmap-example.svelte?raw';
	import markdownSource from '$lib/components/docs/examples/markdown-mindmap-example.svelte?raw';
	import compactSource from '$lib/components/docs/examples/compact-mindmap-example.svelte?raw';
	import imageProxySource from '$lib/components/docs/examples/image-proxy-mindmap-example.svelte?raw';

	function cleanSource(source: string) {
		return source.replace(/\$lib\/components\/ui\/mindmap\/index\.js/g, '$lib/components/ui/mindmap');
	}
</script>

<svelte:head>
	<title>Basic Usage - mindmapcn-svelte</title>
</svelte:head>

<DocsLayout
	title="Usage"
	description="The simplest way to add an interactive mind map to your application."
	prev={{ title: 'Installation', href: '/docs/installation' }}
	next={{ title: 'Data Structure', href: '/docs/data-structure' }}
>
	<DocsSection>
		<p>
			The <DocsCode>MindMap</DocsCode> component initializes the mind map canvas, handles theming,
			and provides context for child components. It is designed for presentation-first maps; use
			<DocsCode>readonly</DocsCode> when viewers should not edit nodes.
		</p>
	</DocsSection>

	<ComponentPreview code={cleanSource(basicSource)}>
		<BasicMindMapExample />
	</ComponentPreview>

	<DocsSection title="Handling Changes">
		<p>
			Use the <DocsCode>onChange</DocsCode> callback to respond to user interactions with the mind
			map. This callback receives the updated data whenever a node is added, edited, moved, or
			deleted.
		</p>
	</DocsSection>

	<ComponentPreview code={cleanSource(onChangeSource)}>
		<OnChangeMindMapExample />
	</ComponentPreview>

	<DocsSection title="Readonly Mode">
		<p>
			Create a view-only mind map by disabling editing features. This is perfect for displaying
			organizational charts, knowledge bases, or any static content that shouldn't be modified by
			users.
		</p>
	</DocsSection>

	<ComponentPreview code={cleanSource(readonlySource)}>
		<ReadonlyMindMapExample />
	</ComponentPreview>

	<DocsSection title="Markdown Nodes">
		<p>
			Pass a <DocsCode>markdown</DocsCode> function to render rich text in node topics. Bring your own
			parser (for example <DocsCode>marked</DocsCode> or <DocsCode>markdown-it</DocsCode>), or use a
			small custom implementation for bold, italic, and code as shown below.
		</p>
	</DocsSection>

	<ComponentPreview code={cleanSource(markdownSource)}>
		<MarkdownMindMapExample />
	</ComponentPreview>

	<DocsSection title="Compact Layout">
		<p>
			Enable <DocsCode>compact</DocsCode> for tighter spacing. Useful when embedding dense knowledge
			maps or fitting more nodes into a card-sized viewport.
		</p>
	</DocsSection>

	<ComponentPreview code={cleanSource(compactSource)}>
		<CompactMindMapExample />
	</ComponentPreview>

	<DocsSection title="Image Proxy (Export CORS)">
		<p>
			When nodes include remote images, exporting the map to a file can fail because of cross-origin
			restrictions. Pass <DocsCode>imageProxy</DocsCode> to rewrite those image URLs through a
			same-origin or CORS-friendly proxy so the export can capture them. This is only needed for
			image generation / export — not for normal on-screen viewing.
		</p>
	</DocsSection>

	<ComponentPreview code={cleanSource(imageProxySource)}>
		<ImageProxyMindMapExample />
	</ComponentPreview>

	<DocsSection title="Custom Layout Direction">
		<p>
			Control how the mind map branches expand by setting the <DocsCode>direction</DocsCode> prop.
			Choose between left (0), right (1), or both sides (2) to match your content structure and visual
			preferences.
		</p>
	</DocsSection>

	<ComponentPreview code={cleanSource(directionSource)}>
		<DirectionMindMapExample />
	</ComponentPreview>

	<DocsSection title="Localization">
		<p>
			The MindMap component supports multiple languages for its built-in menus and prompts. Set the
			<DocsCode>locale</DocsCode> prop to match your application's language or user preferences.
		</p>
	</DocsSection>

	<ComponentPreview code={cleanSource(localeSource)}>
		<LocaleMindMapExample />
	</ComponentPreview>

	<DocsSection title="Theme Control">
		<p>
			By default, the mind map automatically adapts to your document's theme. You can override this
			behavior by explicitly setting the <DocsCode>theme</DocsCode> prop to force a specific
			appearance.
		</p>
	</DocsSection>

	<ComponentPreview code={cleanSource(themeSource)}>
		<CustomThemeMindMapExample />
	</ComponentPreview>
</DocsLayout>
