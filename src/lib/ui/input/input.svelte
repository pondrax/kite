<script>
	import { Button } from '$ui';

	export let value = '';
	export let rawValue = '';
	export let type = 'text';
	export let step = 1;
	export let max = null;
	export let min = null;

	/* Input styles */
	export let group = (Object.keys($$slots).length > 0) | ['password', 'number'].includes(type);
	export let label = '';

	/* Type password Only */
	let show = false;

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
	export let currency = null;

	/* Input Masking

  https://stackoverflow.com/questions/12578507/implement-an-input-with-a-mask
  */
	let el;
	let back = false;
	export let mask = '';
	export let maskChar = '_';
	export let allowedChar = '\\w|\\d';

	const slots = new Set(maskChar);
	const prev = ((j) => Array.from(mask, (c, i) => (slots.has(c) ? (j = i + 1) : j)))(0);
	const first = [...mask].findIndex((c) => slots.has(c));
	const accept = new RegExp(allowedChar, 'g');

	const clean = (input) => {
		input = input.match(accept) || [];
		return Array.from(mask, (c) => (input[0] === c || slots.has(c) ? input.shift() || c : c));
	};
	const handleInput = () => {
		if (currency) {
			let i = el.selectionStart;
			el.value = el.value.replace(/[^\d.,-]/g, '');
			rawValue = parseNumber(el.value, currency) || 0;
			if (rawValue != 0) {
				let newValue = new Intl.NumberFormat(currency).format(rawValue);
				if (newValue.length - value.length == 2) {
					i++;
				}
				value = newValue;
				setTimeout(() => el.setSelectionRange(i, i));
			}
		} else if (mask && type != 'number') {
			const [i, j] = [el.selectionStart, el.selectionEnd].map((i) => {
				i = clean(el.value.slice(0, i)).findIndex((c) => slots.has(c));
				return i < 0 ? prev[prev.length - 1] : back ? prev[i - 1] || first : i;
			});
			el.value = clean(el.value).join``;
			el.setSelectionRange(i, j);

			back = false;
			value = el.value;
		}
	};
	const parseNumber = (value, locales) => {
		// Strip non numeric
		const num = new Intl.NumberFormat(locales).format('1.1');
		const cleanPattern = new RegExp(`[^-+0-9${num.charAt(1)}]`, 'g');
		const cleaned = value.replace(cleanPattern, '');
		const normalized = cleaned.replace(num.charAt(1), '.');
		return parseFloat(normalized);
	};

	const handleKeydown = (e) => (back = e.key === 'Backspace');
	const handleBlur = () => el.value === mask && (el.value = '');

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
			{value}
			{rawValue}
			bind:this={el}
			on:input={handleInput}
			on:focus={handleInput}
			on:blur={handleBlur}
			on:keydown={handleKeydown}
			type={show ? 'text' : type}
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
		{#if type == 'password'}
			<Button on:click={() => (show = !show)}>
				{show ? 'HIDE' : 'SHOW'}
			</Button>
		{/if}
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
	/* input::placeholder{
    text-align: left;
  } */
</style>
