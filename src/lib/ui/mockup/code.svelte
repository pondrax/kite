<script>
  import Prism from 'prismjs';
  import 'prismjs/themes/prism-okaidia.css';
  import { ChevronUpIcon, ChevronDownIcon, ClipboardIcon } from 'svelte-feather-icons';

	/* Mockup data */
	export let data = null;
	export let prefix = null;
  export let highlight = null;

	/* Mockup sizes */
	export let tiny = false;
	export let small = false;
	export let large = false;

	/* input state */
	export let open = false;
  let copied;
  const copyData = ()=>{
    navigator.clipboard.writeText(data);
    copied = true;
    setTimeout(()=>copied=false,3000)
  }
  
  $: dataString = '\n' + ((typeof data == 'string') ? data.trim(): JSON.stringify(data, null, 2).trim());
  $: dataHTML = (highlight)?Prism.highlight('\n'+dataString, Prism.languages[highlight]):'';
	$: slotLength = Object.keys($$slots).length;
</script>

<div 
  class:relative={1} 
  class:mockup-code={1} 
  class:text-xs={tiny} 
  class:text-sm={small} 
  class:text-lg={large}
>
  <div class="absolute flex gap-2 top-3 right-3">
    <div class="tooltip tooltip-left tooltip-primary" data-tip={copied?'Copied':'Copy'}>      
      <button on:click={copyData}>       
        <ClipboardIcon size="24"/>
      </button>    
    </div>
    <button on:click={() => open = !open}> 
      <svelte:component this={open? ChevronUpIcon: ChevronDownIcon} size="24"/>
    </button>
  </div>
	<div class="-mt-8" class:hidden={!open}>
    {#if highlight}
      <pre>
        {@html dataHTML}
      </pre>
		{:else if slotLength == 0}
			<pre data-prefix={prefix}>
        <code>{ dataString }</code>
      </pre>
		{:else}
			<slot />
		{/if}
	</div>
</div>

<style>
	.mockup-code {
		padding-bottom: 0;
    min-width:auto;
	}
	.mockup-code pre {
		padding-left: 1rem;
	}
	.mockup-code:before {
    margin-bottom: 1rem;
	}
	.mockup-code pre:before {
		content: '';
		margin-right: 0;
	}
</style>
