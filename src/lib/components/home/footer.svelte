<script lang="ts">
	import { githubAuthor, githubRepo } from '$lib/site.js';
</script>

<footer class="border-border/40 w-full border-t px-6 py-6">
	<div
		class="text-muted-foreground mx-auto flex max-w-5xl items-center justify-between text-xs"
	>
		<span>
			Built by{' '}
			<a
				href={githubAuthor}
				target="_blank"
				rel="noopener noreferrer"
				class="text-foreground font-medium hover:underline"
			>
				SSShooter
			</a>
			<span class="text-muted-foreground/70"> · mindmapcn-svelte</span>
		</span>
		<div class="flex items-center gap-4">
			<a
				href={githubRepo}
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-foreground transition-colors"
			>
				GitHub
			</a>
			<a href="/docs" class="hover:text-foreground transition-colors">Docs</a>
		</div>
	</div>
</footer>
