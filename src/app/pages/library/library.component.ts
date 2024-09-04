import { Component } from '@angular/core';
import {ThumbsPipe} from "../../utils/pipes/thumbs.pipe";
import {NgClass} from "@angular/common";


type Book = {
  title: string;
  author: string;
  isRead: boolean;
}

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    ThumbsPipe,
    NgClass
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

isRead = false;

toggleRead(index: number) {
    this.books[index].isRead = !this.books[index].isRead
  }





}
