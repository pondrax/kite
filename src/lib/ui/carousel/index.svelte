<script>
	/* carousel snap */
	export let center = false;
	export let end = false;
	export let vertical = false;
</script>

<div
	class="carousel"
	class:carousel-center={center}
	class:carousel-end={end}
	class:carousel-vertical={vertical}
>
	<slot />
</div>
