import { onMount } from 'svelte';

export type ResolvedTheme = 'light' | 'dark';

function getDocumentTheme(): ResolvedTheme | null {
	if (typeof document === 'undefined') return null;
	if (document.documentElement.classList.contains('dark')) return 'dark';
	if (document.documentElement.classList.contains('light')) return 'light';
	return null;
}

function getSystemTheme(): ResolvedTheme {
	if (typeof window === 'undefined') return 'light';
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Resolve light/dark theme from an explicit prop, document class, or system preference.
 * Mirrors mindmapcn-svelte's resolved-theme behavior (from the original mindmapcn design).
 */
export function createResolvedTheme(getThemeProp: () => ResolvedTheme | undefined) {
	let detected = $state<ResolvedTheme>(
		typeof document !== 'undefined' ? (getDocumentTheme() ?? getSystemTheme()) : 'light'
	);

	onMount(() => {
		const themeProp = getThemeProp();
		if (themeProp) return;

		const observer = new MutationObserver(() => {
			const docTheme = getDocumentTheme();
			if (docTheme) {
				detected = docTheme;
			}
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleSystemChange = (e: MediaQueryListEvent) => {
			if (!getDocumentTheme()) {
				detected = e.matches ? 'dark' : 'light';
			}
		};
		mediaQuery.addEventListener('change', handleSystemChange);

		// Sync once on mount in case SSR default differed
		detected = getDocumentTheme() ?? getSystemTheme();

		return () => {
			observer.disconnect();
			mediaQuery.removeEventListener('change', handleSystemChange);
		};
	});

	return {
		get current(): ResolvedTheme {
			return getThemeProp() ?? detected;
		}
	};
}
