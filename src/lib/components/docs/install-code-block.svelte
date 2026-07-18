<script lang="ts">
	import { Check, Copy } from '@lucide/svelte';

	interface Props {
		command: string;
		showPrompt?: boolean;
	}

	let { command, showPrompt = true }: Props = $props();

	type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun';

	const packageManagers: { value: PackageManager; label: string }[] = [
		{ value: 'pnpm', label: 'pnpm' },
		{ value: 'npm', label: 'npm' },
		{ value: 'yarn', label: 'yarn' },
		{ value: 'bun', label: 'bun' }
	];

	let activeTab = $state<PackageManager>('pnpm');
	let copied = $state(false);

	function getInstallCommand(pm: PackageManager, cmd: string): string {
		const baseCommand = cmd.replace(/^npx\s+/, '');
		switch (pm) {
			case 'pnpm':
				return `pnpm dlx ${baseCommand}`;
			case 'npm':
				return `npx ${baseCommand}`;
			case 'yarn':
				return `yarn ${baseCommand}`;
			case 'bun':
				return `bunx -bun ${baseCommand}`;
		}
	}

	const currentCommand = $derived(getInstallCommand(activeTab, command));

	function copy() {
		navigator.clipboard.writeText(currentCommand);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<div class="w-full overflow-hidden rounded-lg border">
	<div class="bg-muted/30 flex items-center justify-between border-b">
		<div class="flex items-center gap-1 px-2">
			{#each packageManagers as pm (pm.value)}
				<button
					type="button"
					onclick={() => (activeTab = pm.value)}
					class={`px-3 py-2 text-sm font-medium transition-colors ${
						activeTab === pm.value
							? 'text-foreground border-foreground border-b-2'
							: 'text-muted-foreground hover:text-foreground'
					}`}
				>
					{pm.label}
				</button>
			{/each}
		</div>
		<button
			type="button"
			onclick={copy}
			class="text-muted-foreground hover:text-foreground px-3 py-2 transition-colors"
			aria-label="Copy to clipboard"
		>
			{#if copied}
				<Check class="size-4 text-emerald-500" />
			{:else}
				<Copy class="size-4" />
			{/if}
		</button>
	</div>
	<div class="bg-muted/20 overflow-auto p-4 font-mono text-sm">
		{#if showPrompt}
			<span class="text-muted-foreground/60 mr-2 select-none">$</span>
		{/if}
		<span class="text-foreground/90">{currentCommand}</span>
	</div>
</div>
