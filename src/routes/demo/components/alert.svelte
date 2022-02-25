<script>
  import { 
    Alert, 
    MockupCode,
    Tabs,
    Tab,
  } from '$ui'

  let tabs = [];
</script>


<main class="p-6 mb-96">
	<h1 class="text-2xl text-center uppercase">ALERT COMPONENTS</h1>
	<section class="">
		<!-- ALERT -->
    <section class="bg-base-100 my-5 p-5 card shadow">
      <div class="flex justify-between">
        <h3># Alert Colors</h3>
        <Tabs bind:active={tabs[0]}>
          <Tab name=preview>Preview</Tab>
          <Tab name=code>Code</Tab>
        </Tabs>
      </div>
      {#if tabs[0] == 'code' }
        <MockupCode open tiny highlight='html' data={`  
<Alert>Alert</Alert>
<Alert info>Alert Info</Alert>
<Alert success>Alert Success</Alert>
<Alert warning>Alert Warning</Alert>
<Alert error>Alert Error</Alert>
        `}/>
      {:else}
        <div class="grid md:grid-cols-3 overflow-x-auto gap-5 bg-dot p-4">   
          <Alert>Alert</Alert>
          <Alert info>Alert Info</Alert>
          <Alert success>Alert Success</Alert>
          <Alert warning>Alert Warning</Alert>
          <Alert error>Alert Error</Alert>
        </div>
      {/if}
    </section>
  </section>
</main>

