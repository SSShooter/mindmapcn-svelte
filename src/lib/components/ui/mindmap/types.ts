import type {
	MindElixirData,
	MindElixirInstance,
	NodeObj,
	Options
} from 'mind-elixir';

/** Custom markdown parser — same signature as Mind Elixir `Options.markdown`. */
export type MindMapMarkdownParser = NonNullable<Options['markdown']>;

export type MindMapData = MindElixirData;

export type MindMapLocale = 'en' | 'zh_CN' | 'zh_TW' | 'ja' | 'pt';

export type MindMapDirection = 0 | 1 | 2;

export type MindMapTheme = 'light' | 'dark';

export type MindMapControlsPosition =
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right';

/** Imperative handle exposed via bind:this on MindMap. */
export interface MindMapRef {
	readonly instance: MindElixirInstance | null;
	readonly isLoaded: boolean;
}

export type {
	MindElixirData,
	MindElixirInstance,
	NodeObj,
	Options
};
