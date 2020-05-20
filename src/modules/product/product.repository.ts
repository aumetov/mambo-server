import {Injectable} from '@nestjs/common';
import { ProductDocument } from './product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductCreateRequestDto, ProductUpdateRequestDto } from './product.interfaces';

interface IProductRepository {
    createOne(product: ProductDocument): Promise<ProductDocument>
    updateOne(id: string, product: ProductDocument): Promise<ProductDocument>
    getAll(req: any): Promise<any>
    findOneById(id: string): Promise<ProductDocument>
    deleteOne(id: string): Promise<any>
}

@Injectable()
export class ProductRepository implements IProductRepository {
constructor(@InjectModel('Products') private readonly productModel:Model<ProductDocument>){}
  async getAll(filters: any): Promise<any> {
    return await this.productModel.find()
  }

  async createOne(product: ProductCreateRequestDto): Promise<ProductDocument> {
    const newProduct = new this.productModel(product);
    return await newProduct.save();
  }

  async updateOne(id: string, product: ProductUpdateRequestDto): Promise<any> {
    return await this.productModel.findByIdAndUpdate(id, product, {new: true});
  }

  async deleteOne(id: string): Promise<any> {
    return await this.productModel.findByIdAndRemove(id);
  }

  async findOneById(id: string): Promise<ProductDocument> {
    return await this.productModel.findOne({_id: id})
  }
}
