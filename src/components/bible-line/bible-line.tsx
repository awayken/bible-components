import { Component, Prop, h } from '@stencil/core';

export interface Line {
  lineNumber: number;
  text: string;
}

@Component({
  tag: 'bible-line',
  styleUrl: 'bible-line.css'
})
export class BibleLine {
  @Prop() lineNumber: number = 1;

  render() {
    return (
      <span>
        <sup>{this.lineNumber}</sup> <slot />
      </span>
    );
  }
}
