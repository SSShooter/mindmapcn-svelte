<script lang="ts">
	import { MindMap, MindMapControls, type MindElixirData } from '$lib/components/ui/mindmap/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Moon, Sun } from '@lucide/svelte';

	const themeData: MindElixirData = {
		nodeData: {
			id: 'root',
			topic: 'Theme Showcase',
			children: [
				{
					id: 'light',
					topic: 'Light Theme',
					children: [
						{ id: 'clean', topic: 'Clean & Bright' },
						{ id: 'readable', topic: 'Highly Readable' }
					]
				},
				{
					id: 'dark',
					topic: 'Dark Theme',
					children: [
						{ id: 'modern', topic: 'Modern Look' },
						{ id: 'eyefriendly', topic: 'Eye-friendly' }
					]
				}
			]
		}
	};

	let theme = $state<'light' | 'dark' | undefined>(undefined);
</script>

<div class="bg-background relative h-[400px] w-full overflow-hidden rounded-lg border">
	<MindMap data={themeData} {theme}>
		<MindMapControls />
	</MindMap>
	<div
		class="bg-background/95 border-border/50 absolute top-3 left-3 z-10 rounded-md border p-3 shadow-lg backdrop-blur-md"
	>
		<p class="text-muted-foreground mb-2 text-xs">Force Theme:</p>
		<div class="flex gap-2">
			<Button
				variant={theme === 'light' ? 'default' : 'secondary'}
				size="sm"
				onclick={() => (theme = 'light')}
				class="text-xs"
			>
				<Sun class="mr-1 h-3 w-3" />
				Light
			</Button>
			<Button
				variant={theme === 'dark' ? 'default' : 'secondary'}
				size="sm"
				onclick={() => (theme = 'dark')}
				class="text-xs"
			>
				<Moon class="mr-1 h-3 w-3" />
				Dark
			</Button>
			<Button
				variant={theme === undefined ? 'default' : 'secondary'}
				size="sm"
				onclick={() => (theme = undefined)}
				class="text-xs"
			>
				Auto
			</Button>
		</div>
	</div>
</div>
