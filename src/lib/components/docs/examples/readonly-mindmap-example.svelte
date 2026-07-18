<script lang="ts">
	import { MindMap, MindMapControls, type MindElixirData } from '$lib/components/ui/mindmap/index.js';

	const organizationData: MindElixirData = {
		nodeData: {
			id: 'root',
			topic: 'Organization Structure',
			children: [
				{
					id: 'engineering',
					topic: 'Engineering',
					children: [
						{ id: 'frontend', topic: 'Frontend Team' },
						{ id: 'backend', topic: 'Backend Team' },
						{ id: 'devops', topic: 'DevOps Team' }
					]
				},
				{
					id: 'product',
					topic: 'Product',
					children: [
						{ id: 'design', topic: 'Design Team' },
						{ id: 'pm', topic: 'Product Managers' }
					]
				},
				{
					id: 'sales',
					topic: 'Sales & Marketing',
					children: [
						{ id: 'sales-team', topic: 'Sales Team' },
						{ id: 'marketing', topic: 'Marketing Team' }
					]
				}
			]
		}
	};
</script>

<div class="bg-background relative h-[400px] w-full overflow-hidden rounded-lg border">
	<MindMap data={organizationData} readonly={true}>
		<MindMapControls showExport={false} />
	</MindMap>
	<div
		class="bg-background/95 border-border/50 absolute bottom-3 left-3 z-10 rounded-md border p-3 shadow-lg backdrop-blur-md"
	>
		<p class="text-muted-foreground text-xs">📖 View-only mode - no editing allowed</p>
	</div>
</div>
