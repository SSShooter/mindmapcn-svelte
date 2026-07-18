import { siteDescription, siteName, siteUrl } from '$lib/site.js';

const markdown = `# ${siteName}

> ${siteDescription}

## Links

- Docs: ${siteUrl}/docs
- Installation: ${siteUrl}/docs/installation
- Usage: ${siteUrl}/docs/usage
- Data Structure: ${siteUrl}/docs/data-structure
- API Reference: ${siteUrl}/docs/api-reference
- GitHub: https://github.com/ssshooter/mindmapcn-svelte
- Upstream React project (mindmapcn): https://github.com/ssshooter/mindmapcn
- Mind Elixir: https://github.com/ssshooter/mind-elixir-core
- shadcn-svelte: https://shadcn-svelte.com

## Usage guidance for agents

- Always wrap \`<MindMap>\` in a parent with an explicit height (for example \`h-[500px]\`). The map uses full width/height of its parent; a parent without height collapses to a blank area.
- Prefer \`readonly\` for presentation, embedding, org charts, knowledge maps, and other view-only diagrams.
- Leave the map interactive only when the user explicitly needs in-canvas editing. This library is not a full mind-map editor UI.
- Use \`fit\` (default \`true\`) so the map scales to the viewport on load.
- Use \`compact\` for denser layouts in cards or small viewports.
- Use \`direction\`: \`0\` left, \`1\` right, \`2\` both/side (default).
- Use \`theme\` only to force light/dark; omit it to follow the document / system theme.
- Use \`markdown\` when node topics need rich text — pass a custom parser; do not assume a built-in markdown engine.
- Use \`imageProxy\` only when export fails due to CORS on remote node images.
- For the full instance API, use \`useMindMap().mind\` and see Mind Elixir docs.

## Component import

\`\`\`svelte
<script lang="ts">
  import { MindMap, MindMapControls } from '$lib/components/ui/mindmap';
  import type { MindElixirData } from 'mind-elixir';
</script>

<div class="relative h-[500px] w-full overflow-hidden rounded-lg border">
  <MindMap data={data} readonly>
    <MindMapControls />
  </MindMap>
</div>
\`\`\`
`;

export function GET() {
	return new Response(markdown, {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8'
		}
	});
}
