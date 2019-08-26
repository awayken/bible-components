import { newE2EPage } from '@stencil/core/testing';

describe('bible-verse', () => {
  it('renders book heading', async () => {
    const page = await newE2EPage();

    await page.setContent('<bible-verse book="First Book"></bible-verse>');

    const element = await page.find('bible-verse');

    expect(element).not.toBeNull();
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualText('First Book');
  });

  it('renders book/chapter heading', async () => {
    const page = await newE2EPage();

    await page.setContent('<bible-verse book="First Book" chapter="10"></bible-verse>');

    const element = await page.find('bible-verse');

    expect(element).not.toBeNull();
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualText('First Book 10');
  });

  it('renders book/chapter/verse heading', async () => {
    const page = await newE2EPage();

    await page.setContent('<bible-verse book="First Book" chapter="10" verses="3-10"></bible-verse>');

    const element = await page.find('bible-verse');

    expect(element).not.toBeNull();
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualText('First Book 10:3-10');
  });

  it('renders full verse', async () => {
    const page = await newE2EPage();

    await page.setContent(`<bible-verse book="Proverbs" chapter="8" verses="22-31">
      Yahweh created me, first fruits of his fashioning, before the oldest of his works.
      From everlasting, I was firmly set, from the beginning before the earth came into being.
    </bible-verse>`);

    const element = await page.find('bible-verse');

    expect(element).not.toBeNull();
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualText('First Book 10:3-10');
  });
});
