import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Contador: number = 0;

  Add(){
    this.Contador++;
  }
  
  Dis(){
    this.Contador--;
  }
}
