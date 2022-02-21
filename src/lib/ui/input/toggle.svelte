<script>
	/* toggle properties */
	export let name = null;
	export let options = [];
	export let selected = options.length == 0 ? '' : [];

	/* toggle styles */
	export let label = '';
	export let primary = null;
	export let secondary = null;
	export let accent = null;

	/* toggle sizes */
	export let small = false;
	export let large = false;
	export let tiny = false;

	/* toggle state */
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
					type="checkbox"
					bind:group={selected}
					value={opt.value}
					{disabled}
					class={$$props.class}
					class:toggle={1}
					class:toggle-primary={opt.primary}
					class:toggle-secondary={opt.secondary}
					class:toggle-accent={opt.accent}
					class:toggle-xs={opt.tiny}
					class:toggle-sm={opt.small}
					class:toggle-lg={opt.large}
				/>
			</label>
		{/each}
	{:else}
		<label class="cursor-pointer label">
			<span class="label-text">{name}</span>
			<input
				type="checkbox"
				bind:checked={selected}
				{disabled}
				class={$$props.class}
				class:toggle={1}
				class:toggle-primary={primary}
				class:toggle-secondary={secondary}
				class:toggle-accent={accent}
				class:toggle-xs={tiny}
				class:toggle-sm={small}
				class:toggle-lg={large}
			/>
		</label>
	{/if}
</div>
