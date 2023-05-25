import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FoodDirective } from './food.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('title') title: ElementRef | undefined;
  angularVersion = '';
  food: string = '';

  @ViewChild(FoodDirective) set appFood(directive: FoodDirective) {
    this.food = directive.name;
  }

  ngAfterViewInit() {
    if (this.title) {
      this.title.nativeElement.innerHTML =
        'Using viewChild to access innerHTML';
    }

    setTimeout(() => {
      this.ChildComponent.name = this.ChildComponent.name;
    });
  }

  @ViewChild(ChildComponent) ChildComponent: any;

  toggleChild() {
    this.ChildComponent.toggle();
  }

  getAngularVersion() {
    this.angularVersion = this.ChildComponent.name;
  }
}
