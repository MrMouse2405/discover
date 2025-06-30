<script lang="ts">
	import * as ContextMenu from '$lib/components/ui/context-menu/index.js';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { DatabaseZapIcon } from 'lucide-svelte';
</script>

{#snippet NavBarButton(name: string, href: string)}
	<NavigationMenu.Item>
		<NavigationMenu.Link {href}>
			{name}
		</NavigationMenu.Link>
	</NavigationMenu.Item>
{/snippet}

{#snippet NavBarIconButton()}
	<NavigationMenu.Item>
		<NavigationMenu.Link href="/">
			<DatabaseZapIcon class="text-foreground" />
		</NavigationMenu.Link>
	</NavigationMenu.Item>
{/snippet}

{#snippet NavBar()}
	<NavigationMenu.Root>
		<NavigationMenu.List>
			<ContextMenu.Root>
				<ContextMenu.Trigger>
					{@render NavBarIconButton()}
				</ContextMenu.Trigger>
				<ContextMenu.Content>
					<ContextMenu.Item><a href='/admin'>Manage</a></ContextMenu.Item>
				</ContextMenu.Content>
			</ContextMenu.Root>
			{@render NavBarButton('Discover', '/discover')}
			{@render NavBarButton('About', '/about')}
		</NavigationMenu.List>
	</NavigationMenu.Root>
{/snippet}

<div class="flex w-screen flex-row pb-4">
	{@render NavBar()}
</div>
