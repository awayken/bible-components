import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'bible-verse',
  styleUrl: 'bible-verse.css'
})
export class BibleVerse {
  @Prop() book: string = '';
  @Prop() chapter: string = '';
  @Prop() verses?: string = '';

  @Element() el: HTMLElement;

  getHeading() {
    return `${this.book}${this.chapter.length > 0 ? ` ${this.chapter}` : ''}${this.verses.length > 0 ? `:${this.verses}` : ''}`
  }

  getLines() {
    if (this.el.innerHTML) {
      return this.el.innerHTML.split('\n');
    }

    return [];
  }

  render() {
    const heading = this.getHeading();
    const lines = this.getLines();

    return (
      <section>
        {heading && <h1>{heading}</h1>}

        {lines.length > 0 && lines.map((line, index) => <bible-line line-number={index + 1}>{line}</bible-line>)}
      </section>
    );
  }
}
