import {Injectable} from '@nestjs/common'
import { ProductRepository } from './product.repository';
import { ProductDocument } from './product.entity';
import { ProductUpdateRequestDto, ProductCreateBodyDto, ProductFiltersDto } from './product.interfaces';
import { ImageUploadService } from './image-upload.service';

interface IProductService {
    createOne(product: ProductCreateBodyDto): Promise<ProductDocument>
    updateOne(id: string, product: ProductUpdateRequestDto)
    getAll(filters: any): Promise<any>
    findOneById(id: string): Promise<any>
    deleteOne(id: string): Promise<void>
}

@Injectable()
export class ProductService implements IProductService {
  constructor(
    private readonly repository: ProductRepository,
    private readonly imageUploadService: ImageUploadService
  ) {
  }

  getAll(filters: ProductFiltersDto): Promise<any> {
    return this.repository.getAll(filters)
  }

  createOne(product: ProductCreateBodyDto): Promise<ProductDocument> {
    // upload images to s3 and update product info body
    //this.imageUploadService.upload(images)
    return this.repository.createOne(product.productInfo)
  }

  updateOne(id: string, product: ProductUpdateRequestDto): Promise<ProductDocument> {
    return this.repository.updateOne(id, product);
  }

  deleteOne(id: string): Promise<void> {
    return this.repository.deleteOne(id)
  }

  findOneById(id: string): Promise<any | undefined> {
    return this.repository.findOneById(id)
  }
}
