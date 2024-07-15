import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Add New Book</h2>
    <form (ngSubmit)="onSubmit()">
      <div>
        <label for="title">Title:</label>
        <input id="title" [(ngModel)]="book.title" name="title" required>
      </div>
      <div>
        <label for="author">Author:</label>
        <input id="author" [(ngModel)]="book.author" name="author" required>
      </div>
      <div>
        <label for="isbn">ISBN:</label>
        <input id="isbn" [(ngModel)]="book.isbn" name="isbn" required>
      </div>
      <div>
        <label for="publicationYear">Publication Year:</label>
        <input id="publicationYear" type="number" [(ngModel)]="book.publicationYear" name="publicationYear" required>
      </div>
      <button type="submit">Add Book</button>
    </form>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 300px;
    }
    input {
      width: 100%;
      padding: 5px;
    }
    button {
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
    }
  `]
})
export class BookFormComponent {
  book: Book = { title: '', author: '', isbn: '', publicationYear: 0 };

  constructor(private bookService: BookService) {}

  onSubmit(): void {
    this.bookService.addBook(this.book);
    this.book = { title: '', author: '', isbn: '', publicationYear: 0 };
  }
}