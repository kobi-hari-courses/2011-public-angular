import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){}

  onGoto(value: string) {
    if (value.includes('page a')) {
      this.router.navigate(['a']);
    } else if (value.includes('page b')) {
      this.router.navigateByUrl('b');
    } else if (value.includes('page c')) {
      this.router.navigateByUrl('c');      
    }
  }
}
