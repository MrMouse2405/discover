<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Fingerprint } from 'lucide-svelte';

	let username: string = $state('');
	async function GetPublicKeyCredentialCreationOptions() {
		if (username.trim() === '') {
			console.warn('Device nickname is required.');
			return;
		}
		console.log(await fetch('/api/').then((res) => res.json()));
	}
</script>

<div class="flex w-full items-center justify-center px-4">
	<div class="w-full max-w-md space-y-6 text-center">
		<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Register Account</h1>
		<p class="leading-7">
			Create an account to register your device for future logins. An admin must verify your account
			before you can access the dashboard.
		</p>
		<div class="mx-auto flex w-full max-w-sm items-center space-x-2">
			<Input bind:value={username} type="text" placeholder="username" />
			<Button
				onclick={GetPublicKeyCredentialCreationOptions}
				variant="destructive"
				class="inline-flex items-center gap-2"
			>
				Register
				<Fingerprint class="size-4" />
			</Button>
		</div>
		<p class="text-muted-foreground leading-7">
			See
			<super
				><u
					><a href="https://webauthn.guide/" target="_blank" rel="noopener noreferrer"
						>webauthn.guide</a
					></u
				></super
			>
			to learn why we register devices.
		</p>
	</div>
</div>
