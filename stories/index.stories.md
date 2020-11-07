```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/wyrm-ui.js';

export default {
  title: 'WyrmUi',
  component: 'wyrm-ui',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# WyrmUi

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add wyrm-ui
```

```js
import 'wyrm-ui/wyrm-ui.js';
```

```js preview-story
export const Simple = () => html`
  <wyrm-ui></wyrm-ui>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <wyrm-ui title="Hello World"></wyrm-ui>
`;
```
