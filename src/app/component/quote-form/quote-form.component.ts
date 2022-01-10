// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit , Output,EventEmitter} from '@angular/core';
import { Quote  } from 'src/app/Quote';
import { QUOTES } from 'src/app/mock-quotes';



@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {


  @Output() onAddQuote :EventEmitter<Quote> = new EventEmitter()

  //  Defining the types of data that will be input in our forms
  quotetext!: string;
  author!: string ;
  name! : string ;


  constructor() { }

  ngOnInit(): void {
  }

onSubmit(){
if(!this.quotetext){
    alert("Please add a quote make a submission.");
    return
  } 
 const newQuote ={
   quotetext : this.quotetext ,
   name : this.name ,
   author : this.author ,
   id : this.generateId(),
   upvote : 0,
   downvote: 0 ,
   date: new Date()

 } ;

 this.onAddQuote.emit(newQuote)
 
 //Makes forms empty after add quote button is clicked

 this.quotetext = '',
 this.name = '',
 this.author=''
}
generateId(){
 return parseInt( (new Date()).getTime().toString());
}

 
};
