<script>
  import { AlertCircleIcon, CheckCircleIcon, HelpCircleIcon, XCircleIcon } from 'svelte-feather-icons';

	/* alert styles */
	export let info = false;
	export let success = false;
	export let warning = false;
	export let error = false;
</script>

<button
	class:alert={1}
	class:alert-info={info}
	class:alert-success={success}
	class:alert-warning={warning}
	class:alert-error={error}
>
	<div class="flex gap-2">
    {#if info}
      <HelpCircleIcon size="24"/>
      {:else if success}
        <CheckCircleIcon size="24"/>
      {:else if warning}
        <AlertCircleIcon size="24"/>
      {:else if error}
        <XCircleIcon size="24"/>
    {/if}
		<slot />
	</div>
</button>
