class Book {
    constructor(id,title,author,year,status) 
    {
        this.id= id,
        this.title=title,
        this.author= author,
        this.year= year,
        this.status= status
    }
    displayInfo(){
        return ` Book includes Id :${this.id} , title :${this.title}, author :${this.author}, year :${this.year} ,status :${this.status}`
    }
}
class Library{
    constructor() {
        this.books = []
    }
    addBook(book){
        this.books.push(book)
        console.log(`Add book :${book.displayInfo()}`)
    }
    removeBook(id){
        this.books = this.books.filter(book=>book.id !== id)
        console.log(`Delete book id ${id}`)
    }
    findBookByTitle(title){
        const findTitle = this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()))
        if(findTitle.length>0){
            console.log("Book :")
            findTitle.forEach(book => console.log(book.displayInfo()))
        }else{
            console.log("Not found")
        }
    }

    borrowBook(id){
        const book = this.books.find(book => book.id === id);
        if (book) {
            if (book.status === "available") {
                book.status = "borrowed";
                console.log(`You borrowed: ${book.displayInfo()}`);
            } else {
                console.log(`Book is already borrowed: ${book.displayInfo()}`);
            }
        } else {
            console.log(`No book found with id: ${id}`);
        }
    }
    returnBook(id){
        const book = this.books.find(book => book.id === id);
        if (book) {
            if (book.status === "borrowed") {
                book.status = "available";
                console.log(`You returned: ${book.displayInfo()}`);
            } else {
                console.log(`Book was not borrowed: ${book.displayInfo()}`);
            }
        } else {
            console.log(`No book found with id: ${id}`);
        }
    }
    displayAllBooks(){
        if(this.books.length===0){
            console.log("No book")
        }
        else{
            console.log('List book')
            this.books.forEach(book=>console.log(book.displayInfo()))
        }
    }
    displayAvailableBooks(){
        const availableBooks = this.books.filter(book => book.status === "available");
        if (availableBooks.length > 0) {
            console.log("Available books:");
            availableBooks.forEach(book => console.log(book.displayInfo()));
        } else {
            console.log("No available books.");
        }
    }
}
const library = new Library();

library.addBook(new Book(1, "JavaScript Basics", "John Doe", 2020,"available"));
library.addBook(new Book(2, "Node.js Guide", "Jane Smith", 2019,"available"));
library.addBook(new Book(3, "React Handbook", "Emily White", 2021,"available"));

library.displayAllBooks();


library.findBookByTitle("JavaScript");

library.borrowBook(1);


library.returnBook(1);


library.displayAvailableBooks();


library.removeBook(3);


library.displayAllBooks();