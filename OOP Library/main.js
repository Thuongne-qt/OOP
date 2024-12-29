class Book {
    constructor(id,title,author,year,status,categories= []) 
    {
        this.id= id,
        this.title=title,
        this.author= author,
        this.year= year,
        this.status= status,
        //thêm thuộc tính category
        this.categories= categories

    }
    displayInfo(){
        return ` Book includes Id :${this.id} , title :${this.title}, author :${this.author}, year :${this.year} ,status :${this.status}, category:${this.categories.join(",")}`
    }
}
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.borrowedBooks = []; // Danh sách sách đã mượn
    }

    borrowBook(bookId, library) {
        const book = library.books.find(book => book.id === bookId);
        if (!book) {
            console.log(`Book with ID "${bookId}" not found.`);
            return;
        }

        if (book.status === "borrowed") {
            console.log(`Book "${book.title}" is already borrowed.`);
        } else {
            book.status = "borrowed";
            this.borrowedBooks.push(bookId);
            library.borrowHistory.push({
                bookId: bookId,
                borrower: this.name,
                action: "borrowed",
                date: new Date().toISOString(),
            });
            console.log(`User "${this.name}" borrowed book: ${book.displayInfo()}`);
        }
    }

    returnBook(bookId, library) {
        const book = library.books.find(book => book.id === bookId);
        if (!book) {
            console.log(`Book with ID "${bookId}" not found.`);
            return;
        }

        if (book.status === "available") {
            console.log(`Book "${book.title}" is already available.`);
        } else {
            book.status = "available";
            this.borrowedBooks = this.borrowedBooks.filter(id => id !== bookId);
            library.borrowHistory.push({
                bookId: bookId,
                borrower: this.name,
                action: "returned",
                date: new Date().toISOString(),
            });
            console.log(`User "${this.name}" returned book: ${book.displayInfo()}`);
        }
    }
}

class Library{
    constructor() {
        this.books = [],
        this.categories= [],
        this.users= [],
        //lịch sử mượn sách
        this.borrowHistory = []
    }
    //thêm phương thức thêm danh mục sách
    addCategory(categoryName){
        if(this.categories.includes(categoryName)){
            console.log("No oke")
        }
        else{
            this.categories.push(categoryName)
            console.log(`Add category ${categoryName}`)
        }
        
    }
    //Lọc danh sach theo thể loại
    filterBooksByCategory(category){
        const filterdBooks = this.books.filter(book=>book.categories.includes(category))
        if(filterdBooks.length===0){
            console.log("No book")
        }else{
            console.log(`book category ${category}:`)
            filterdBooks.forEach(book=>console.log(book.displayInfo()))
        }
    }
    getStatistics() {
        const availableCount = this.books.filter(book => book.status === "available").length;
        const borrowedCount = this.books.filter(book => book.status === "borrowed").length;
    
        console.log("Library Statistics:");
        console.log(`Available books: ${availableCount}`);
        console.log(`Borrowed books: ${borrowedCount}`);
    }
 

    // Hiển thị lịch sử mượn và trả sách
    viewBorrowHistory() {
        if (this.borrowHistory.length === 0) {
            console.log("No borrow history available.");
        } else {
            console.log("Borrow and Return History:");
            this.borrowHistory.forEach(record => {
                console.log(
                    `Book ID: ${record.bookId}, Borrower: ${record.borrower}, Action: ${record.action}, Date: ${record.date}`
                );
            });
        }
    }
    //thêm user
    addUser(user) {
        this.users.push(user);
        console.log(`Added user: ${user.name} (ID: ${user.id})`);
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
library.addBook(new Book(4, "Dune", "Frank Herbert", 1965, "available", ["Science Fiction"]));
library.addBook(new Book(5, "The Hobbit", "J.R.R. Tolkien", 1937, "available", ["Fantasy"]));

library.addCategory('History')
library.addCategory("Science Fiction");
library.addCategory("Fantasy");

library.filterBooksByCategory("Science Fiction");
const user1 = new User(1, "Alice");
const user2 = new User(2, "Bob");
library.addUser(user1);
library.addUser(user2);

user1.borrowBook(1, library);
user1.returnBook(1, library);

library.getStatistics();

library.viewBorrowHistory();

library.filterBooksByCategory("Fantasy");

library.findBookByTitle("JavaScript");

library.borrowBook(1);


library.returnBook(1);


library.displayAvailableBooks();


library.removeBook(3);


library.displayAllBooks();