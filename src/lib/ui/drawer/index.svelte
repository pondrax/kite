<script>
import Checkbox from "../input/checkbox.svelte";

	/* drawer options */
	export let open = false;
	export let mobile = false;
	export let end = false;
</script>

<div
  {...$$restProps} 
	class:drawer={1}
	class:drawer-mobile={mobile}
	class:drawer-end={end}
>
	<input bind:checked={open} type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<slot />
	</div>
	<div class="drawer-side">
		<div on:click={() => (open = false)} class="drawer-overlay" />
		<div class="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content shadow">
			<slot name="menu">
        <div>Default Menu goes here</div>
      </slot>
		</div>
	</div>
</div>
