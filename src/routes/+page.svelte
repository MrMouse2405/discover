<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowUpRight } from 'lucide-svelte';
</script>

<div class="flex justify-center pt-8">
	<div class="flex flex-col gap-4 text-center">
		<h1 class="scroll-m-20 pb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">BloxDB</h1>
		<p class="text-muted-foreground pb-4 text-xl">
			Database of thousands <s>(soon™)</s> of community curated roblox games.
		</p>
		<div class="flex justify-center gap-2">
			<Button variant="default" href="/discover">
				Discover
				<ArrowUpRight class="size-4" />
			</Button>
			<Button variant="link" href="/about">
				How we maintain our list
				<ArrowUpRight class="size-4" />
			</Button>
		</div>
	</div>
</div>
