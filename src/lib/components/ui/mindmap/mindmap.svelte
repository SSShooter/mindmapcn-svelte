<script lang="ts">
	import 'mind-elixir/style.css';
	import { onMount, type Snippet } from 'svelte';
	import MindElixir from 'mind-elixir';
	import type { MindElixirData, MindElixirInstance, NodeObj, Options } from 'mind-elixir';
	import { Loader2 } from '@lucide/svelte';
	import { cn } from '$lib/utils.js';
	import { MindMapContext, setMindMapContext } from './context.svelte.js';
	import { createResolvedTheme } from './theme-resolve.svelte.js';
	import { getTheme } from './themes.js';
	import type { MindMapDirection, MindMapLocale, MindMapMarkdownParser, MindMapTheme } from './types.js';

	const SIDE: MindMapDirection = 2;

	interface Props {
		/** Map data. Updates refresh the map (unless they came from onChange). */
		data?: MindElixirData;
		class?: string;
		/** Layout direction: 0 left, 1 right, 2 side (both). */
		direction?: MindMapDirection;
		/** Enable right-click context menu. */
		contextMenu?: boolean;
		/** Enable keyboard shortcuts. */
		keypress?: boolean;
		/** Language for built-in menus. */
		locale?: MindMapLocale;
		/** Clip overflow content. */
		overflowHidden?: boolean;
		/** Force light/dark. If omitted, follows document/system theme. */
		theme?: MindMapTheme;
		/** Single-color branch palette. */
		monochrome?: boolean;
		/** Fit map to view on load. */
		fit?: boolean;
		/** Disable editing. */
		readonly?: boolean;
		/** Tighter node spacing. */
		compact?: boolean;
		/** Custom markdown parser for node topics. */
		markdown?: MindMapMarkdownParser;
		/** Rewrite remote image URLs for export (CORS). */
		imageProxy?: (url: string) => string;
		/** Fired when map data changes due to an operation. */
		onChange?: (data: MindElixirData, operation: unknown) => void;
		/** Fired for each Mind Elixir operation. */
		onOperation?: (operation: unknown) => void;
		/** Fired when nodes are selected. */
		onSelectNodes?: (nodes: NodeObj[]) => void;
		/** Custom loading snippet (fallback: default spinner). */
		loader?: Snippet;
		children?: Snippet;
	}

	let {
		data,
		class: className,
		direction = SIDE,
		contextMenu = true,
		keypress = true,
		locale = 'en',
		overflowHidden = false,
		theme: themeProp,
		monochrome = false,
		fit = true,
		readonly = false,
		compact = false,
		markdown,
		imageProxy,
		onChange,
		onOperation,
		onSelectNodes,
		loader,
		children
	}: Props = $props();

	const ctx = setMindMapContext(new MindMapContext());
	const resolvedTheme = createResolvedTheme(() => themeProp);

	let containerEl = $state<HTMLDivElement | null>(null);
	let mindRef = $state<MindElixirInstance | null>(null);
	let isInternalChange = false;
	let compactInitialized = false;
	let parsersInitialized = false;
	let mapId = `mindmap-${Math.random().toString(36).slice(2, 10)}`;

	/** Imperative access for `bind:this` consumers. */
	export function getInstance(): MindElixirInstance | null {
		return mindRef;
	}

	onMount(() => {
		if (!containerEl || mindRef) return;

		const initialData = data ?? MindElixir.new('Mind Map');
		const themeToUse =
			initialData.theme ?? getTheme(resolvedTheme.current === 'dark', monochrome);

		const options: Options = {
			el: containerEl,
			direction,
			contextMenu,
			toolBar: false,
			keypress,
			locale,
			overflowHidden,
			editable: !readonly,
			compact,
			alignment: 'nodes',
			theme: themeToUse,
			// Read latest props via closures — destructured $props stay up to date
			markdown: markdown
				? (text, obj) => markdown?.(text, obj) ?? text
				: undefined,
			imageProxy: imageProxy ? (url) => imageProxy?.(url) ?? url : undefined
		};

		try {
			const mind = new MindElixir(options);
			mind.init(initialData);

			mindRef = mind;
			ctx.mind = mind;
			ctx.isLoaded = true;

			if (fit) {
				mind.scaleFit();
			}

			mind.bus.addListener('operation', (operation) => {
				onOperation?.(operation);
				if (onChange) {
					const updatedData = mind.getData();
					isInternalChange = true;
					onChange(updatedData, operation);
				}
			});

			mind.bus.addListener('selectNodes', (nodeObj) => {
				onSelectNodes?.(nodeObj);
			});
		} catch (error) {
			console.error('Failed to initialize MindElixir:', error);
		}

		return () => {
			mindRef = null;
			ctx.mind = null;
			ctx.isLoaded = false;
		};
	});

	// Refresh data when prop changes (skip internal onChange echoes)
	$effect(() => {
		const next = data;
		if (!mindRef || !ctx.isLoaded || !next) return;
		if (isInternalChange) {
			isInternalChange = false;
			return;
		}
		mindRef.refresh(next);
	});

	// Theme updates (data.theme has highest priority)
	$effect(() => {
		if (!mindRef || !ctx.isLoaded) return;
		if (data?.theme) return;
		const newTheme = getTheme(resolvedTheme.current === 'dark', monochrome);
		mindRef.changeTheme(newTheme);
	});

	// Compact mode after init
	$effect(() => {
		if (!mindRef || !ctx.isLoaded) return;
		if (!compactInitialized) {
			compactInitialized = true;
			return;
		}
		mindRef.changeCompact(compact);
	});

	// Editable / readonly after init
	$effect(() => {
		if (!mindRef || !ctx.isLoaded) return;
		mindRef.editable = !readonly;
	});

	// Keep markdown / imageProxy in sync without re-init
	$effect(() => {
		if (!mindRef || !ctx.isLoaded) return;
		mindRef.markdown = markdown ? (text, obj) => markdown(text, obj) : undefined;
		mindRef.imageProxy = imageProxy ? (url) => imageProxy(url) : undefined;
		if (!parsersInitialized) {
			parsersInitialized = true;
			return;
		}
		mindRef.refresh();
	});
</script>

<div class={cn('relative h-full w-full', className)}>
	<div
		bind:this={containerEl}
		id={mapId}
		class="bg-background h-full w-full overflow-hidden rounded-lg"
	></div>

	{#if !ctx.isLoaded}
		{#if loader}
			{@render loader()}
		{:else}
			<div
				class="bg-background/80 absolute inset-0 flex items-center justify-center backdrop-blur-sm"
			>
				<Loader2 class="text-muted-foreground size-8 animate-spin" />
			</div>
		{/if}
	{/if}

	{#if children}
		{@render children()}
	{/if}
</div>
