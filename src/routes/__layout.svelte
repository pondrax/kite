<script>
	import { SettingsIcon } from 'svelte-feather-icons';
	import { setTheme, Button, Dropdown } from '$ui';

	import '../app.css';
	export let title = 'Kite App';
</script>

<svelte:head>
	<title>{title}</title>
  <base href="/" />
</svelte:head>

<div class="fixed bottom-5 right-1 z-50">
	<Dropdown top end>
		<Button small gap>
			<SettingsIcon size="20" />
		</Button>
		<div slot="menu">
			<Button ghost small block left on:click={() => setTheme('dark')}>Dark</Button>
			<Button ghost small block left on:click={() => setTheme('cupcake')}>Cupcake</Button>
		</div>
	</Dropdown>
</div>

<slot />
