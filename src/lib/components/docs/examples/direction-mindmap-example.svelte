<script lang="ts">
	import { MindMap, MindMapControls, type MindElixirData } from '$lib/components/ui/mindmap/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	const projectData: MindElixirData = {
		nodeData: {
			id: 'root',
			topic: 'Web App Development',
			children: [
				{
					id: 'frontend',
					topic: 'Frontend',
					children: [
						{ id: 'react', topic: 'React' },
						{ id: 'nextjs', topic: 'Next.js' }
					]
				},
				{
					id: 'backend',
					topic: 'Backend',
					children: [
						{ id: 'nodejs', topic: 'Node.js' },
						{ id: 'database', topic: 'Database' }
					]
				}
			]
		}
	};

	let direction = $state<0 | 1 | 2>(1);

	const directionLabels = {
		0: 'Left',
		1: 'Right',
		2: 'Both Sides'
	} as const;
</script>

<div class="bg-background relative h-[400px] w-full overflow-hidden rounded-lg border">
	{#key direction}
		<MindMap data={projectData} {direction}>
			<MindMapControls />
		</MindMap>
	{/key}
	<div
		class="bg-background/95 border-border/50 absolute top-3 left-3 z-10 rounded-md border p-3 shadow-lg backdrop-blur-md"
	>
		<p class="text-muted-foreground mb-2 text-xs">Layout Direction:</p>
		<div class="flex gap-2">
			{#each [0, 1, 2] as dir (dir)}
				<Button
					variant={direction === dir ? 'default' : 'secondary'}
					size="sm"
					onclick={() => (direction = dir as 0 | 1 | 2)}
					class="text-xs"
				>
					{directionLabels[dir as 0 | 1 | 2]}
				</Button>
			{/each}
		</div>
	</div>
</div>
