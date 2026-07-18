<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import DocsCode from './docs-code.svelte';

	export interface PropRow {
		name: string;
		type: string;
		default?: string;
		description: string;
	}

	interface Props {
		props: PropRow[];
	}

	let { props }: Props = $props();
</script>

<div class="my-4 overflow-hidden rounded-lg border">
	<Table.Root>
		<Table.Header>
			<Table.Row class="hover:bg-transparent">
				<Table.Head class="h-11 px-4 font-medium">Prop</Table.Head>
				<Table.Head class="h-11 px-4 font-medium">Type</Table.Head>
				<Table.Head class="h-11 px-4 font-medium">Default</Table.Head>
				<Table.Head class="h-11 px-4 font-medium">Description</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each props as prop (prop.name)}
				<Table.Row>
					<Table.Cell class="text-primary px-4 py-3.5 align-top font-mono">
						<DocsCode class="text-[13px]">{prop.name}</DocsCode>
					</Table.Cell>
					<Table.Cell
						class="text-muted-foreground overflow-hidden px-4 py-3.5 align-top font-mono whitespace-normal"
					>
						<DocsCode class="text-xs">{prop.type}</DocsCode>
					</Table.Cell>
					<Table.Cell class="text-muted-foreground px-4 py-3.5 align-top font-mono whitespace-normal">
						<DocsCode class="text-xs">{prop.default ?? '—'}</DocsCode>
					</Table.Cell>
					<Table.Cell
						class="text-muted-foreground min-w-[180px] px-4 py-3.5 text-sm leading-relaxed whitespace-normal"
					>
						{prop.description}
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
