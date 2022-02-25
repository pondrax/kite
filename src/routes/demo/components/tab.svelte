<script>
  import {
    MockupCode,
    Tabs,
    Tab,
  } from '$ui'

  let tabs = [];
  let state = {
    style:[],
    size:[]
  };
</script>


<main class="p-6 mb-96">
	<h1 class="text-2xl text-center uppercase">ALERT COMPONENTS</h1>
	<section class="">
		<!-- TABS -->
    <section class="bg-base-100 my-5 p-5 card shadow">
      <div class="flex justify-between">
        <h3># Tabs</h3>
        <Tabs bind:active={tabs[0]}>
          <Tab name=preview>Preview</Tab>
          <Tab name=state>State</Tab>
          <Tab name=code>Code</Tab>
        </Tabs>
      </div>
      {#if tabs[0] == 'code' }
        <MockupCode open tiny highlight='html' data={`
<Tabs bind:active={state.style[0]}>
  <Tab name="Tab1">Tab1</Tab>
  <Tab name="Tab2">Tab2</Tab>
</Tabs> 
<Tabs bind:active={state.style[1]} normal>
  <Tab name="Tab1">Tab1</Tab>
  <Tab name="Tab2">Tab2</Tab>
</Tabs>
<Tabs bind:active={state.style[2]} bordered>
  <Tab name="Tab1">Tab1</Tab>
  <Tab name="Tab2">Tab2</Tab>
</Tabs>
<Tabs bind:active={state.style[3]} boxed>
  <Tab name="Tab1">Tab1</Tab>
  <Tab name="Tab2">Tab2</Tab>
</Tabs>
        `}/>
      {:else if tabs[0] == 'state'}
          <MockupCode open tiny highlight='js' data={state.style}/>
      {:else}
        <div class="grid overflow-x-auto gap-5 bg-dot p-4">  
          <Tabs bind:active={state.style[0]}>
            <Tab name="Tab1">Tab1</Tab>
            <Tab name="Tab2">Tab2</Tab>
          </Tabs> 
          <Tabs bind:active={state.style[1]} normal>
            <Tab name="Tab1">Tab1</Tab>
            <Tab name="Tab2">Tab2</Tab>
          </Tabs>
          <Tabs bind:active={state.style[2]} bordered>
            <Tab name="Tab1">Tab1</Tab>
            <Tab name="Tab2">Tab2</Tab>
          </Tabs>
          <Tabs bind:active={state.style[3]} boxed>
            <Tab name="Tab1">Tab1</Tab>
            <Tab name="Tab2">Tab2</Tab>
          </Tabs>
        </div>
      {/if}
    </section>

    
    <section class="bg-base-100 my-5 p-5 card shadow">
      <div class="flex justify-between">
        <h3># Tabs Size</h3>
        <Tabs bind:active={tabs[1]}>
          <Tab name=preview>Preview</Tab>
          <Tab name=state>State</Tab>
          <Tab name=code>Code</Tab>
        </Tabs>
      </div>
      {#if tabs[1] == 'code' }
        <MockupCode open tiny highlight='html' data={`
<Tabs bind:active={state.style[0]}>
  <Tab name="Tab1">Tab1</Tab>
  <Tab name="Tab2">Tab2</Tab>
</Tabs> 
<Tabs bind:active={state.style[1]} normal>
  <Tab name="Tab1">Tab1</Tab>
  <Tab name="Tab2">Tab2</Tab>
</Tabs>
<Tabs bind:active={state.style[2]} bordered>
  <Tab name="Tab1">Tab1</Tab>
  <Tab name="Tab2">Tab2</Tab>
</Tabs>
<Tabs bind:active={state.style[3]} boxed>
  <Tab name="Tab1">Tab1</Tab>
  <Tab name="Tab2">Tab2</Tab>
</Tabs>
        `}/>
      {:else if tabs[1] == 'state'}
          <MockupCode open tiny highlight='js' data={state.size}/>
      {:else}
        <div class="grid overflow-x-auto gap-5 bg-dot p-4">  
          <Tabs bind:active={state.size[0]} tiny>
            <Tab name="Tab1">Tab1</Tab>
            <Tab name="Tab2">Tab2</Tab>
          </Tabs> 
          <Tabs bind:active={state.size[1]} small>
            <Tab name="Tab1">Tab1</Tab>
            <Tab name="Tab2">Tab2</Tab>
          </Tabs>
          <Tabs bind:active={state.size[2]} >
            <Tab name="Tab1">Tab1</Tab>
            <Tab name="Tab2">Tab2</Tab>
          </Tabs>
          <Tabs bind:active={state.size[3]} large>
            <Tab name="Tab1">Tab1</Tab>
            <Tab name="Tab2">Tab2</Tab>
          </Tabs>
        </div>
      {/if}
    </section>
  </section>
</main>

