<script>
  import env from '$lib/variables'
  import { HomeIcon, MenuIcon } from 'svelte-feather-icons';
  import { Button, Drawer } from '$ui'

  export let openSidebar = true;
</script>

<Drawer bind:open={openSidebar} mobile class="min-h-screen bg-base-200">
  <div class="p-2">
    <Button ghost on:click={()=>openSidebar=!openSidebar}>
      <MenuIcon size="24"/>
    </Button>
  </div>
  <slot/>
  <div slot="menu">
    <a href="/" class="flex gap-2 py-2 text-base-800 text-2xl font-bold mb-5">
      <img src="/favicon.png" alt="icon" class="h-8"/>
      { env.name }
    </a>
    <ul class="menu menu-compact">
      <li><a href='/demo/'><HomeIcon size="24"/> Dashboard</a></li>
      <li></li>
      <li class="menu-title">
        <span>Components</span></li>
      <li><a href='/demo/components'>Alert</a></li>
    </ul>
  </div>
</Drawer>