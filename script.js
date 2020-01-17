const quotes = [
{
 name:'Thalapathy Vijay',
 quote:'Kill Them With Success And Bury Them With A Smile'
},
{
 name:'Rajinikanth',
 quote: 'Crush your ego then you will find who you are'
},
{
 name:'Dhanush',
 quote:'A Smooth Life Has Never Made A Strong Person'
},
{
 name:'HipHop Tamizha', 
 quote:'Push yourself because No one else is going do it for you'

},
{
 name:'Thala Ajith',
 quote:'Love your haters because they are your biggest fans'
} 
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote (){

    let number = Math.floor(Math.random()*quotes.length);

    console.log(number);

    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;

}

//const simpleQuotes = [

//{
 //name:'author number 1',
 //quote:'quote number 1'
//},
//{
 //name:'author number 2',
 //quote:'quote number 2'
//}








