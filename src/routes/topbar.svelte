<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';

	import { DatabaseZapIcon } from 'lucide-svelte';

	import { Sun } from 'lucide-svelte';
	import { Moon } from 'lucide-svelte';

	import { resetMode, setMode } from 'mode-watcher';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import * as ToolTip from '$lib/components/ui/tooltip/index';
	import { buttonVariants } from '$lib/components/ui/button/index';
</script>

{#snippet NavBarButton(name: string, href: string)}
	<NavigationMenu.Item>
		<NavigationMenu.Link {href}>
			{name}
		</NavigationMenu.Link>
	</NavigationMenu.Item>
{/snippet}

<div class="flex w-screen flex-row pb-4">
	<!-- Icon -->
	<NavigationMenu.Root>
		<NavigationMenu.List>
			<NavigationMenu.Item>
				<NavigationMenu.Link href="/">
					<DatabaseZapIcon class="text-foreground" />
				</NavigationMenu.Link>
			</NavigationMenu.Item>
			{@render NavBarButton('Discover','/discover')}
			{@render NavBarButton('About','/about')}
		</NavigationMenu.List>
	</NavigationMenu.Root>
</div>

<!-- {#snippet NavBarButton(name: string, href: string, icon: typeof Home)}
  <ToolTip.Root>
    <ToolTip.Trigger>
      <Button
        variant="ghost"
        size="icon"
        href={href}
        class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
      >
        <svelte:component this={icon} class="h-5 w-5"/>
      </Button>
    </ToolTip.Trigger>
    <ToolTip.Content side="right"><p>{name}</p></ToolTip.Content>
  </ToolTip.Root>
{/snippet}

<ToolTip.Provider>
	<div class="flex h-screen flex-col items-center justify-between p-2 bg-sidebar">
		<div class="flex flex-col gap-2">
			{@render NavBarButton('Home','/',Home)}
			{@render NavBarButton('Discover','/discover',Search)}
			{@render NavBarButton('About','/about',Info)}
		</div>
		<ToolTip.Root>
			<ToolTip.Trigger>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
						<Sun class="scale-100 dark:scale-0" />
						<Moon class="absolute scale-0 dark:scale-100" />
						<span class="sr-only">Toggle theme</span>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="end">
						<DropdownMenu.Item onclick={() => setMode('light')}>Light</DropdownMenu.Item>
						<DropdownMenu.Item onclick={() => setMode('dark')}>Dark</DropdownMenu.Item>
						<DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</ToolTip.Trigger>
			<ToolTip.Content><p>Toggle Theme</p></ToolTip.Content>
		</ToolTip.Root>
	</div>
</ToolTip.Provider> -->
