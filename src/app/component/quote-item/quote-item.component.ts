import { Component, OnInit  } from '@angular/core';
import { Quote } from 'src/app/Quote';
import { QUOTES } from 'src/app/mock-quotes';

 
@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {


  //Declaring icon properties
 
  quotes : Quote[] = QUOTES;
   countAdd = 0 ;
   countMinus = 0 ;

  constructor() { }

  ngOnInit(): void {
  }
  
  // Function to remove element on the click of the trash icon;
  onDelete(id:number){
    this.quotes= this.quotes.filter((quote)=> quote.id != id)
  }

  //to upvote a quote
  upvote(id:number){
     if(id){
       const quote = this.quotes.find((quote) => quote.id === id)

       if(quote){
         quote.upvote ++
       }
     }
  }
  
  // to downvote a quote
  downvote(id:number){
    if(id){
      // this.quotes = this.quotes.filter((quote) => quote.id? this.countMinus++ : this.countMinus)
      const quote = this.quotes.find((quote) => quote.id === id)
      if(quote){
        quote.downvote +=1
      }
    }
    }

    addQuote(quote:Quote){
      this.quotes.push(quote)
    };
 
  
}
function item(item: any): Quote {
  throw new Error('Function not implemented.');
}

function newQuote(newQuote: any): Quote[] {
  throw new Error('Function not implemented.');
}

