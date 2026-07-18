<script lang="ts">
	import { MindMap, MindMapControls, type MindElixirData } from '$lib/components/ui/mindmap/index.js';

	const initialData: MindElixirData = {
		nodeData: {
			id: 'root',
			topic: 'Mind Map',
			children: [
				{ id: 'sub1', topic: 'Subtopic 1' },
				{ id: 'sub2', topic: 'Subtopic 2' }
			]
		}
	};
</script>

<div class="bg-background relative h-[400px] w-full overflow-hidden rounded-lg border">
	<MindMap data={initialData}>
		<MindMapControls />
	</MindMap>
</div>
