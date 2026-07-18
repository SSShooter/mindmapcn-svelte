<script lang="ts">
	import { MindMap, MindMapControls, type MindElixirData } from '$lib/components/ui/mindmap/index.js';
	import ExampleCard from './example-card.svelte';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();

	const decisionTreeData: MindElixirData = {
		nodeData: {
			id: 'root',
			topic: 'Choose Tech Stack',
			children: [
				{
					id: 'type',
					topic: 'Project Type?',
					direction: 0,
					children: [
						{
							id: 'web-app',
							topic: 'Web App',
							children: [
								{
									id: 'react',
									topic: 'React + Next.js',
									style: { background: '#10b981', color: '#fff' },
									children: [
										{ id: 'react-ts', topic: 'TypeScript' },
										{ id: 'react-tailwind', topic: 'Tailwind CSS' }
									]
								},
								{
									id: 'vue',
									topic: 'Vue + Nuxt',
									style: { background: '#10b981', color: '#fff' },
									children: [
										{ id: 'vue-ts', topic: 'TypeScript' },
										{ id: 'vue-scss', topic: 'SCSS' }
									]
								},
								{
									id: 'svelte',
									topic: 'Svelte + SvelteKit',
									style: { background: '#10b981', color: '#fff' },
									children: [{ id: 'svelte-ts', topic: 'TypeScript' }]
								}
							]
						},
						{
							id: 'mobile',
							topic: 'Mobile App',
							children: [
								{
									id: 'rn',
									topic: 'React Native',
									style: { background: '#10b981', color: '#fff' },
									children: [
										{ id: 'rn-expo', topic: 'Expo' },
										{ id: 'rn-bare', topic: 'Bare Workflow' }
									]
								},
								{
									id: 'flutter',
									topic: 'Flutter',
									style: { background: '#10b981', color: '#fff' },
									children: [
										{ id: 'flutter-dart', topic: 'Dart' },
										{ id: 'flutter-bloc', topic: 'BLoC Pattern' }
									]
								}
							]
						},
						{
							id: 'desktop',
							topic: 'Desktop App',
							children: [
								{
									id: 'electron',
									topic: 'Electron',
									style: { background: '#10b981', color: '#fff' }
								},
								{
									id: 'tauri',
									topic: 'Tauri',
									style: { background: '#10b981', color: '#fff' }
								}
							]
						}
					]
				},
				{
					id: 'scale',
					topic: 'Scale?',
					direction: 1,
					children: [
						{
							id: 'small',
							topic: 'Small/MVP',
							children: [
								{
									id: 'serverless',
									topic: 'Serverless',
									style: { background: '#3b82f6', color: '#fff' },
									children: [
										{ id: 'vercel', topic: 'Vercel' },
										{ id: 'netlify', topic: 'Netlify' },
										{ id: 'aws-lambda', topic: 'AWS Lambda' }
									]
								},
								{
									id: 'small-db',
									topic: 'Database',
									children: [
										{ id: 'sqlite', topic: 'SQLite' },
										{ id: 'supabase', topic: 'Supabase' }
									]
								}
							]
						},
						{
							id: 'large',
							topic: 'Large/Enterprise',
							children: [
								{
									id: 'microservices',
									topic: 'Microservices',
									style: { background: '#3b82f6', color: '#fff' },
									children: [
										{ id: 'k8s', topic: 'Kubernetes' },
										{ id: 'docker', topic: 'Docker' },
										{ id: 'service-mesh', topic: 'Service Mesh' }
									]
								},
								{
									id: 'large-db',
									topic: 'Database',
									children: [
										{ id: 'postgres', topic: 'PostgreSQL' },
										{ id: 'mongodb', topic: 'MongoDB' },
										{ id: 'redis', topic: 'Redis Cache' }
									]
								},
								{
									id: 'testing',
									topic: 'Testing',
									children: [
										{ id: 'unit', topic: 'Unit Tests' },
										{ id: 'e2e', topic: 'E2E Tests' },
										{ id: 'integration', topic: 'Integration Tests' }
									]
								}
							]
						}
					]
				}
			]
		},
		summaries: [
			{
				id: 'summary1',
				parent: 'web-app',
				start: 0,
				end: 2,
				label: 'Frontend Options',
				style: { stroke: '#10b981', labelColor: '#10b981' }
			},
			{
				id: 'summary2',
				parent: 'small',
				start: 0,
				end: 1,
				label: 'Infrastructure Choices',
				style: { stroke: '#3b82f6', labelColor: '#3b82f6' }
			},
			{
				id: 'summary3',
				parent: 'large',
				start: 0,
				end: 2,
				label: 'Backend Options',
				style: { stroke: '#8b5cf6', labelColor: '#8b5cf6' }
			}
		]
	};
</script>

<ExampleCard label="Readonly Decision Tree" class={className} delay="delay-800">
	<MindMap data={decisionTreeData} class="h-full" readonly>
		<MindMapControls position="top-right" showExport={false} />
	</MindMap>
</ExampleCard>
