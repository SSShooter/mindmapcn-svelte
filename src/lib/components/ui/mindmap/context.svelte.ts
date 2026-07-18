import { getContext, setContext } from 'svelte';
import type { MindElixirInstance } from 'mind-elixir';

const MINDMAP_CONTEXT_KEY = Symbol('mindmapcn-svelte');

/** Reactive context shared between MindMap and child controls. */
export class MindMapContext {
	mind = $state<MindElixirInstance | null>(null);
	isLoaded = $state(false);
}

export function setMindMapContext(ctx: MindMapContext): MindMapContext {
	return setContext(MINDMAP_CONTEXT_KEY, ctx);
}

export function useMindMap(): MindMapContext {
	const ctx = getContext<MindMapContext | undefined>(MINDMAP_CONTEXT_KEY);
	if (!ctx) {
		throw new Error('useMindMap must be used within a MindMap component');
	}
	return ctx;
}
