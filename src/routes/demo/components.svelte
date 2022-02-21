<script>
  import UI, {
    Button,
    Checkbox,
    Input,
    Radio,
  } from "$ui"
  import {Log} from "$lib/utils"

  let openDrawer = false;
  let form = {
    checkbox: true,
    groupcheckbox: [],
    // toggle: true,
    // selected: 1
  };
  
  let checkbox = {}
  let radio = {}

</script>
<main class="p-6 mb-96">


  <h1 class="uppercase">Components</h1>
  <br/>
  <section class="py-6">
    <h3>ALERT</h3>
    <UI.Alert>Hello world</UI.Alert>
  </section>

  <section class="py-6">
    <h3>BUTTON</h3>
    <Button primary xs loading>Primary</Button>
    <UI.Button primary xs loading>Hello world</UI.Button>
  </section>
  
  <section class="py-6">
    <h3>CAROUSEL</h3>
    <span>Start</span>
    <UI.Carousel>
      <UI.CarouselItem>
        <img src="https://picsum.photos/id/101/360/240" alt="">
      </UI.CarouselItem>
      <UI.CarouselItem>
        <img src="https://picsum.photos/id/102/360/240" alt="">
      </UI.CarouselItem>
      <UI.CarouselItem>
        <img src="https://picsum.photos/id/103/360/240" alt="">
      </UI.CarouselItem>
      <UI.CarouselItem>
        <img src="https://picsum.photos/id/104/360/240" alt="">
      </UI.CarouselItem>
    </UI.Carousel>

    <span>Center</span>
    <UI.Carousel center>
      <UI.CarouselItem>
        <img src="https://picsum.photos/id/101/360/240" alt="">
      </UI.CarouselItem>
      <UI.CarouselItem>
        <img src="https://picsum.photos/id/102/360/240" alt="">
      </UI.CarouselItem>
      <UI.CarouselItem>
        <img src="https://picsum.photos/id/103/360/240" alt="">
      </UI.CarouselItem>
      <UI.CarouselItem>
        <img src="https://picsum.photos/id/104/360/240" alt="">
      </UI.CarouselItem>
    </UI.Carousel>
  </section>
  
  <section class="py-6">
    <h3>DRAWER</h3>
    <UI.Drawer bind:open={openDrawer}>
      <Button on:click={()=>openDrawer=!openDrawer}
        primary>
        Open
      </Button>
      <div slot="menu">
        Menu link
      </div>
    </UI.Drawer>
  </section>
  
  <section class="py-6">
    <h3>DROPDOWN</h3>
    <UI.Dropdown>
      <UI.Button>DROPDOWN</UI.Button>
      <ul slot="menu" class="menu">
        <li>
          <a href="/" on:click|preventDefault={null}>
            1ST ELEMENT
          </a>
        </li>
        <li>
          <a href="/" on:click|preventDefault={null}>
            2ND ELEMENT
          </a>
        </li>
      </ul>
    </UI.Dropdown>
    
  </section>


  
  <section class="py-6">
    <h3>FORM INPUT</h3>
    {Log(form)}
    <Input bind:value={form.text}
      label="Label Input" 
      placeholder="Placeholder Input"
    >
      <span slot="prefix">Prefix</span>
      <Button slot="suffix">Suffix</Button>
    </Input>

    <Input bind:value={form.password}
      type="password"
      label="Label Password" 
      placeholder="Placeholder Password"
    ></Input>

    <Input bind:value={form.number}
      type="number"
      max={10}
      step={0.5}
      label="Label Number" 
      placeholder="Placeholder Number"
    ></Input>


    <!-- CHECKBOX FORM -->
    <div class="py-5">
      {Log(checkbox)}
    </div>
    <Checkbox 
      bind:selected={checkbox.check1}
      name="Check Me"
      label="Label Checkbox"
    ></Checkbox>
  
    <Checkbox 
      bind:selected={checkbox.check2}
      options={[
        {value:1, name:'Check 1', primary:1},
        {value:2, name:'Check 2', secondary:1},
      ]}
    ></Checkbox>
    
    <Input type="checkbox" 
      bind:selected={checkbox.check3}
      options={[
        {value:1, name:'Check 1'},
        {value:2, name:'Check 2'},
      ]}
    ></Input>

    {Log(radio)}

    <Radio 
      bind:selected={radio.radio1}
      prop="radio1"
      value={1}
      name="Select 1"
    ></Radio>
    <Radio 
      bind:selected={radio.radio1}
      prop="radio1"
      value={2}
      name="Select 2"
    ></Radio>
  
    <Radio 
      bind:selected={radio.radio2}
      options={[
        {value:1, name:'Select 1', primary:1},
        {value:2, name:'Select 2', secondary:1},
      ]}
    ></Radio>
    
    <Input bind:value={form.range}
      type="range"
      label="Label Range" 
      max={3000}
      primary 
    ></Input>
    
    <Input bind:value={form.textarea}
      type="textarea"
      label="Label Textarea" 
      placeholder="Placeholder Textarea"
    ></Input>
  </section>

</main>