import {Injectable} from '@nestjs/common';
import { ProductDocument } from './product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductCreateRequestDto, ProductUpdateRequestDto, ProductFiltersDto } from './product.interfaces';

interface IProductRepository {
    createOne(product: ProductCreateRequestDto): Promise<ProductDocument>
    updateOne(id: string, product: ProductUpdateRequestDto): Promise<ProductDocument>
    getAll(filters: ProductFiltersDto): Promise<any>
    findOneById(id: string): Promise<ProductDocument>
    deleteOne(id: string): Promise<any>
}

@Injectable()
export class ProductRepository implements IProductRepository {
constructor(@InjectModel('Products') private readonly productModel:Model<ProductDocument>){}
  async getAll(filters: ProductFiltersDto): Promise<any> {
    const query: any = {};

    filters.colors ? query.colors = {$in: filters.colors} : null
    filters.sizes ? query.sizes = {$in: filters.sizes} : null
    filters.sex ? query.sex = filters.sex : null
    filters.categories ? query.categories = {$in: filters.categories} : null
    filters.priceRange ? query.price = {$lte: filters.priceRange.max || 1000000000, $gte: filters.priceRange.max || 0 } : null
    console.log(query)

    return await this.productModel.find(query)
  }

  async createOne(product: ProductCreateRequestDto): Promise<ProductDocument> {
    //need to be fixed: product must be object not json 
    const newProduct = new this.productModel(JSON.parse(`${product}`));
    return await newProduct.save();
  }

  async updateOne(id: string, product: ProductUpdateRequestDto): Promise<ProductDocument> {
    return await this.productModel.findByIdAndUpdate(id, product, {new: true});
  }

  async deleteOne(id: string): Promise<any> {
    return await this.productModel.findByIdAndRemove(id);
  }

  async findOneById(id: string): Promise<ProductDocument> {
    return await this.productModel.findOne({_id: id})
  }
}
