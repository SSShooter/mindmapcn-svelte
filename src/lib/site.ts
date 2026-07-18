export const siteUrl = 'https://mindmapcn-svelte.vercel.app';
export const siteName = 'mindmapcn-svelte';
export const siteDescription =
	'A collection of beautifully designed, accessible, and customizable mind map components for Svelte. Built on mind-elixir. Styled with Tailwind CSS. Works with shadcn-svelte.';

/** Upstream React project this port is based on. */
export const upstreamRepo = 'https://github.com/ssshooter/mindmapcn';
/** Prefer this project's repo when published; falls back to upstream for stars/links. */
export const githubRepo = 'https://github.com/ssshooter/mindmapcn-svelte';
export const githubAuthor = 'https://github.com/ssshooter';

/** Install command (shadcn-style registry). Point at your hosted registry when published. */
export const installCommand = `npx shadcn-svelte@latest add ${siteUrl}/mindmaps/mindmap.json`;
