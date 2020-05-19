import {Injectable} from '@nestjs/common';
import { ShopDocument } from './shop.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ShopCreateRequestDto, ShopUpdateRequestDto } from './shop.interfaces';

interface IShopRepository {
    createOne(shop: ShopDocument): Promise<ShopDocument>
    updateOne(id: string, shop: ShopDocument): Promise<ShopDocument>
    getAll(req: any): Promise<any>
    findOneById(id: string): Promise<ShopDocument>
    deleteOne(id: string): Promise<any>
}

@Injectable()
export class ShopRepository implements IShopRepository {
constructor(@InjectModel('Shops') private readonly shopModel:Model<ShopDocument>){}
  async getAll(filters: any): Promise<any> {
    return await this.shopModel.find()
  }

  async createOne(shop: ShopCreateRequestDto): Promise<ShopDocument> {
    const newShop = new this.shopModel(shop);
    return await newShop.save();
  }

  async updateOne(id: string, shop: ShopUpdateRequestDto): Promise<any> {
    return await this.shopModel.findByIdAndUpdate(id, shop, {new: true});
  }

  async deleteOne(id: string): Promise<any> {
    return await this.shopModel.findByIdAndRemove(id);
  }

  async findOneById(id: string): Promise<ShopDocument> {
    return await this.shopModel.findOne({_id: id})
  }
}
