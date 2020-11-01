import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchWord = new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
  }

  onKey(event: any) {
    this.searchWord.emit(event.target.value);
  }

}
