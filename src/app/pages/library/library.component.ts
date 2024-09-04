import { Component } from '@angular/core';
import {ThumbsPipe} from "../../utils/pipes/thumbs.pipe";
import {NgClass} from "@angular/common";
import {FormsModule} from "@angular/forms";


class Book {
  title;
  author;
  isRead;

  constructor(title: string,author: string,isRead: boolean) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
  }

}

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    ThumbsPipe,
    NgClass,
    FormsModule
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {

  books: Book[] = [
    {
      title: 'Autant en emporte le vent',
      author: 'Margaret Mitchell',
      isRead: false
    },
    {
      title: 'L\'amour',
      author: 'Stendhal',
      isRead: false
    },
    {
      title: 'Vie après la mort',
      author: 'Deepak Chopra',
      isRead: true
    },
    {
      title: 'Autant en emporte le vent',
      author: 'Margaret Mitchell',
      isRead: true
    }
  ];

  newBook: Book = new Book('', '', false);

isRead = false;

toggleRead(index: number) {
    this.books[index].isRead = !this.books[index].isRead
  }

submitBook() {
    if (this.newBook.title && this.newBook.author) {
      this.books.push(new Book(this.newBook.title, this.newBook.author, this.newBook.isRead));
      this.newBook = new Book('', '', false);
    }
  }


}
