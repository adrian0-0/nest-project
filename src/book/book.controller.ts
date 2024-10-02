import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { BooksMockData, IBooks } from './fakeDatabase';

@Controller('book')
export class BookController {
  constructor(private readonly BookService: BookService) {}

  @Get()
  getAllBooks(): IBooks[] {
    return this.BookService.getAllBooks();
  }

  @Get('getById/:id')
  getById(@Param('id') id: string): IBooks {
    return this.BookService.findBook(id);
  }
}
