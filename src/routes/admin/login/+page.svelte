<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { ArrowUpRight, Fingerprint } from 'lucide-svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	const id = $props.id(); // Assuming this is passed down
</script>

<div class="flex items-center justify-center">
	<div class="w-full max-w-md space-y-6 text-center">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">Login</h1>
		<p class="text-muted-foreground leading-7">
			Ensure this device is registered to an existing account.
		</p>
		<div class="flex justify-center gap-2">
			<Input type="text" placeholder="username" />
			<Button variant="destructive" href="/" class="inline-flex items-center gap-2">
				Login
				<Fingerprint class="size-4" />
			</Button>
		</div>
		<Separator />
		<Button variant="ghost" href="/admin/signup" class="inline-flex items-center gap-2">
			Sign Up
			<ArrowUpRight class="size-4" />
		</Button>
		<Button variant="ghost" href="/admin/link" class="inline-flex items-center gap-2">
			Link
			<ArrowUpRight class="size-4" />
		</Button>
	</div>
</div>
