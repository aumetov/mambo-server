import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { productSchema } from './product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Products', schema: productSchema}])],
    controllers: [ProductController],
    providers: [ProductService, ProductRepository],
    exports: [ProductModule]
})
export class ProductModule {};