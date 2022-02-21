<script>
  import {
    Button,
    Checkbox,
    Input,
    Radio,
    Range,
    Toggle,
    Textarea,
    MockupCode
  } from "$ui"

  import {Log} from "$lib/utils"

  let input = {}
  let textarea = {}
  let checkbox = {}
  let toggle = {}
  let radio = {}
  let range = {
    range: 15,
    primary: 30,
    secondary: 40,
    accent: 90,
  }

</script>
<main class="p-6 mb-96">

  <h1 class="text-2xl text-center uppercase">FORM COMPONENTS</h1>
 <section class="">
    <!-- INPUT FORM -->
    <section class="my-5 p-5 card border">
      <h3>INPUT</h3>
      <div class="grid md:grid-cols-3 gap-5 my-3">
        <Input bind:value={input.text}
          label="Label Input" 
          placeholder="Placeholder Input"
        ></Input>
        
        <Input bind:value={input.password}
          type="password"
          label="Label Password" 
          placeholder="Placeholder Password"
        ></Input>

        <Input bind:value={input.number}
          type="number"
          min={0}
          max={10}
          step={0.5}
          label="Label Number" 
          placeholder="Placeholder Number"
        ></Input>
      </div>

      <div class="grid md:grid-cols-3 gap-5 my-3">
        <Input bind:value={input.masking}
          mask="__-___-_____"
          label="Label Masking" 
          placeholder="Placeholder Masking"
        ></Input>

        <Input bind:value={input.phone}
          mask="(+62) ___-____-____"
          label="Label Masking Phone" 
          placeholder="Placeholder Masking"
        ></Input>
        
        <Input bind:value={input.rp} rawValue={input.rawRp}
          currency="id-ID"
          label="Label Input Currency" 
          placeholder="Placeholder Currency"
        ></Input>

      </div>

      <div class="grid md:grid-cols-3 gap-5 my-3">
        <Input bind:value={input.group1}
          label="Label Input Group" 
          placeholder="Placeholder Input"
        >
          <span slot="prefix">Prefix</span>
        </Input>
        <Input bind:value={input.group2}
          label="Label Input Group" 
          placeholder="Placeholder Input"
        >
          <span slot="suffix">Suffix</span>
        </Input>

        <Input bind:value={input.group3}
          label="Label Input Group" 
          placeholder="Placeholder Input"
        >
          <Button slot="prefix">Prefix</Button>
          <Button slot="suffix">Suffix</Button>
        </Input>

      </div>
      
      <MockupCode data={Log(input)} open xs></MockupCode>
    </section>

    <!-- TEXTAREA FORM -->
    <section class="my-5 p-5 card border">
      <h3>TEXTAREA</h3>
      <div class="grid md:grid-cols-3 gap-5 my-3">
        <Textarea 
          bind:value={textarea.textarea}
          placeholder="coba"
          label="Label Textarea"
        ></Textarea>
        <Input type='textarea'
          bind:value={textarea.textarea}
          placeholder="coba"
          label="Label Textarea"
        ></Input>
      </div>
      <MockupCode data={Log(textarea)} open sm></MockupCode>
    </section>

    <!-- CHECKBOX FORM -->
    <section class="my-5 p-5 card border">      
      <h3>CHECKBOX</h3>

      <div class="grid md:grid-cols-3 gap-5 my-3">
        <div>
          <Checkbox 
            bind:selected={checkbox.check}
            name="Check Me"
            label="Label Checkbox"
          ></Checkbox>
          <Checkbox 
            bind:selected={checkbox.disabled}
            name="Check Disabled"
            disabled
          ></Checkbox>
        </div>
        
        <Checkbox 
          bind:selected={checkbox.colors}
          label="Label Checkbox Group"
          options={[
            {value:'primary', name:'Check Primary', primary:1},
            {value:'secondary', name:'Check Secondary', secondary:1},
            {value:'accent', name:'Check Accent', accent:1},
          ]}
        ></Checkbox>
        
        <Input 
          type="checkbox" 
          bind:selected={checkbox.sizes}
          label="Label Checkbox Group"
          options={[
            {value:'tiny', name:'Check Tiny',tiny:1},
            {value:'small', name:'Check Small',small:1},
            {value:'medium', name:'Check Medium'},
            {value:'large', name:'Check Large',large:1},
          ]}
        ></Input>        
      </div>

      <MockupCode data={Log(checkbox)} open xs></MockupCode>
    </section>

    <!-- TOGGLE FORM -->
    <section class="my-5 p-5 card border">      
      <h3>TOGGLE</h3>      

      <div class="grid md:grid-cols-3 gap-5 my-3">
        <Toggle 
          bind:selected={toggle.toggle}
          name="Toggle Me"
          label="Label Toggle"
          ></Toggle>
          
          <Toggle 
          bind:selected={toggle.colors}
          label="Label Toggle Group"
          options={[
            {value:'primary', name:'Toggle Primary', primary:1},
            {value:'secondary', name:'Toggle Secondary', secondary:1},
            {value:'accent', name:'Toggle Accent', accent:1},
          ]}
        ></Toggle>
        
        <Input 
          type="toggle" 
          bind:selected={toggle.sizes}
          label="Label Toggle Group"
          options={[
            {value:'tiny', name:'Toggle Tiny',tiny:1},
            {value:'small', name:'Toggle Small',small:1},
            {value:'medium', name:'Toggle Medium'},
            {value:'large', name:'Toggle Large',large:1},
          ]}
        ></Input>
      </div>
      
      <MockupCode data={Log(toggle)} open xs></MockupCode>
    </section>

    <!-- RADIO FORM -->
    <section class="my-5 p-5 card border">      
      <h3>RADIO</h3>

      <div class="grid md:grid-cols-3 gap-5 my-3">
        <div>
          <Radio 
            bind:selected={radio.radio}
            prop="radio1"
            value={1}
            name="Select 1"
            label="Label Radio"
          ></Radio>
           <Radio 
            bind:selected={radio.radio}
            prop="radio1"
            value={2}
            name="Select 2"
          ></Radio>
        </div>
          
        <Radio 
          bind:selected={radio.colors}
          label="Label Radio Group"
          options={[
            {value:'primary', name:'Select Primary', primary:1},
            {value:'secondary', name:'Select Secondary', secondary:1},
            {value:'accent', name:'Select Accent', accent:1},
          ]}
        ></Radio>
        
        <Input 
          type="radio" 
          bind:selected={radio.sizes}
          label="Label Radio Group" 
          options={[
            {value:'tiny', name:'Select Tiny',tiny:1},
            {value:'small', name:'Select Small',small:1},
            {value:'medium', name:'Select Medium'},
            {value:'large', name:'Select Large',large:1},
          ]}
        ></Input>
      </div>
      
      <MockupCode data={Log(radio)} open xs></MockupCode>
    </section>
    
    <!-- RANGE FORM -->
    <section class="my-5 p-5 card border">      
      <h3>RANGE</h3>
      <div class="grid md:grid-cols-3 gap-5 my-3">
        <div>
          <Range 
            bind:value={range.range}
            label="Label Range"
            min={10}
            max={100}
            step={0.1}
            hint
          ></Range>
          <Range 
            bind:value={range.primary}
            primary
            hint
          ></Range>
          <Range 
            bind:value={range.secondary}
            secondary
            hint
          ></Range>
          <Range 
            bind:value={range.accent}
            accent
            hint
          ></Range>
        </div>
        <div>
          <Input type='range' 
            bind:value={range.tiny}
            label="Label Range"
            tiny
            disabled
          ></Input>
          <Input type='range' 
            bind:value={range.small}
            small
          ></Input>
          <Input type='range' 
            bind:value={range.medium}
          ></Input>
          <Input type='range' 
            bind:value={range.large}
            large
          ></Input>
        </div>

      </div>
      
      <MockupCode data={Log(range)} open xs></MockupCode>
    </section>

  </section>

</main>