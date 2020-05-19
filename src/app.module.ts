import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category/category.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://nodebois:nadonoda@cluster0-vrmgf.mongodb.net/test?retryWrites=true&w=majority"),
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
