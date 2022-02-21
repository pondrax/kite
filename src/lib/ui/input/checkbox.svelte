<script>
	/* Checkbox properties */
	export let name = null;
	export let options = [];
	export let selected = options.length == 0 ? '' : [];

	/* Checkbox styles */
	export let label = '';
	export let primary = null;
	export let secondary = null;
	export let accent = null;

	/* Checkbox sizes */
	export let small = false;
	export let large = false;
	export let tiny = false;
</script>

<div class="form-control">
	{#if label}
		<label for="checkbox" class="label">
			<span class="label-text">{label}</span>
		</label>
	{/if}

	{#if options.length > 0}
		{#each options as opt (opt.name)}
			<label class="cursor-pointer label">
				<span class="label-text">{opt.name || ''}</span>
				<input
					type="checkbox"
					bind:group={selected}
					value={opt.value}
					{...$$restProps}
					class:checkbox={1}
					class:checkbox-primary={opt.primary}
					class:checkbox-secondary={opt.secondary}
					class:checkbox-accent={opt.accent}
					class:checkbox-xs={opt.tiny}
					class:checkbox-sm={opt.small}
					class:checkbox-lg={opt.large}
				/>
			</label>
		{/each}
	{:else}
		<label class="cursor-pointer label">
			<span class="label-text">{name}</span>
			<input
				type="checkbox"
				bind:checked={selected}
				{...$$restProps}
				class:checkbox={1}
				class:checkbox-primary={primary}
				class:checkbox-secondary={secondary}
				class:checkbox-accent={accent}
				class:checkbox-xs={tiny}
				class:checkbox-sm={small}
				class:checkbox-lg={large}
			/>
		</label>
	{/if}
</div>
