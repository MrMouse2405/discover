<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as InputOTP from '$lib/components/ui/input-otp/index.js';
	import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'bits-ui';
	import { Fingerprint } from 'lucide-svelte';
</script>

<div class="flex w-full items-center justify-center px-4">
	<div class="w-full max-w-md space-y-6 text-center">
		<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Link New Device</h1>
		<p class="leading-7">
			Enter your username, and sign in code, to link your current device to your existing account.
		</p>
		<Input type="text" placeholder="username" />
		<div class="mx-auto flex w-full max-w-sm items-center space-x-2">
			<InputOTP.Root maxlength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
				{#snippet children({ cells })}
					<InputOTP.Group>
						{#each cells as cell (cell)}
							<InputOTP.Slot {cell} />
						{/each}
					</InputOTP.Group>
				{/snippet}
			</InputOTP.Root>
			<Button variant="destructive" class="inline-flex items-center gap-2">
				Register
				<Fingerprint class="size-4" />
			</Button>
		</div>
	</div>
</div>
