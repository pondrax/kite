<script>
	/* Input values properties */
	export let value = '';
	export let label = '';

	/* Style */
	export let primary = null;
	export let secondary = null;
	export let accent = null;
	export let info = null;
	export let success = null;
	export let warning = null;
	export let error = null;
	export let ghost = null;

	/* Input sizes */
	export let small = false;
	export let large = false;
	export let tiny = false;

	/* input display */
	export let border = true;
</script>

<div class="form-control">
	{#if label}
		<label for="textarea" class="label">
			<span class="label-text">{label}</span>
		</label>
	{/if}
	<textarea
		bind:value
		{...$$restProps}
		class:w-full={1}
		class:textarea={1}
		class:textarea-primary={primary}
		class:textarea-secondary={secondary}
		class:textarea-accent={accent}
		class:textarea-info={info}
		class:textarea-succes={success}
		class:textarea-warning={warning}
		class:textarea-error={error}
		class:textarea-ghost={ghost}
		class:textarea-xs={tiny}
		class:textarea-sm={small}
		class:textarea-lg={large}
		class:textarea-bordered={border}
	/>
</div>
