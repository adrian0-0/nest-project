import { Injectable, Param } from '@nestjs/common';
import { BooksMockData, IBooks } from './fakeDatabase';
import { uuid } from '../components/uuid';

@Injectable()
export class BookService {
  getAllBooks(): IBooks[] {
    return BooksMockData;
  }

  findBook(bookId: string): IBooks | undefined {
    return BooksMockData.find((book) => book.id === bookId);
  }
}
