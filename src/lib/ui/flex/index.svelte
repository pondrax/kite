<script>
	/* Flex Position */
	export let start = null;
	export let center = null;
	export let end = null;
	export let between = null;
	export let around = null;
	export let even = null;
</script>

<div
	class={$$props.class}
	class:flex={1}
	class:justify-start={start}
	class:justify-center={center}
	class:justify-end={end}
	class:justify-between={between}
	class:justify-around={around}
	class:justify-even={even}
>
	<slot />
</div>
