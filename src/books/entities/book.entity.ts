import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  alreadyRead: boolean;

  @Prop()
  pages: number;

  @Prop()
  genre: string;

  @Prop()
  imageURL: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
