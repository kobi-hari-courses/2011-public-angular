import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fun with pipes';

  colors = ['red', 'green', 'blue', 'magenta', 'cyan', 'yellow'];


  now = Date.now();


  modifyArray() {
    this.colors[1] = 'Beer';
    this.colors.push('Peer');
  }
}

