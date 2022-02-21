<script>
	/* Mockup data */
	export let data = null;
	export let prefix = null;

	/* Mockup sizes */
	export let sm = false;
	export let lg = false;
	export let xs = false;

	/* input state */
	export let open = false;

	$: slotLength = Object.keys($$slots).length;
</script>

<div class:mockup-code={1} class:text-xs={xs} class:text-sm={sm} class:text-lg={lg}>
	<button on:click={() => (open = !open)} class="float-right -my-10 mr-3 text-lg"> &times; </button>
	<div class="pb-3" class:hidden={!open}>
		{#if slotLength == 0}
			<pre data-prefix={prefix}>
      <code>{data}</code>
    </pre>
		{:else}
			<slot />
		{/if}
	</div>
</div>

<style>
	.mockup-code {
		padding-bottom: 0;
	}
	.mockup-code pre {
		padding-left: 3ch;
	}
	.mockup-code pre:before {
		content: '';
		margin-right: 0;
	}
</style>
