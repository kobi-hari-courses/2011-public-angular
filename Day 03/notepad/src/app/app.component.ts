import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly colors: string[] = ['red', 'green', 'blue', 'brown', 'purple', 'black', 'navy'];
  readonly sizes: string[] = ['12px', '18px', '24px', '36px', '48px', '72px'];
  readonly fonts: string[] = ['Tahoma', 'Verdana', 'Consolas', 'Segoe UI', 'Times new roman', 'David'];

  selectedColor: string = this.colors[0];
  selectedSize: string = this.sizes[0];
  selectedFont: string = this.fonts[0];

  selectColor(value: string) {
    console.log('selected color: ' + value);
    this.selectedColor = value;
  }

  selectFont(value: string) {
    this.selectedFont = value;
  }
  selectSize(value: string) {
    this.selectedSize = value;
  }

}
