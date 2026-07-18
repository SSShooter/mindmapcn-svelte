<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { ArrowRight } from '@lucide/svelte';
	import InstallCodeBlock from '$lib/components/docs/install-code-block.svelte';
	import { installCommand } from '$lib/site.js';
</script>

<div class="space-y-8">
	<div class="space-y-4 text-center">
		<h1 class="animate-fade-up text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
			Beautiful mind maps, effortlessly
		</h1>
		<p class="text-foreground/80 animate-fade-up delay-100 mx-auto max-w-xl text-lg">
			Beautiful mind map components based on
			<span class="text-foreground font-semibold">Mind Elixir</span>. One command to install,
			zero config to start. Built for
			<span class="text-foreground font-semibold">Svelte</span> &
			<span class="text-foreground font-semibold">shadcn-svelte</span>.
		</p>
	</div>

	<div class="animate-fade-up delay-200 flex w-full justify-center px-4">
		<div class="w-full max-w-3xl">
			<InstallCodeBlock command={installCommand} />
		</div>
	</div>

	<div class="animate-fade-up delay-300 flex flex-wrap items-center justify-center gap-3">
		<Button href="/docs">
			Get Started <ArrowRight class="size-4" />
		</Button>
		<Button variant="outline" size="lg" href="/docs/usage">Explore Examples</Button>
	</div>
</div>
