import _Alert from './alert/index.svelte';
import _Button from './button/';
import _ButtonGroup from './button/group.svelte';
import _Carousel from './carousel/index.svelte';
import _CarouselItem from './carousel/item.svelte';
import _Drawer from './drawer/index.svelte';
import _Dropdown from './dropdown/index.svelte';
import _Input from './input/index.svelte';
import _Number from './input/index.svelte';
import _Checkbox from './input/checkbox.svelte';
import _Radio from './input/radio.svelte';
import _Range from './input/range.svelte';
import _Toggle from './input/toggle.svelte';
import _Imask from './input/input.svelte';
// import _Tab, { Item as _TabItem } from './tab/'
export { Tabs, Tab } from './tab/'
import _Textarea from './input/textarea.svelte';
import _MockupCode from './mockup/';

import { browser } from '$app/env';

const _getTheme = () => {
	if (browser) {
		let name = localStorage.getItem('data-theme') || 'cupcake';
		document.querySelector('html').setAttribute('data-theme', name);
    return name;
	}
};
const _setTheme = (name) => {
	if (browser) {
		localStorage.setItem('data-theme', name);
		document.querySelector('html').setAttribute('data-theme', name);
	}
};

const UI = {
	Alert: _Alert,
	Button: _Button,
	ButtonGroup: _ButtonGroup,
	Carousel: _Carousel,
	CarouselItem: _CarouselItem,
	Checkbox: _Checkbox,
	Drawer: _Drawer,
	Dropdown: _Dropdown,
	MockupCode: _MockupCode,
  // MockupPreview: _MockupPreview,
	Input: _Input,
	Number: _Number,
	Radio: _Radio,
	Range: _Range,
	Imask: _Imask,
	Textarea: _Textarea,
	Toggle: _Toggle,
  // Tab: _Tab,
  // TabItem: _TabItem,
  Tabs,
  Tab,
	getTheme: _getTheme,
	setTheme: _setTheme
};

export const {
	Alert,
	Button,
	ButtonGroup,
	Carousel,
	CarouselItem,
	Checkbox,
	Drawer,
	Dropdown,
	MockupCode,
  // MockupPreview,
	Input,
	Number,
	Radio,
	Range,
	Imask,
	Textarea,
	Toggle,
  // Tab,
  // TabItem,

	getTheme,
	setTheme
} = UI;

UI.getTheme();

export default UI;
