<script lang="ts">
	import { MindMap, MindMapControls, type MindElixirData } from '$lib/components/ui/mindmap/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	const denseData: MindElixirData = {
		nodeData: {
			id: 'root',
			topic: 'Knowledge Base',
			children: [
				{
					id: 'frontend',
					topic: 'Frontend',
					children: [
						{ id: 'react', topic: 'React' },
						{ id: 'vue', topic: 'Vue' },
						{ id: 'svelte', topic: 'Svelte' },
						{ id: 'css', topic: 'CSS / Tailwind' }
					]
				},
				{
					id: 'backend',
					topic: 'Backend',
					children: [
						{ id: 'node', topic: 'Node.js' },
						{ id: 'go', topic: 'Go' },
						{ id: 'python', topic: 'Python' },
						{ id: 'db', topic: 'Postgres' }
					]
				},
				{
					id: 'ops',
					topic: 'Ops',
					children: [
						{ id: 'ci', topic: 'CI / CD' },
						{ id: 'k8s', topic: 'Kubernetes' },
						{ id: 'obs', topic: 'Observability' }
					]
				},
				{
					id: 'product',
					topic: 'Product',
					children: [
						{ id: 'research', topic: 'Research' },
						{ id: 'roadmap', topic: 'Roadmap' },
						{ id: 'metrics', topic: 'Metrics' }
					]
				}
			]
		}
	};

	let compact = $state(true);
</script>

<div class="bg-background relative h-[400px] w-full overflow-hidden rounded-lg border">
	<MindMap data={denseData} readonly {compact}>
		<MindMapControls showExport={false} />
	</MindMap>
	<div
		class="bg-background/95 border-border/50 absolute top-3 left-3 z-10 rounded-md border p-3 shadow-lg backdrop-blur-md"
	>
		<p class="text-muted-foreground mb-2 text-xs">Layout density</p>
		<div class="flex gap-2">
			<Button
				variant={compact ? 'default' : 'secondary'}
				size="sm"
				onclick={() => (compact = true)}
				class="text-xs"
			>
				Compact
			</Button>
			<Button
				variant={!compact ? 'default' : 'secondary'}
				size="sm"
				onclick={() => (compact = false)}
				class="text-xs"
			>
				Comfortable
			</Button>
		</div>
	</div>
</div>
