import { Component, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'Buy Cookies',0,0,'parrot',new Date(2020,3,14)),
    new Quote(2,'Get new Phone Case',0,0,'Diana',new Date(2020,3,14)),

  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote){
    let goalLength = this.quotes.length;
    quote.id = goalLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  @Output()
  upVote(index){
    this.quotes[index].upvote= this.quotes[index].upvote+1
   
  }
  downVote(index){ 
  this.quotes[index].downvote= this.quotes[index].downvote+1
  }
  constructor() { }

  ngOnInit(): void {
  }

}
