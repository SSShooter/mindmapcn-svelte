<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		external?: boolean;
		children?: Snippet;
	}

	let { href, external = false, children }: Props = $props();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="text-foreground hover:text-primary font-medium underline underline-offset-4 transition-colors"
>
	{@render children?.()}
</a>
