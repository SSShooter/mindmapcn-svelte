<script lang="ts">
	import { MindMap, MindMapControls, type MindElixirData } from '$lib/components/ui/mindmap/index.js';

	/**
	 * Remote logo used in the Mind Elixir docs.
	 * Without a CORS-friendly URL, exporting the map may omit this image.
	 */
	const LOGO_URL =
		'https://raw.githubusercontent.com/ssshooter/mind-elixir-core/master/images/logo2.png';

	const imageData: MindElixirData = {
		nodeData: {
			id: 'root',
			topic: 'Brand Kit',
			children: [
				{
					id: 'logo',
					topic: 'Logo',
					image: {
						url: LOGO_URL,
						width: 72,
						height: 72,
						fit: 'contain'
					},
					children: [
						{ id: 'primary', topic: 'Primary mark' },
						{ id: 'mono', topic: 'Monochrome' }
					]
				},
				{
					id: 'export',
					topic: 'Export',
					children: [
						{ id: 'png', topic: 'PNG / JPG' },
						{ id: 'cors', topic: 'CORS-safe assets' }
					]
				}
			]
		}
	};

	/**
	 * Demo only: rewrites the URL so you can see the hook is applied.
	 * In production, point this at your own same-origin or CORS proxy.
	 */
	function demoImageProxy(url: string): string {
		const separator = url.includes('?') ? '&' : '?';
		return `${url}${separator}via=mindmapcn-svelte`;
	}
</script>

<div class="bg-background relative h-[400px] w-full overflow-hidden rounded-lg border">
	<MindMap data={imageData} readonly imageProxy={demoImageProxy}>
		<MindMapControls />
	</MindMap>
	<div
		class="bg-background/95 border-border/50 absolute bottom-3 left-3 z-10 max-w-sm rounded-md border p-3 shadow-lg backdrop-blur-md"
	>
		<p class="text-muted-foreground text-xs">
			<code class="text-foreground">imageProxy</code> rewrites remote image URLs so export
			(download) can read them without CORS failures. Use the export button to try generating an
			image.
		</p>
	</div>
</div>
