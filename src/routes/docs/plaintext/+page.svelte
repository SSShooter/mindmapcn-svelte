<script lang="ts">
	import DocsLayout from '$lib/components/docs/docs-layout.svelte';
	import DocsSection from '$lib/components/docs/docs-section.svelte';
	import DocsCode from '$lib/components/docs/docs-code.svelte';
	import DocsLink from '$lib/components/docs/docs-link.svelte';
	import DocsNote from '$lib/components/docs/docs-note.svelte';
	import CodeBlock from '$lib/components/docs/code-block.svelte';
	import ComponentPreview from '$lib/components/docs/component-preview.svelte';
	import PlaintextMindMapExample from '$lib/components/docs/examples/plaintext-mindmap-example.svelte';
	import plaintextSource from '$lib/components/docs/examples/plaintext-mindmap-example.svelte?raw';

	function cleanSource(source: string) {
		return source.replace(
			/\$lib\/components\/ui\/mindmap\/index\.js/g,
			'$lib/components/ui/mindmap'
		);
	}

	const basicText = `- Root Node
  - Child Node 1
    - Child Node 1-1
    - Child Node 1-2
  - Child Node 2
    - Child Node 2-1`;

	const usageCode = `<script lang="ts">
  import { MindMap, MindMapControls } from '$lib/components/ui/mindmap';

  // Pass a plaintext string directly — no manual parsing required.
  const plaintext = \`- Mind Map
  - Topic 1
    - Subtopic 1.1
    - Subtopic 1.2
  - Topic 2\`;
<\/script>

<div class="relative h-[500px] w-full overflow-hidden rounded-lg border">
  <MindMap data={plaintext} readonly>
    <MindMapControls />
  </MindMap>
</div>`;

	const fullText = `- Project Planning
  - Phase 1: Research [^phase1]
    - Market Analysis {"color": "#3298db"}
    - Competitor Study {"color": "#3298db"}
    - }:2 Research Summary
  - Phase 2: Development [^phase2]
    - Frontend {"color": "#2ecc71"}
    - Backend {"color": "#2ecc71"}
    - Testing {"color": "#f39c12"}
    - } Development Summary
  - Phase 3: Launch [^phase3]
    - Marketing
    - Deployment
  - > [^phase1] >-Leads to-> [^phase2]
  - > [^phase2] >-Leads to-> [^phase3]`;
</script>

<svelte:head>
	<title>Plaintext Format - mindmapcn-svelte</title>
</svelte:head>

<DocsLayout
	title="Plaintext Format"
	description="Pass an indentation-based outline string to data instead of a MindElixirData object."
	prev={{ title: 'Usage', href: '/docs/usage' }}
	next={{ title: 'Data Structure', href: '/docs/data-structure' }}
>
	<DocsSection>
		<p>
			Besides a <DocsCode>MindElixirData</DocsCode> object, the
			<DocsCode>data</DocsCode> prop also accepts a
			<strong>plaintext string</strong>. The component detects a string input and converts it to
			<DocsCode>MindElixirData</DocsCode> internally via
			<DocsCode>plaintextToMindElixir</DocsCode>, so you can author maps as a simple outline. This
			format is ideal for human editing, AI generation, and streaming scenarios.
		</p>
	</DocsSection>

	<ComponentPreview code={cleanSource(plaintextSource)}>
		<PlaintextMindMapExample />
	</ComponentPreview>

	<DocsSection title="Passing a string to data">
		<p>
			Just assign the string to <DocsCode>data</DocsCode>. Everything else works the same as with an
			object.
		</p>
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Basic structure">
		<p>
			Each line is a node. Indentation of <strong>2 spaces per level</strong> defines the hierarchy,
			and each node line starts with <DocsCode>-</DocsCode> followed by a space and the topic text.
		</p>
		<CodeBlock code={basicText} language="text" showCopyButton={false} />
	</DocsSection>

	<DocsSection title="Syntax reference">
		<ul>
			<li>
				<strong>Node</strong> — <DocsCode>- Topic</DocsCode>
			</li>
			<li>
				<strong>Node with ID</strong> — <DocsCode>- Topic [^id]</DocsCode> assigns a reference id for
				links
			</li>
			<li>
				<strong>Inline style</strong> —
				<DocsCode>{'- Topic {"color": "#e87a90", "fontSize": "18px"}'}</DocsCode>
			</li>
			<li>
				<strong>Bidirectional link</strong> —
				<DocsCode>{'> [^id1] <-Label-> [^id2]'}</DocsCode>
			</li>
			<li>
				<strong>Forward link</strong> — <DocsCode>{'> [^id1] >-Label-> [^id2]'}</DocsCode>
			</li>
			<li>
				<strong>Summary (all siblings)</strong> — <DocsCode>{'} Summary text'}</DocsCode>
			</li>
			<li>
				<strong>Summary (last N siblings)</strong> — <DocsCode>{'}:N Summary text'}</DocsCode>
			</li>
		</ul>
		<DocsNote>
			<strong>Link coordinates are optional.</strong> When hand-writing or generating plaintext you
			can omit the <DocsCode>(x,y)</DocsCode> offsets — Mind Elixir calculates balanced defaults automatically.
		</DocsNote>
	</DocsSection>

	<DocsSection title="Complete example">
		<p>The example rendered above is generated from this outline — copy it and use it as-is:</p>
		<CodeBlock code={fullText} language="text" />
	</DocsSection>

	<DocsSection title="Learn more">
		<p>
			For the full plaintext specification and the Obsidian-style syntax, see
			<DocsLink href="https://app.mind-elixir.com/obsidian-mindmap#obsidian-plaintext" external
				>Mind Elixir — Obsidian Plaintext</DocsLink
			>.
		</p>
	</DocsSection>
</DocsLayout>
