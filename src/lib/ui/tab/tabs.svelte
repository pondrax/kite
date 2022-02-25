<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  export let active = 0;
  export let name = null;
  export let boxed = null;
  export let normal = null;
  export let bordered = null;

  export let tiny = null;
  export let small = null;
  export let large = null;

  const active_tab = writable(active);
  let num = 0;
  setContext('tabs:getid',()=>name || num++);
  setContext('tabs:active',active_tab);
  $: active = $active_tab;
  $: classes = [
    !(boxed|normal|bordered)?'tab-lifted':'',
    !boxed&&bordered?'tab-bordered':'',
    tiny?'tab-xs':'',
    small?'tab-sm':'',
    large?'tab-lg':'',
  ].join(' ').trim()
</script>

<nav 
  class:tabs={1} 
  class:tabs-boxed={boxed}
  data-classes={classes}
  {...$$restProps}
>
  <slot></slot>
</nav>

<style>
  .tabs-boxed{
    width:fit-content;
  }
</style>