<script>
	import { Button } from '$ui';

	export let value = '';
	export let type = 'number';
	export let step = 1;
	export let max = null;
	export let min = null;

	/* Input styles */
	export let group = true;
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

	const decrement = () => {
		value -= step;
		if (min !== null) {
			value = Math.max(value, min);
		}
	};
	const increment = () => {
		value += step;
		if (max !== null) {
			value = Math.min(value, max);
		}
	};
</script>

<div class="form-control">
	{#if label}
		<label for="input" class="label">
			<span class="label-text">{label}</span>
		</label>
	{/if}
	<label
		class="flex"
		class:input-group={group}
		class:input-group-xs={tiny}
		class:input-group-sm={small}
		class:input-group-lg={large}
	>
		<slot name="prefix" />
		<input
			bind:value
			type="number"
			{...$$restProps}
			class:w-full={1}
			class:input={1}
			class:input-primary={primary}
			class:input-secondary={secondary}
			class:input-accent={accent}
			class:input-info={info}
			class:input-succes={success}
			class:input-warning={warning}
			class:input-error={error}
			class:input-ghost={ghost}
			class:input-xs={tiny}
			class:input-sm={small}
			class:input-lg={large}
			class:input-bordered={border}
		/>
		{#if type == 'number'}
			<Button on:click={decrement}>-</Button>
			<Button on:click={increment}>+</Button>
		{/if}

		<slot name="suffix" />
	</label>
</div>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
