import { Component, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'"Continue to share your heart with people even if it has been broken."',2,0,'Amy Poehler','Love',new Date(2020,3,14)),
    new Quote(2,'“The fool doth think he is wise, but the wise man knows himself to be a fool.”',0,0,'William Shakespear','Wisdom',new Date(2020,3,14)),
    new Quote(3,'“A recipe has no soul. You, as the cook, must bring soul to the recipe.”',0,0,'Miss Piggy','Food',new Date(2020,3,14)),

  ];

    arr: number[] = this.quotes.map(quote=>quote.upvote)
    highest=Math.max(...this.arr)

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote){
    // let goalLength = this.quotes.length;
    // quote.id = goalLength+1;
    // quote.completeDate = new Date(quote.completeDate)
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