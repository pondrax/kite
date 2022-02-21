<script>
	/* toggle properties */
	export let value = null;
	export let hint = null;

	/* toggle styles */
	export let label = '';
	export let primary = null;
	export let secondary = null;
	export let accent = null;

	/* toggle sizes */
	export let small = null;
	export let large = null;
	export let tiny = null;
</script>

<div class="form-control">
	{#if label}
		<label for="input" class="label">
			<span class="label-text">{label}</span>
		</label>
	{/if}

	<div class:input-group={hint}>
		<input
			type="range"
			bind:value
			{...$$restProps}
			class:my-1={1}
			class:range={1}
			class:range-primary={primary}
			class:range-secondary={secondary}
			class:range-accent={accent}
			class:range-xs={tiny}
			class:range-sm={small}
			class:range-lg={large}
		/>
		{#if hint}
			<div class="bg-transparent text-right w-12">{value}</div>
		{/if}
	</div>
</div>
