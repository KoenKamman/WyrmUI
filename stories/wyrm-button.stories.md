```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/wyrm-button.js';

export default {
  title: 'WyrmButton',
  component: 'wyrm-button',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# WyrmButton

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add wyrm-button
```

```js
import 'wyrmui/wyrm-button.js';
```

```js preview-story
export const Simple = () => html`
  <wyrm-button></wyrm-button>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <wyrm-button title="Hello World"></wyrm-button>
`;
```
