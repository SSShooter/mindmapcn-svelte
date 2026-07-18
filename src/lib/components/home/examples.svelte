<script lang="ts">
	import OrganizationalChart from './organizational-chart.svelte';
	import ProjectPlanning from './project-planning.svelte';
	import KnowledgeGraph from './knowledge-graph.svelte';
	import DecisionTree from './decision-tree.svelte';
</script>

<div
	class="animate-fade-in delay-400 grid auto-rows-[22rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[20rem] lg:grid-cols-3"
>
	<OrganizationalChart class="sm:col-span-2 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3" />
	<ProjectPlanning class="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2" />
	<KnowledgeGraph class="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2" />
	<DecisionTree class="lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3" />
</div>
