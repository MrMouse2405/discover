<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button/index';
	import { ArrowUpRight } from 'lucide-svelte';
</script>

<div class="flex justify-center pt-8">
	<div class="flex flex-col gap-4 text-center">
		<h1 class="scroll-m-20 pb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
			{page.status} {page.error?.message}
		</h1>
		<div class="flex justify-center gap-2">
			<Button variant="destructive" href="/">
				Home <ArrowUpRight class="size-4" />
			</Button>
		</div>
	</div>
</div>

