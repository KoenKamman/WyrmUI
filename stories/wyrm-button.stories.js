import { html } from 'lit-html';
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';

import '../dist/wyrm-button.js';

export default {
  title: 'Buttons|Button',
  component: 'wyrm-button',
  decorators: [withKnobs, withWebComponentsKnobs]
};

export const singleComponent = () => html` <wyrm-button></wyrm-button> `;
