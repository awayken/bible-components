import { newE2EPage } from '@stencil/core/testing';

describe('bible-line', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<bible-line>My name is Wisdom.</bible-line>');

    const element = await page.find('bible-line');

    expect(element).not.toBeNull();
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualText('1 My name is Wisdom.');
  });

  it('renders changes to line number', async () => {
    const page = await newE2EPage();

    await page.setContent('<bible-line line-number="2">My name is Wisdom.</bible-line>');

    const element = await page.find('bible-line');

    expect(element).toEqualText('2 My name is Wisdom.');

    element.setProperty('lineNumber', 10);
    await page.waitForChanges();
    expect(element).toEqualText('10 My name is Wisdom.');
  });
});
