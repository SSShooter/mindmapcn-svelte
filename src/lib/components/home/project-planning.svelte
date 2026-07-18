<script lang="ts">
	import { MindMap, MindMapControls, type MindElixirData } from '$lib/components/ui/mindmap/index.js';
	import ExampleCard from './example-card.svelte';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();

	const projectPlanningData: MindElixirData = {
		nodeData: {
			id: 'root',
			topic: 'Website Redesign',
			children: [
				{
					id: 'research',
					topic: 'Research',
					direction: 0,
					children: [
						{ id: 'user-research', topic: 'User Research', tags: ['Week 1'] },
						{ id: 'competitor', topic: 'Competitor Analysis', tags: ['Week 1'] }
					]
				},
				{
					id: 'design',
					topic: 'Design',
					direction: 0,
					children: [
						{ id: 'wireframes', topic: 'Wireframes', tags: ['Week 2'] },
						{ id: 'mockups', topic: 'Mockups', tags: ['Week 3'] },
						{ id: 'prototype', topic: 'Prototype', tags: ['Week 4'] }
					]
				},
				{
					id: 'development',
					topic: 'Development',
					direction: 1,
					children: [
						{ id: 'frontend', topic: 'Frontend', tags: ['Week 5-6'] },
						{ id: 'backend', topic: 'Backend', tags: ['Week 5-6'] },
						{ id: 'testing', topic: 'Testing', tags: ['Week 7'] }
					]
				},
				{
					id: 'launch',
					topic: 'Launch',
					direction: 1,
					children: [
						{ id: 'deployment', topic: 'Deployment', tags: ['Week 8'] },
						{ id: 'monitoring', topic: 'Monitoring', tags: ['Ongoing'] }
					]
				}
			]
		}
	};
</script>

<ExampleCard label="Project Planning" class={className} delay="delay-500">
	<MindMap data={projectPlanningData} direction={1} class="h-full">
		<MindMapControls position="top-right" showExport={false} />
	</MindMap>
</ExampleCard>
