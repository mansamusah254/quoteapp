import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  
  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
