<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
	<p class="text-muted-foreground text-sm tabular-nums">{page.status}</p>
	<h1 class="text-2xl font-semibold tracking-tight">
		{page.error?.message ?? 'Something went wrong'}
	</h1>
	<Button href="/">Back home</Button>
</div>
