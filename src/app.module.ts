import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { BookModule } from './books/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
