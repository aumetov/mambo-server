import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { productSchema } from './product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { ImageUploadService } from './image-upload.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Products', schema: productSchema}])],
    controllers: [ProductController],
    providers: [ProductService, ImageUploadService, ProductRepository],
    exports: [ProductModule]
})
export class ProductModule {};