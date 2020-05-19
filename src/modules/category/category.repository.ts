import {Injectable} from '@nestjs/common';
import { Category, CategoryDocument } from './category.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryCreateRequestDto, CategoryUpdateRequestDto } from './category.interfaces';

interface ICategoryRepository {
    createOne(category: CategoryDocument): Promise<CategoryDocument>
    updateOne(id: string, invoice: CategoryDocument): Promise<CategoryDocument>
    getAll(req: any): Promise<any>
    findOneById(id: string): Promise<CategoryDocument>
    deleteOne(id: string): Promise<any>
}

@Injectable()
export class CategoryRepository implements ICategoryRepository {
constructor(@InjectModel('Categories') private readonly categoryModel:Model<CategoryDocument>){}
  async getAll(filters: any): Promise<any> {
    return await this.categoryModel.find()
  }

  async createOne(category: CategoryCreateRequestDto): Promise<CategoryDocument> {
    const newCategory = new this.categoryModel(category);
    return await newCategory.save();
  }

  async updateOne(id: string, category: CategoryUpdateRequestDto): Promise<any> {
    return await this.categoryModel.findByIdAndUpdate(id, category, {new: true});
  }

  async deleteOne(id: string): Promise<any> {
    return await this.categoryModel.findByIdAndRemove(id);
  }

  async findOneById(id: string): Promise<CategoryDocument> {
    return await this.categoryModel.findOne({_id: id})
  }
}
