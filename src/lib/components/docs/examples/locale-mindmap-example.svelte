<script lang="ts">
	import {
		MindMap,
		MindMapControls,
		type MindElixirData,
		type MindMapLocale
	} from '$lib/components/ui/mindmap/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	const multilingualData: MindElixirData = {
		nodeData: {
			id: 'root',
			topic: 'Multi-language Support',
			children: [
				{ id: 'english', topic: 'English' },
				{ id: 'chinese', topic: '中文' },
				{ id: 'japanese', topic: '日本語' },
				{ id: 'portuguese', topic: 'Português' }
			]
		}
	};

	let locale = $state<MindMapLocale>('en');

	const locales: { value: MindMapLocale; label: string }[] = [
		{ value: 'en', label: 'English' },
		{ value: 'zh_CN', label: '简体中文' },
		{ value: 'zh_TW', label: '繁體中文' },
		{ value: 'ja', label: '日本語' },
		{ value: 'pt', label: 'Português' }
	];
</script>

<div class="bg-background relative h-[400px] w-full overflow-hidden rounded-lg border">
	{#key locale}
		<MindMap data={multilingualData} {locale}>
			<MindMapControls />
		</MindMap>
	{/key}
	<div
		class="bg-background/95 border-border/50 absolute top-3 left-3 z-10 rounded-md border p-3 shadow-lg backdrop-blur-md"
	>
		<p class="text-muted-foreground mb-2 text-xs">Interface Language:</p>
		<div class="flex flex-wrap gap-1">
			{#each locales as loc (loc.value)}
				<Button
					variant={locale === loc.value ? 'default' : 'secondary'}
					size="sm"
					onclick={() => (locale = loc.value)}
					class="h-7 text-xs"
				>
					{loc.label}
				</Button>
			{/each}
		</div>
		<p class="text-muted-foreground mt-2 text-xs">🌍 Right-click to see localized menus</p>
	</div>
</div>
