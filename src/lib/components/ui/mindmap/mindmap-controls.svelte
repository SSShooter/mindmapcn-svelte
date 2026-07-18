<script lang="ts">
	import { onMount } from 'svelte';
	import { Download, Maximize, Minus, Plus, ScanSearch } from '@lucide/svelte';
	import { snapdom, type SnapdomOptions } from '@zumer/snapdom';
	import { cn } from '$lib/utils.js';
	import { useMindMap } from './context.svelte.js';
	import type { MindMapControlsPosition } from './types.js';

	interface Props {
		position?: MindMapControlsPosition;
		showZoom?: boolean;
		showFit?: boolean;
		showExport?: boolean;
		class?: string;
		onExport?: (file: Blob, filename: string) => void;
	}

	let {
		position = 'top-right',
		showZoom = true,
		showFit = true,
		showExport = true,
		class: className,
		onExport
	}: Props = $props();

	const ctx = useMindMap();
	let mounted = $state(false);
	let isFullscreen = $state(false);

	const positionClasses: Record<MindMapControlsPosition, string> = {
		'top-left': 'top-3 left-3',
		'top-right': 'top-3 right-3',
		'bottom-left': 'bottom-3 left-3',
		'bottom-right': 'bottom-3 right-3'
	};

	const btnClass =
		'size-8 rounded-md bg-background/95 backdrop-blur-md border border-border/50 shadow-lg flex items-center justify-center hover:bg-accent transition-colors';

	onMount(() => {
		const timer = setTimeout(() => {
			mounted = true;
		}, 0);

		const handleFullscreenChange = () => {
			const isNowFullscreen = !!document.fullscreenElement;
			isFullscreen = isNowFullscreen;
			if (!isNowFullscreen && ctx.mind) {
				ctx.mind.scaleFit();
			}
		};
		document.addEventListener('fullscreenchange', handleFullscreenChange);

		return () => {
			clearTimeout(timer);
			document.removeEventListener('fullscreenchange', handleFullscreenChange);
		};
	});

	function handleZoomIn() {
		if (!ctx.mind) return;
		const currentScale = ctx.mind.scaleVal || 1;
		ctx.mind.scale(currentScale + 0.2);
	}

	function handleZoomOut() {
		if (!ctx.mind) return;
		const currentScale = ctx.mind.scaleVal || 1;
		ctx.mind.scale(Math.max(0.2, currentScale - 0.2));
	}

	function handleFit() {
		ctx.mind?.scaleFit();
	}

	async function handleExport() {
		if (!ctx.mind) return;
		try {
			const result = await snapdom(ctx.mind.nodes);
			const rootTopic = ctx.mind.nodeData.topic || 'mindmap';
			const filename = `${rootTopic}.jpg`;
			const options = {
				type: 'jpg',
				filename: rootTopic,
				quality: 1,
				backgroundColor: ctx.mind.theme.cssVar['--bgcolor']
			} as SnapdomOptions;

			if (onExport) {
				const blob = await result.toBlob(options);
				onExport(blob, filename);
			}

			await result.download(options);
		} catch (error) {
			console.error('Failed to export mind map:', error);
		}
	}

	function handleFullscreen() {
		const container = ctx.mind?.container?.parentElement;
		if (!container) return;

		if (!document.fullscreenElement) {
			container
				.requestFullscreen()
				.then(() => {
					isFullscreen = true;
				})
				.catch((err) => {
					console.error('Failed to enter fullscreen:', err);
				});
		} else {
			document.exitFullscreen().then(() => {
				isFullscreen = false;
			});
		}
	}
</script>

{#if mounted && ctx.isLoaded}
	<div class={cn('absolute z-10 flex flex-col gap-1', positionClasses[position], className)}>
		{#if showZoom}
			<button type="button" onclick={handleZoomIn} class={btnClass} aria-label="Zoom in">
				<Plus class="size-4" />
			</button>
			<button type="button" onclick={handleZoomOut} class={btnClass} aria-label="Zoom out">
				<Minus class="size-4" />
			</button>
		{/if}
		{#if showFit}
			<button type="button" onclick={handleFit} class={btnClass} aria-label="Fit to screen">
				<ScanSearch class="size-4" />
			</button>
		{/if}
		<button
			type="button"
			onclick={handleFullscreen}
			class={btnClass}
			aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
		>
			<Maximize class="size-4" />
		</button>
		{#if showExport}
			<button
				type="button"
				onclick={handleExport}
				class={btnClass}
				aria-label="Download as image"
			>
				<Download class="size-4" />
			</button>
		{/if}
	</div>
{/if}
