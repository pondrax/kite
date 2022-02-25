<script>
  import { 
    Button, 
    MockupCode,
    Tab,
    Tabs,
  } from '$ui'

  let tabs = [];
</script>

<main class="p-6">
	<h1 class="text-2xl text-center uppercase">BUTTON COMPONENTS</h1>
	<section class="">
		<!-- Button -->
    <section class="bg-base-100 my-5 p-5 card shadow">
      <div class="flex justify-between">
        <h3># Button Colors</h3>
        <Tabs bind:active={tabs[0]} boxed>
          <Tab name=preview>Preview</Tab>
          <Tab name=code>Code</Tab>
        </Tabs>
      </div>
      {#if tabs[0] == 'code' }
        <MockupCode open tiny highlight='html' data={`         
<Button>Button</Button>
<Button primary>Primary</Button>
<Button secondary>Secondary</Button>
<Button accent>Accent</Button>
<Button ghost>Ghost</Button>
<Button link>Link</Button>
        `}/>
      {:else}
        <div class="flex justify-center overflow-x-auto gap-5 bg-dot p-4">        
          <Button>Button</Button>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button accent>Accent</Button>
          <Button ghost>Ghost</Button>
          <Button link>Link</Button>
        </div>
      {/if}
    </section>
    
    <section class="bg-base-100 my-5 p-5 card shadow">
      <div class="flex justify-between">
        <h3># Button State</h3>
        <Tabs bind:active={tabs[1]} bordered>
          <Tab name=preview>Preview</Tab>
          <Tab name=code>Code</Tab>
        </Tabs>
      </div>
      {#if tabs[1] == 'code' }
        <MockupCode open tiny highlight='html' data={`      
<Button info>Info</Button>
<Button success>Success</Button>
<Button warning>Warning</Button>
<Button error>Error</Button>
        `}/>
      {:else}
        <div class="flex justify-center overflow-x-auto gap-5 bg-dot p-4">
          <Button info>Info</Button>
          <Button success>Success</Button>
          <Button warning>Warning</Button>
          <Button error>Error</Button>
        </div>
      {/if}
    </section>
    
    <section class="bg-base-100 my-5 p-5 card shadow">
      <div class="flex justify-between">
        <h3># Outline Button</h3>
        <Tabs bind:active={tabs[2]}>
          <Tab name=preview>Preview</Tab>
          <Tab name=code>Code</Tab>
        </Tabs>
      </div>
      {#if tabs[2] == 'code' }
        <MockupCode open tiny highlight='html' data={`   
<Button outline>Outline</Button>
<Button outline primary>Primary</Button>
<Button outline secondary>Secondary</Button>
<Button outline accent>Accent</Button>
        `}/>
      {:else}
        <div class="flex justify-center overflow-x-auto gap-5 bg-dot p-4">
          <Button outline>Outline</Button>
          <Button outline primary>Primary</Button>
          <Button outline secondary>Secondary</Button>
          <Button outline accent>Accent</Button>
        </div>
      {/if}
    </section>

    <section class="bg-base-100 my-5 p-5 card shadow">
      <div class="flex justify-between">
        <h3># Outline Button State</h3>
        <Tabs bind:active={tabs[3]}>
          <Tab name=preview>Preview</Tab>
          <Tab name=code>Code</Tab>
        </Tabs>
      </div>
      {#if tabs[3] == 'code' }
        <MockupCode open tiny highlight='html' data={`   
<Button outline info>Info</Button>
<Button outline success>Success</Button>
<Button outline warning>Warning</Button>
<Button outline error>Error</Button>
        `}/>
      {:else}
        <div class="flex justify-center overflow-x-auto gap-5 bg-dot p-4">
          <Button outline info>Info</Button>
          <Button outline success>Success</Button>
          <Button outline warning>Warning</Button>
          <Button outline error>Error</Button>
        </div>
      {/if}
    </section>
  </section>
</main>

