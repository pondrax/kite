<script>
	import env from '$lib/variables';
	import { HomeIcon, MenuIcon } from 'svelte-feather-icons';
	import { Button, Drawer } from '$ui';

	export let openSidebar = false;
  let title = 'Kite UI'
</script>

<svelte:head>
	<title>{title}</title>
  <base href="/demo" />
</svelte:head>

<Drawer bind:open={openSidebar} mobile class="">
  <div class="p-2 h-screen">
    <div class="relative h-full bg-base-200 rounded-box overflow-auto">
      <div class="p-2">
        <Button ghost on:click={() => (openSidebar = !openSidebar)}>
          <MenuIcon size="24" />
        </Button>
      </div>
      <slot />
    </div>
	</div>
	<div slot="menu">
    <div class="flex flex-col h-screen py-4">
      <a href="/" class="px-4 flex gap-2 py-2 text-base-800 text-2xl font-bold mb-5">
        <img src="/favicon.png" alt="icon" class="h-8" />
        { title }
      </a>
      <div class="px-3 overflow-y-auto">
        <ul class=" menu menu-compact">
          <li><a href="/demo/">Components</a></li>
          <!-- <li><a href="/demo/"><HomeIcon size="24" /> Dashboard</a></li> -->
        
          <li></li>
          <li class="menu-title">
            <span>Actions</span>
          </li>
          <li><a href="/demo/components/button">Button</a></li>
          <li><a href="/demo/components/dropdown">Dropdown</a></li>
          <li><a href="/demo/components/modal">Modal</a></li>
          <li><a href="/demo/components/swap">Swap</a></li>
          
          <li></li>
          <li class="menu-title">
            <span>Data Display</span>
          </li>
          <li><a href="/demo/components/alert">Alert</a></li>
          <li><a href="/demo/components/avatar">Avatar</a></li>
          <li><a href="/demo/components/badge">Badge</a></li>
          <li><a href="/demo/components/card">Card</a></li>
          <li><a href="/demo/components/carousel">Carousel</a></li>
          <li><a href="/demo/components/collapse">Collapse</a></li>
          <li><a href="/demo/components/countdown">Countdown</a></li>
          <li><a href="/demo/components/progress">Progress</a></li>
          <li><a href="/demo/components/stat">Stat</a></li>
          
          <li></li>
          <li class="menu-title">
            <span>Data Input</span>
          </li>
          <li><a href="/demo/components/form">Form</a></li>
          
          <li></li>
          <li class="menu-title">
            <span>Layout</span>
          </li>
          
          <li></li>
          <li class="menu-title">
            <span>Navigation</span>
          </li>
          <li><a href="/demo/components/tab">Tab</a></li>
        </ul>
      </div>
    </div>
	</div>
</Drawer>
