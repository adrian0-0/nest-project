import { Injectable, Param } from '@nestjs/common';
import { BooksMockData, IBooks } from './fakeDatabase';
import { randomUUID } from 'crypto';

@Injectable()
export class BookService {
  getAllBooks(): IBooks[] {
    return BooksMockData;
  }

  findBook(bookId: string): IBooks | undefined {
    return BooksMockData.find((book) => book.id === bookId);
  }

  addBook(book: Partial<IBooks>): IBooks {
    const newBookData: IBooks = {
      id: randomUUID(),
      author: book.author ?? '',
      title: book.title ?? '',
      publicationYear: book.publicationYear ?? 0,
    };
    BooksMockData.push(newBookData);
    return newBookData;
  }

  updateBook(
    bookId: string,
    UpdatedBook: Partial<IBooks>,
  ): IBooks | undefined | string {
    const findBookToUpdate = BooksMockData.find((book) => book.id === bookId);
    const updateBook = {
      id: bookId ?? findBookToUpdate.id,
      author: UpdatedBook.author ?? findBookToUpdate.author,
      title: UpdatedBook.title ?? findBookToUpdate.title,
      publicationYear:
        UpdatedBook.publicationYear ?? findBookToUpdate.publicationYear,
    };
    return updateBook;
  }
}
