<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import TopBar from './topbar.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>BloxDB</title>
	<meta charset="UTF-8" />
	<meta name="description" content="Discover thousands's of community curated roblox games." />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<ModeWatcher />
<div class="flex flex-col p-4">
	<TopBar />
	{@render children?.()}
</div>
