package org.example;

public class BookService {
    private BookRepository bookRepository;


    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("BookService: Adding book - " + title);
        bookRepository.saveBook(title);
    }
}
