<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Hero from '$lib/components/home/hero.svelte';
	import Examples from '$lib/components/home/examples.svelte';
	import Footer from '$lib/components/home/footer.svelte';
</script>

<svelte:head>
	<title>mindmapcn-svelte - Beautiful mind maps made simple</title>
</svelte:head>

<div class="bg-background flex min-h-screen flex-col overflow-x-hidden">
	<Header class="mx-auto w-full max-w-5xl" />

	<main class="mx-auto w-full flex-1 px-6 py-20">
		<section class="mx-auto w-full max-w-5xl space-y-20">
			<Hero />
			<Examples />
		</section>
	</main>

	<Footer />
</div>
