const myLibrary = [];

function Book(name, author, pages, read){
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor ")
    }
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return (`${this.name} ${this.author} ${this.pages} ${this.read}`);
    }
}

const theHobbit = new Book("The Hobbit", "by J.R.R. Tolkien", "295 pages", "not read yet");

function addBookToLibrary() {
const newBook = new Book(name, author, pages, read);

}




function Player(name, marker){
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor ")
    }
 this.name = name ;
 this.marker = marker;
 this.sayName = function(){
    console.log(`${this.name} the ${this.marker}`)
 }
}

const playerOne = new Player('fajar', 'jobless');
const playerTwo = new Player('fajar','homeless')

console.log(`${playerOne.name} the ${playerOne.marker}`)

console.log(Object.getPrototypeOf(playerOne));