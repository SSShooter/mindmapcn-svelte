<script lang="ts">
	import { highlightCode } from '$lib/highlight.js';
	import CopyButton from './copy-button.svelte';

	interface Props {
		code: string;
		language?: string;
		showCopyButton?: boolean;
	}

	let { code, language = 'svelte', showCopyButton = true }: Props = $props();

	let highlighted = $state('');

	$effect(() => {
		const current = code;
		const lang = language;
		let cancelled = false;
		highlightCode(current, lang).then((html) => {
			if (!cancelled) highlighted = html;
		});
		return () => {
			cancelled = true;
		};
	});
</script>

<div class="w-full overflow-hidden rounded-lg border">
	{#if showCopyButton}
		<div class="bg-muted/30 flex h-9 items-center justify-end border-b px-2">
			<CopyButton text={code} />
		</div>
	{/if}
	<div class="bg-muted/20 overflow-auto p-4 text-sm [&_code]:bg-transparent! [&_pre]:bg-transparent!">
		{#if highlighted}
			{@html highlighted}
		{:else}
			<pre class="font-mono text-sm whitespace-pre-wrap">{code}</pre>
		{/if}
	</div>
</div>
