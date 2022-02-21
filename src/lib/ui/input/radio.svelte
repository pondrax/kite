<script>
	/* Input values properties */
	export let value = null;
	export let name = null;
	export let prop = '';
	export let options = [];
	export let selected = null;

	/* Input styles */
	export let label = '';
	export let primary = null;
	export let secondary = null;
	export let accent = null;

	/* Input sizes */
	export let small = false;
	export let large = false;
	export let tiny = false;

	/* input state */
	export let disabled = false;
</script>

<div class="form-control">
	{#if label}
		<label for="input" class="label">
			<span class="label-text">{label}</span>
		</label>
	{/if}

	{#if options.length > 0}
		{#each options as opt (opt.name)}
			<label class="cursor-pointer label">
				<span class="label-text">{opt.name}</span>
				<input
					type="radio"
					bind:group={selected}
					value={opt.value}
					name={prop}
					{disabled}
					class={$$props.class}
					class:radio={1}
					class:radio-primary={opt.primary}
					class:radio-secondary={opt.secondary}
					class:radio-accent={opt.accent}
					class:radio-xs={opt.tiny}
					class:radio-sm={opt.small}
					class:radio-lg={opt.large}
				/>
			</label>
		{/each}
	{:else}
		<label class="cursor-pointer label">
			<span class="label-text">{name}</span>
			<input
				type="radio"
				bind:group={selected}
				{value}
				name={prop}
				{disabled}
				class={$$props.class}
				class:radio={1}
				class:radio-primary={primary}
				class:radio-secondary={secondary}
				class:radio-accent={accent}
				class:radio-xs={tiny}
				class:radio-sm={small}
				class:radio-lg={large}
			/>
		</label>
	{/if}
</div>
