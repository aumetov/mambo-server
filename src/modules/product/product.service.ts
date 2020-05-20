import {Injectable} from '@nestjs/common'
import { ProductRepository } from './product.repository';
import { ProductDocument } from './product.entity';
import { ProductCreateRequestDto, ProductUpdateRequestDto } from './product.interfaces';

interface IProductService {
    createOne(product: ProductDocument): Promise<ProductDocument>
    updateOne(id: string, product: ProductDocument)
    getAll(filters: any): Promise<any>
    findOneById(id: string): Promise<any>
    deleteOne(id: string): Promise<void>
}

@Injectable()
export class ProductService implements IProductService {
  constructor(
    private readonly repository: ProductRepository,
  ) {
  }

  getAll(filters: any): Promise<any> {
    return this.repository.getAll(filters)
  }

  createOne(product: ProductCreateRequestDto): Promise<ProductDocument> {
    return this.repository.createOne(product)
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
