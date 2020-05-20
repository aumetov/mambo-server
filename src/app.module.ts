import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopModule } from './modules/shop/shop.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://nodebois:nadonoda@cluster0-vrmgf.mongodb.net/test?retryWrites=true&w=majority"),
    CategoryModule,
    ShopModule,
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
