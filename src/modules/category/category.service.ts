import {Injectable} from '@nestjs/common'
import { CategoryRepository } from './category.repository';
import { CategoryDocument } from './category.entity';
import { CategoryCreateRequestDto, CategoryUpdateRequestDto } from './category.interfaces';

interface ICategoryService {
    createOne(category: CategoryDocument): Promise<CategoryDocument>
    updateOne(id: string, category: CategoryDocument)
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

  createOne(category: CategoryCreateRequestDto): Promise<CategoryDocument> {
    return this.repository.createOne(category)
  }

  updateOne(id: string, category: CategoryUpdateRequestDto): Promise<CategoryDocument> {
    return this.repository.updateOne(id, category);
  }

  deleteOne(id: string): Promise<void> {
    return this.repository.deleteOne(id)
  }

  findOneById(id: string): Promise<any | undefined> {
    return this.repository.findOneById(id)
  }
}
