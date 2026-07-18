<script lang="ts">
	import { MindMap, MindMapControls, type MindElixirData } from '$lib/components/ui/mindmap/index.js';
	import ExampleCard from './example-card.svelte';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();

	const organizationalData: MindElixirData = {
		nodeData: {
			id: 'root',
			topic: 'TechVision Global',
			children: [
				{
					id: 'ceo',
					topic: 'CEO - Chief Executive',
					direction: 0,
					icons: ['👔'],
					children: [
						{
							id: 'cto',
							topic: 'CTO - Technology',
							icons: ['💻'],
							children: [
								{
									id: 'engineering',
									topic: 'Engineering Division',
									icons: ['⚙️'],
									children: [
										{
											id: 'frontend',
											topic: 'Frontend Team',
											children: [
												{ id: 'react-team', topic: 'React Developers', icons: ['⚛️'] },
												{ id: 'vue-team', topic: 'Vue Developers', icons: ['🟢'] },
												{ id: 'mobile-team', topic: 'Mobile Developers', icons: ['📱'] }
											]
										},
										{
											id: 'backend',
											topic: 'Backend Team',
											children: [
												{ id: 'api-team', topic: 'API Development', icons: ['🔌'] },
												{ id: 'database-team', topic: 'Database Team', icons: ['🗄️'] },
												{ id: 'microservices', topic: 'Microservices', icons: ['🔧'] }
											]
										},
										{
											id: 'devops',
											topic: 'DevOps Team',
											children: [
												{ id: 'ci-cd', topic: 'CI/CD Pipeline', icons: ['🔄'] },
												{ id: 'cloud-infra', topic: 'Cloud Infrastructure', icons: ['☁️'] },
												{ id: 'monitoring', topic: 'Monitoring & Logging', icons: ['📊'] }
											]
										}
									]
								},
								{
									id: 'qa',
									topic: 'Quality Assurance',
									icons: ['✅'],
									children: [
										{ id: 'qa-manual', topic: 'Manual Testing', icons: ['🧪'] },
										{ id: 'qa-automation', topic: 'Test Automation', icons: ['🤖'] },
										{ id: 'qa-performance', topic: 'Performance Testing', icons: ['⚡'] }
									]
								},
								{
									id: 'security',
									topic: 'Security Team',
									icons: ['🔒'],
									children: [
										{ id: 'appsec', topic: 'Application Security', icons: ['🛡️'] },
										{ id: 'infrasec', topic: 'Infrastructure Security', icons: ['🔐'] }
									]
								}
							]
						},
						{
							id: 'cfo',
							topic: 'CFO - Finance',
							icons: ['💰'],
							children: [
								{
									id: 'accounting',
									topic: 'Accounting Department',
									icons: ['📊'],
									children: [
										{ id: 'payroll', topic: 'Payroll', icons: ['💵'] },
										{ id: 'ap', topic: 'Accounts Payable', icons: ['📤'] },
										{ id: 'ar', topic: 'Accounts Receivable', icons: ['📥'] }
									]
								},
								{
									id: 'finance',
									topic: 'Financial Planning',
									icons: ['📈'],
									children: [
										{ id: 'budgeting', topic: 'Budgeting', icons: ['💼'] },
										{ id: 'forecasting', topic: 'Forecasting', icons: ['🔮'] },
										{ id: 'investment', topic: 'Investment Analysis', icons: ['📉'] }
									]
								}
							]
						},
						{
							id: 'cmo',
							topic: 'CMO - Marketing',
							icons: ['📢'],
							children: [
								{
									id: 'digital-marketing',
									topic: 'Digital Marketing',
									icons: ['🌐'],
									children: [
										{ id: 'seo', topic: 'SEO Team', icons: ['🔍'] },
										{ id: 'social-media', topic: 'Social Media', icons: ['📱'] },
										{ id: 'content', topic: 'Content Creation', icons: ['✍️'] }
									]
								},
								{
									id: 'brand',
									topic: 'Brand Management',
									icons: ['🎨'],
									children: [
										{ id: 'design', topic: 'Design Team', icons: ['🖌️'] },
										{ id: 'pr', topic: 'Public Relations', icons: ['📰'] }
									]
								}
							]
						}
					]
				},
				{
					id: 'coo',
					topic: 'COO - Operations',
					direction: 1,
					icons: ['⚡'],
					children: [
						{
							id: 'hr',
							topic: 'Human Resources',
							icons: ['👥'],
							children: [
								{
									id: 'talent',
									topic: 'Talent Acquisition',
									icons: ['🎯'],
									children: [
										{ id: 'recruiting', topic: 'Recruiting Team', icons: ['🔎'] },
										{ id: 'onboarding', topic: 'Onboarding', icons: ['👋'] }
									]
								},
								{
									id: 'development',
									topic: 'Employee Development',
									icons: ['📚'],
									children: [
										{ id: 'training', topic: 'Training Programs', icons: ['🎓'] },
										{ id: 'career', topic: 'Career Development', icons: ['📈'] },
										{ id: 'wellness', topic: 'Employee Wellness', icons: ['🧘'] }
									]
								},
								{
									id: 'compensation',
									topic: 'Compensation & Benefits',
									icons: ['💎'],
									children: [
										{ id: 'benefits', topic: 'Benefits Admin', icons: ['🏥'] },
										{ id: 'rewards', topic: 'Rewards Program', icons: ['🏆'] }
									]
								}
							]
						},
						{
							id: 'ops',
							topic: 'Operations Management',
							icons: ['🔧'],
							children: [
								{
									id: 'customer-success',
									topic: 'Customer Success',
									icons: ['🤝'],
									children: [
										{ id: 'support', topic: 'Customer Support', icons: ['💬'] },
										{ id: 'account-mgmt', topic: 'Account Management', icons: ['👤'] },
										{ id: 'success-team', topic: 'Success Team', icons: ['🌟'] }
									]
								},
								{
									id: 'logistics',
									topic: 'Logistics & Supply',
									icons: ['🚚'],
									children: [
										{ id: 'procurement', topic: 'Procurement', icons: ['🛒'] },
										{ id: 'inventory', topic: 'Inventory Management', icons: ['📦'] },
										{ id: 'shipping', topic: 'Shipping & Delivery', icons: ['✈️'] }
									]
								}
							]
						},
						{
							id: 'product',
							topic: 'Product Management',
							icons: ['🎯'],
							children: [
								{
									id: 'product-strategy',
									topic: 'Product Strategy',
									icons: ['🗺️'],
									children: [
										{ id: 'roadmap', topic: 'Product Roadmap', icons: ['🛣️'] },
										{ id: 'research', topic: 'Market Research', icons: ['🔬'] }
									]
								},
								{
									id: 'ux',
									topic: 'UX/UI Design',
									icons: ['🎨'],
									children: [
										{ id: 'ux-research', topic: 'UX Research', icons: ['🔍'] },
										{ id: 'ui-design', topic: 'UI Design', icons: ['🖼️'] },
										{ id: 'prototyping', topic: 'Prototyping', icons: ['📐'] }
									]
								}
							]
						}
					]
				}
			]
		}
	};

	let mindmapData = $state(organizationalData);
</script>

<ExampleCard label="Organizational Chart" class={className} delay="delay-400">
	<MindMap
		data={mindmapData}
		direction={1}
		class="h-full"
		monochrome
		onChange={(newData) => {
			mindmapData = newData;
		}}
	>
		<MindMapControls position="top-right" />
	</MindMap>
</ExampleCard>
