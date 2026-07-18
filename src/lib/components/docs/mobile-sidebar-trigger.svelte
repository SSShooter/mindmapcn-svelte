<script lang="ts">
	import { Menu } from '@lucide/svelte';

	interface Props {
		onclick?: () => void;
	}

	let { onclick }: Props = $props();
</script>

<button
	type="button"
	class="hover:bg-muted inline-flex size-8 items-center justify-center rounded-md md:hidden"
	{onclick}
	aria-label="Toggle docs navigation"
>
	<Menu class="size-4" />
</button>
