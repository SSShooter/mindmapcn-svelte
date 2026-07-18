<script lang="ts">
	import { MindMap, MindMapControls, type MindElixirData } from '$lib/components/ui/mindmap/index.js';

	const markdownData: MindElixirData = {
		nodeData: {
			id: 'root',
			topic: '**Product** Launch Plan',
			children: [
				{
					id: 'goals',
					topic: 'Goals',
					children: [
						{ id: 'g1', topic: 'Ship *MVP* in Q3' },
						{ id: 'g2', topic: 'Reach `10k` waitlist signups' }
					]
				},
				{
					id: 'channels',
					topic: 'Channels',
					children: [
						{ id: 'c1', topic: '**Blog** + SEO' },
						{ id: 'c2', topic: 'Launch on *Product Hunt*' },
						{ id: 'c3', topic: 'Partner `newsletter`' }
					]
				},
				{
					id: 'risks',
					topic: 'Risks',
					children: [
						{ id: 'r1', topic: 'Scope *creep*' },
						{ id: 'r2', topic: 'Late **design** polish' }
					]
				}
			]
		}
	};

	/** Minimal demo parser — swap for marked / markdown-it in production. */
	function simpleMarkdown(text: string): string {
		return text
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
			.replace(/\*(.+?)\*/g, '<em>$1</em>')
			.replace(/`(.+?)`/g, '<code>$1</code>');
	}
</script>

<div class="bg-background relative h-[400px] w-full overflow-hidden rounded-lg border">
	<MindMap data={markdownData} readonly markdown={(text) => simpleMarkdown(text)}>
		<MindMapControls showExport={false} />
	</MindMap>
	<div
		class="bg-background/95 border-border/50 absolute bottom-3 left-3 z-10 max-w-xs rounded-md border p-3 shadow-lg backdrop-blur-md"
	>
		<p class="text-muted-foreground text-xs">
			Topics use <code class="text-foreground">**bold**</code>,
			<code class="text-foreground">*italic*</code>, and
			<code class="text-foreground">`code`</code> via a custom
			<code class="text-foreground">markdown</code> parser.
		</p>
	</div>
</div>
