import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div *ngIf="visible">
    <p>Content from Child component</p>
  </div> `,
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  visible = true;
  name = 'Angular version 14';

  constructor() {}

  toggle() {
    this.visible = !this.visible;
  }
}
