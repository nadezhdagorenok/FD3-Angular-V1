import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  helloText:string = 'Привет';

  getMyName():string {
    return "Васечкин";
  };

}
