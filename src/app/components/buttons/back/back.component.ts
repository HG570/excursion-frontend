import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-back',
  imports: [],
  templateUrl: './back.component.html',
  styleUrl: './back.component.scss'
})
export class BackComponent {
  constructor(private location: Location) {} 
  goBack() { 
    this.location.back(); 
  }
}
