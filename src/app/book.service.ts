import { Injectable } from '@angular/core';
import { Book } from './models/book';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [];
  private booksSubject = new BehaviorSubject<Book[]>([]);

  constructor() {}

  getBooks(): Observable<Book[]> {
    return this.booksSubject.asObservable();
  }

  addBook(book: Book): void {
    book.id = this.books.length + 1;
    this.books.push(book);
    this.booksSubject.next([...this.books]);
  }

  updateBook(book: Book): void {
    const index = this.books.findIndex(b => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
      this.booksSubject.next([...this.books]);
    }
  }

  deleteBook(id: number): void {
    this.books = this.books.filter(b => b.id !== id);
    this.booksSubject.next([...this.books]);
  }
}