import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFood]',
})
export class FoodDirective {
  name = 'India Curry : ';

  constructor(elem: ElementRef, renderer: Renderer2) {
    let curry = renderer.createText(this.name + '🍛🍛🍛🍛🍛');
    renderer.appendChild(elem.nativeElement, curry);
  }
}
