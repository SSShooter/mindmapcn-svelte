# mindmapcn-svelte

Beautiful mind map components for **Svelte 5**, styled for [shadcn-svelte](https://shadcn-svelte.com/) and powered by [Mind Elixir](https://github.com/SSShooter/mind-elixir-core).

Full site port of [mindmapcn](https://github.com/SSShooter/mindmapcn) (React / shadcn/ui) — homepage, docs, and the MindMap UI component.

## Features

- **Theme-aware** — follows document `dark` class, system preference, or an explicit `theme` prop
- **Zero config** — sensible defaults out of the box
- **shadcn-svelte compatible** — same CSS variable tokens and styling conventions
- **Mind Elixir powered** — full access to the underlying instance via `useMindMap()` / `getInstance()`
- **Controls** — zoom, fit to screen, fullscreen, and image export
- **Presentation-friendly** — `readonly`, `compact`, and monochrome modes

## Quick start

```bash
pnpm install
pnpm dev
```

| Route | Description |
| --- | --- |
| `/` | Marketing homepage (hero + live example grid) |
| `/docs` | Introduction |
| `/docs/installation` | Install & first usage |
| `/docs/usage` | Interactive examples with source |
| `/docs/data-structure` | `MindElixirData` schema |
| `/docs/api-reference` | Props reference |
| `/llms.txt` | Agent-oriented summary |

## Usage

Parent must have an **explicit height** — the map fills `h-full` / `w-full`.

```svelte
<script lang="ts">
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
</script>

<div class="relative h-[500px] w-full overflow-hidden rounded-lg border">
	<MindMap {data} readonly>
		<MindMapControls />
	</MindMap>
</div>
```

## Project layout

```
src/
  lib/
    components/
      header.svelte
      github-button.svelte
      theme-toggle.svelte
      home/                 # Homepage sections
      docs/                 # Docs chrome + examples
      ui/
        mindmap/            # MindMap + MindMapControls
        button|separator|skeleton|table/
    highlight.ts
    site.ts
  routes/
    +page.svelte            # Home
    docs/
      +layout.svelte
      +page.svelte          # Introduction
      installation/
      usage/
      data-structure/
      api-reference/
    llms.txt/+server.ts
  static/
    icon.png
    banner.png
```

## Stack

- Svelte 5 (runes) + SvelteKit
- Tailwind CSS v4
- shadcn-svelte (Nova / neutral)
- mind-elixir
- @zumer/snapdom
- mode-watcher
- shiki (docs code highlighting)

## Attribution

- [mindmapcn](https://github.com/SSShooter/mindmapcn)
- [Mind Elixir](https://github.com/SSShooter/mind-elixir-core)
- [shadcn-svelte](https://github.com/huntabyte/shadcn-svelte)

## License

MIT
