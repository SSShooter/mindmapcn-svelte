<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import { siteDescription, siteName } from '$lib/site.js';

	let { children } = $props();
</script>

<svelte:head>
	<title>{siteName} - Beautiful mind maps made simple</title>
	<meta name="description" content={siteDescription} />
	<meta name="author" content="SSShooter" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content="{siteName} - Beautiful mind maps made simple" />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:image" content="/banner.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{siteName} - Beautiful mind maps made simple" />
	<meta name="twitter:image" content="/banner.png" />
	<link rel="icon" href="/icon.png" type="image/png" />
</svelte:head>

<ModeWatcher />
{@render children()}
