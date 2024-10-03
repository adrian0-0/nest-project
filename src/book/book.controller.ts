import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { BooksMockData, IBooks } from './fakeDatabase';
import { randomUUID } from 'crypto';

@Controller('book')
export class BookController {
  constructor(private readonly BookService: BookService) {}

  @Get()
  getAllBooks(): IBooks[] {
    return this.BookService.getAllBooks();
  }

  @Get(':id')
  getById(@Param('id') id: string): IBooks {
    return this.BookService.findBook(id);
  }

  @Post()
  addBook(@Body() book: Partial<IBooks>): IBooks {
    if (!book.author || !book.publicationYear || !book.title) {
      return undefined;
    }
    return this.BookService.addBook(book);
  }

  @Put(':id')
  updatedBook(
    @Param('id') id: string,
    @Body() book: Partial<IBooks>,
  ): IBooks | undefined | string {
    return this.BookService.updateBook(id, book);
  }
}
