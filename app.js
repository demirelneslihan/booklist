//Book Class: Represents a Book 
class Book{
    constuctor (title, author, isbn ){
        this.title=title;
        this.author= author;
        this.isbn=isbn;
      }
}
//UI Class: Handle Uı Tasks
class UI{
    static displayBooks(){
        const StoredBooks= [
            {
                title: 'Book One',
                author: 'Jan e ',
                isbn: '34'
            },
            {
                title: 'Book Two',
                author: 'Jane',
                isbn: '45'
            }
        ];

        const book = StoredBooks;
        StoredBooks.forEach((book) => UI.addBookToList(book));  
    }

    static addBookToList(book){
        const list = document.createElement('tr');
        row.innerHTML=
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class= "btn btn-danger btn-sm delete">X</a></td>
        ;
        list.appendChild(row);
    }
    static deleteBook(el){
        if (el.clasList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message,className){
        const div = document.createElement('div');
        div.className='alert alert-${className}';
        div.appendChild(document.createTextNode(message));
        const centainer =document.querySelector('.container');
        const form= document.querySelector('#book-form');
        ServiceWorkerContainer.insertBefore(div,form);

        //Vanish in 3 seconds
        setTimeout(()=> document.querySelector('.alert'.remove(),3000);
    }

    static ClearFields(){
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';
    }
}

//Store Class: Hansles Storage 
class Store { 
    static getBooks(){
        let books ;
        if(localStorage.getItem('books')===null){
            books=[];
        }
        else{
            books=JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book){
        const book= Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));

    }
    static removeBook(isbm){

    }
}







//Event: Display Books 
document.addEventListener('DOMContentLoaded',UI.displayBooks,displayBooks);

//Event: Add a Book 
document.querySelector('#book-form').addEventListener('submit',(e)=>{
    
    //Prevent actual submit
    e.preventDefault();
        
    // Get form  values 
    const title = document.querySelector('#title').value;
    const author= document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Validate
    if(title=== '' || author === ''|| isbn===''){
        UI.showAlert('Please fill in a all fields','danger');

    } else {

    //Instatiate book
    const book =new Book(title,author,isbn);

    //Add Book to UI
    UI.addBookToList(book);

    //Show success message 
    UI.showAlert('Book Added','success');


    //Clear fields
    UI.ClearFields();
    }
});

    //Event : Remove a Book 
    document.querySelector('#book-list').addEventListener('click',(e)=>{
        UI.deleteBook(e.target);
    

    //Show success message
    UI.showAlert('Book Removed', 'succes');

});
