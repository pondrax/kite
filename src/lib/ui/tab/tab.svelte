<script>
  import { getContext,onMount } from 'svelte';
  
  export let name = false;
  let el;
  let classes;
  onMount(()=>{
    classes = el.parentNode.dataset.classes;
  })
  const active_tab = getContext('tabs:active');
  const id = getContext('tabs:getid')();
  $: active = ($active_tab === name || $active_tab === id);
  
</script>

<span 
  bind:this={el}
  class:tab={1}
  class:tab-active={active}
  class={classes}
  {...$$restProps} 
  on:click|preventDefault={()=>active_tab.set( (name === false) ? id : name)}>
  <slot></slot>
</span>