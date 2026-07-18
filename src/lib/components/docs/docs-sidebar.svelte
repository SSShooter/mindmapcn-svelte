<script lang="ts">
	import { page } from '$app/state';
	import { BookOpen, Bot, Braces, Code, Database, Map } from '@lucide/svelte';
	import { cn } from '$lib/utils.js';

	interface Props {
		mobileOpen?: boolean;
		onCloseMobile?: () => void;
	}

	let { mobileOpen = false, onCloseMobile }: Props = $props();

	const navigation = [
		{
			title: 'Basics',
			items: [
				{ title: 'Introduction', href: '/docs', icon: BookOpen },
				{ title: 'Installation', href: '/docs/installation', icon: Code },
				{ title: 'llms.txt', href: '/llms.txt', icon: Bot },
				{ title: 'Usage', href: '/docs/usage', icon: Map },
				{ title: 'Data Structure', href: '/docs/data-structure', icon: Database },
				{ title: 'API Reference', href: '/docs/api-reference', icon: Braces }
			]
		}
	];

	function isActive(href: string) {
		return page.url.pathname === href;
	}
</script>

{#snippet navList(onNavigate?: () => void)}
	<nav class="space-y-6 overflow-y-auto px-4 pt-6 pb-10">
		{#each navigation as group (group.title)}
			<div>
				<p
					class="text-muted-foreground/70 mb-2 px-2 text-[11px] font-medium tracking-wider uppercase"
				>
					{group.title}
				</p>
				<ul class="space-y-0.5">
					{#each group.items as item (item.href)}
						<li>
							<a
								href={item.href}
								onclick={() => onNavigate?.()}
								class={cn(
									'flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors',
									isActive(item.href)
										? 'text-foreground bg-muted font-medium'
										: 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
								)}
							>
								<item.icon class="size-4" />
								<span>{item.title}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</nav>
{/snippet}

<aside
	class="border-border/60 sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 border-r md:block"
>
	{@render navList()}
</aside>

{#if mobileOpen}
	<div class="fixed inset-0 z-40 md:hidden">
		<button
			type="button"
			class="absolute inset-0 bg-black/40"
			aria-label="Close navigation"
			onclick={() => onCloseMobile?.()}
		></button>
		<aside
			class="bg-background border-border absolute top-14 left-0 h-[calc(100vh-3.5rem)] w-72 border-r shadow-lg"
		>
			{@render navList(onCloseMobile)}
		</aside>
	</div>
{/if}
