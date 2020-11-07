import { html, fixture, expect } from '@open-wc/testing';

import { WyrmButton } from './index.js';
import './wyrm-button.js';

describe('wyrm-button', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el: WyrmButton = await fixture(html` <wyrm-button></wyrm-button> `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el: WyrmButton = await fixture(html` <wyrm-button></wyrm-button> `);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el: WyrmButton = await fixture(html`
      <wyrm-button title="attribute title"></wyrm-button>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el: WyrmButton = await fixture(html` <wyrm-button></wyrm-button> `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
