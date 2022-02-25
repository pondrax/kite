<script>
  import { MockupCode } from '$ui';
  export let active = null;
  export let data = null;
  export let highlight = null;
</script>

{#if active == 'code'}
  <MockupCode open tiny {highlight} {data}/>
{:else}
  <div class="flex justify-center overflow-x-auto gap-5 bg-dot p-4 rounded-xl">
    {@html data}
  </div>
{/if}
