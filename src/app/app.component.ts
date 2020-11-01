import { Component, OnInit } from '@angular/core';

export interface State {
  name: string;
  flag: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-countries';

  constructor( ) {}

  ngOnInit(): void {

  }
    
    
}



