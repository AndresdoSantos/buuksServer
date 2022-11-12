import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

import { Book, BookDocument } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  create(createUserDto: CreateBookDto) {
    const user = new this.bookModel(createUserDto);

    return user.save();
  }

  findAll() {
    return this.bookModel.find();
  }

  findOne(id: string) {
    return this.bookModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateBookDto) {
    return this.bookModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateUserDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.bookModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
