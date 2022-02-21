<script>
	/* Input styles */
	export let type = 'text';
	export let label = '';
	export let placeholder = '';
	export let group = Object.keys($$slots).length > 0;

	export let primary = false;
	export let secondary = false;
	export let accent = false;
	export let info = false;
	export let success = false;
	export let warning = false;
	export let error = false;
	export let ghost = false;

	/* Input sizes */
	export let sm = false;
	export let md = false;
	export let lg = false;
	export let xs = false;

	/* input display */
	export let border = true;

	/* input state */
	export let disabled = false;
</script>

<div class="form-control">
	<label for="input" class="label">
		<span class="label-text">{label}</span>
	</label>

	<label
		class="flex"
		class:input-group={group}
		class:input-group-xs={xs}
		class:input-group-sm={sm}
		class:input-group-lg={lg}
	>
		<slot name="prefix" />
		<input
			{type}
			{placeholder}
			{disabled}
			class="input w-full"
			class:input-primary={primary}
			class:input-secondary={secondary}
			class:input-accent={accent}
			class:input-info={info}
			class:input-succes={success}
			class:input-warning={warning}
			class:input-error={error}
			class:input-ghost={ghost}
			class:input-xs={xs}
			class:input-sm={sm}
			class:input-lg={lg}
			class:input-bordered={border}
		/>
		<slot name="suffix" />
	</label>
</div>
