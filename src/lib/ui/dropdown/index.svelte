<script>
	/* dropdown options */
	export let open = false;

	export let end = false;
	export let top = false;
	export let left = false;
	export let right = false;
	export let hover = false;
  
</script>

<div
	class="dropdown"
	class:dropdown-end={end}
	class:dropdown-top={top}
	class:dropdown-left={left}
	class:dropdown-right={right}
	class:dropdown-hover={hover}
	class:dropdown-open={open}
>
	<div tabindex="0" class="m-1">
		<slot />
	</div>
	<div tabindex="0" class="p-2 bg-base-100 shadow dropdown-content rounded-box w-52">
		<slot name="menu" />
	</div>
</div>
