<script>
	/* alert styles */
	export let info = false;
	export let success = false;
	export let warning = false;
	export let error = false;
</script>

<button
	class="alert"
	class:alert-info={info}
	class:alert-success={success}
	class:alert-warning={warning}
	class:alert-error={error}
>
	<div class="flex-1">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="#2196f3"
			class="w-6 h-6 mx-2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		<slot />
	</div>
</button>
