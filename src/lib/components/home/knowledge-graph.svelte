<script lang="ts">
	import { MindMap, MindMapControls, type MindElixirData } from '$lib/components/ui/mindmap/index.js';
	import ExampleCard from './example-card.svelte';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();

	const knowledgeGraphData: MindElixirData = {
		nodeData: {
			id: 'root',
			topic: 'Web Development',
			children: [
				{
					id: 'frontend',
					topic: 'Frontend',
					direction: 0,
					children: [
						{
							id: 'html',
							topic: 'HTML',
							children: [
								{ id: 'semantic', topic: 'Semantic HTML' },
								{ id: 'forms', topic: 'Forms' }
							]
						},
						{
							id: 'css',
							topic: 'CSS',
							children: [
								{ id: 'flexbox', topic: 'Flexbox' },
								{ id: 'grid', topic: 'Grid' }
							]
						},
						{
							id: 'js',
							topic: 'JavaScript',
							children: [
								{ id: 'es6', topic: 'ES6+' },
								{ id: 'async', topic: 'Async/Await' }
							]
						}
					]
				},
				{
					id: 'backend',
					topic: 'Backend',
					direction: 1,
					children: [
						{
							id: 'nodejs',
							topic: 'Node.js',
							children: [
								{ id: 'express', topic: 'Express' },
								{ id: 'nestjs', topic: 'NestJS' }
							]
						},
						{
							id: 'database',
							topic: 'Database',
							children: [
								{ id: 'sql', topic: 'SQL' },
								{ id: 'nosql', topic: 'NoSQL' }
							]
						}
					]
				}
			]
		},
		arrows: [
			{
				id: 'arrow1',
				label: 'Styling',
				from: 'html',
				to: 'css',
				delta1: { x: 80, y: 0 },
				delta2: { x: 80, y: 0 },
				style: { stroke: '#3b82f6', strokeWidth: 2, labelColor: '#3b82f6' }
			},
			{
				id: 'arrow2',
				label: 'Interactivity',
				from: 'css',
				to: 'js',
				delta1: { x: 80, y: 0 },
				delta2: { x: 80, y: 0 },
				style: { stroke: '#8b5cf6', strokeWidth: 2, labelColor: '#8b5cf6' }
			},
			{
				id: 'arrow3',
				label: 'Runtime',
				from: 'js',
				to: 'nodejs',
				delta1: { x: 0, y: 30 },
				delta2: { x: 0, y: -30 },
				style: {
					stroke: '#10b981',
					strokeWidth: 2,
					strokeDasharray: '5,5',
					labelColor: '#10b981'
				}
			},
			{
				id: 'arrow4',
				label: 'Persistence',
				from: 'nodejs',
				to: 'database',
				delta1: { x: 80, y: 0 },
				delta2: { x: 80, y: 0 },
				style: { stroke: '#f59e0b', strokeWidth: 2, labelColor: '#f59e0b' }
			},
			{
				id: 'arrow5',
				label: 'API Communication',
				from: 'frontend',
				to: 'backend',
				delta1: { x: 0, y: 40 },
				delta2: { x: 0, y: -40 },
				bidirectional: true,
				style: { stroke: '#ef4444', strokeWidth: 3, labelColor: '#ef4444' }
			}
		]
	};
</script>

<ExampleCard label="Knowledge Graph" class={className} delay="delay-600">
	<MindMap data={knowledgeGraphData} direction={1} class="h-full">
		<MindMapControls position="top-right" showExport={false} />
	</MindMap>
</ExampleCard>
