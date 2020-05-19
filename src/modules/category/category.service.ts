import {Injectable} from '@nestjs/common'
import { CategoryRepository } from './category.repository';
import { CategoryDocument } from './category.entity';

interface ICategoryService {
    createOne(invoice: CategoryDocument): Promise<CategoryDocument>
    updateOne(id: string, invoice: CategoryDocument)
    getAll(filters: any): Promise<any>
    findOneById(id: string): Promise<any>
    deleteOne(id: string): Promise<void>
}

@Injectable()
export class CategoryService implements ICategoryService {
  constructor(
    private readonly repository: CategoryRepository,
  ) {
  }

  getAll(filters: any): Promise<any> {
    return this.repository.getAll(filters)
  }

  createOne(invoice: CategoryDocument): Promise<CategoryDocument> {
    return this.repository.createOne(invoice)
  }

  updateOne(id: string, invoice: CategoryDocument): Promise<CategoryDocument> {
    return this.repository.updateOne(id, invoice);
  }

  deleteOne(id: string): Promise<void> {
    return this.repository.deleteOne(id)
  }

  findOneById(id: string): Promise<any | undefined> {
    return this.repository.findOneById(id)
  }
}
