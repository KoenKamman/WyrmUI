import { html, fixture, expect } from '@open-wc/testing';

import {WyrmUi} from '../src/WyrmUi.js';
import '../wyrm-ui.js';

describe('WyrmUi', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el: WyrmUi = await fixture(html`
      <wyrm-ui></wyrm-ui>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el: WyrmUi = await fixture(html`
      <wyrm-ui></wyrm-ui>
    `);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el: WyrmUi = await fixture(html`
      <wyrm-ui title="attribute title"></wyrm-ui>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el: WyrmUi = await fixture(html`
      <wyrm-ui></wyrm-ui>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
