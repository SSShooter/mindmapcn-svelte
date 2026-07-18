<script lang="ts">
	interface Props {
		title: string;
		description: string;
	}

	let { title, description }: Props = $props();
</script>

<div class="space-y-3">
	<h1 class="text-3xl font-semibold tracking-tight">{title}</h1>
	<p class="text-muted-foreground text-lg leading-relaxed">{description}</p>
</div>
