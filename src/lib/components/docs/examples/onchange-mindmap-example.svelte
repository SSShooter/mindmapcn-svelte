<script lang="ts">
	import { MindMap, MindMapControls, type MindElixirData } from '$lib/components/ui/mindmap/index.js';

	const initialData: MindElixirData = {
		nodeData: {
			id: 'root',
			topic: 'My Project',
			children: [
				{ id: 'sub1', topic: 'Planning' },
				{ id: 'sub2', topic: 'Development' }
			]
		}
	};

	let data = $state<MindElixirData>(initialData);
	let operationCount = $state(0);
	let recentOperations = $state<string[]>([]);
</script>

<div class="bg-background relative h-[400px] w-full overflow-hidden rounded-lg border">
	<MindMap
		{data}
		onChange={(newData, operation) => {
			data = newData;
			operationCount += 1;
			if (operation && typeof operation === 'object' && 'name' in operation) {
				const opName = (operation as { name: string }).name;
				recentOperations = [opName, ...recentOperations].slice(0, 2);
			}
		}}
	>
		<MindMapControls />
	</MindMap>
	<div
		class="bg-background/95 border-border/50 absolute bottom-3 left-3 z-10 max-w-[240px] rounded-md border p-3 shadow-lg backdrop-blur-md"
	>
		<p class="text-muted-foreground mb-1 text-sm">
			Operations:
			<span class="text-foreground font-mono font-semibold">{operationCount}</span>
		</p>
		{#if recentOperations.length > 0}
			<div class="text-muted-foreground mb-1 space-y-0.5 text-xs">
				{#each recentOperations as op, index (index)}
					<p>
						{index === 0 ? 'Last' : 'Prev'}:
						<span class="text-foreground font-mono">{op}</span>
					</p>
				{/each}
			</div>
		{/if}
		<p class="text-muted-foreground text-xs">Try adding, editing, or deleting nodes</p>
	</div>
</div>
