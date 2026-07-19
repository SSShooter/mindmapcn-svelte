import { siteUrl } from '$lib/site.js';

export const prerender = true;

/** Public HTML pages to include in the sitemap. Keep in sync with `src/routes`. */
const pages = [
	'/',
	'/docs',
	'/docs/installation',
	'/docs/usage',
	'/docs/data-structure',
	'/docs/api-reference'
] as const;

function loc(path: string): string {
	if (path === '/') return siteUrl;
	return `${siteUrl}${path}`;
}

export function GET() {
	const urls = pages
		.map(
			(path) => `	<url>
		<loc>${loc(path)}</loc>
	</url>`
		)
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
