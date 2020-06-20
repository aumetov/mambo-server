import {Injectable} from '@nestjs/common';
import { UserDocument } from './user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCreateRequestDto, UserUpdateRequestDto, AddItemToCartDto } from './user.interfaces';

interface IUserRepository {
    createOne(user: UserDocument): Promise<UserDocument>
    updateOne(id: string, user: UserDocument): Promise<UserDocument>
    getAll(req: any): Promise<any>
    findOneById(id: string): Promise<UserDocument>
    findOneByEmail(email: string): Promise<UserDocument>
    deleteOne(id: string): Promise<any>
    addItemToCart(id: string, item: AddItemToCartDto): Promise<UserDocument>
    deleteItemFromCart(id: string, productId: string): Promise<UserDocument>
}

@Injectable()
export class UserRepository implements IUserRepository {
constructor(@InjectModel('Users') private readonly userModel:Model<UserDocument>){}
  async getAll(filters: any): Promise<any> {
    return await this.userModel.find()
  }

  async createOne(user: UserCreateRequestDto): Promise<UserDocument> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async updateOne(id: string, user: UserUpdateRequestDto): Promise<any> {
    return await this.userModel.findByIdAndUpdate(id, user, {new: true});
  }

  async deleteOne(id: string): Promise<any> {
    return await this.userModel.findByIdAndRemove(id);
  }

  async findOneById(id: string): Promise<UserDocument> {
    return await this.userModel.findOne({_id: id})
  }

  async findOneByEmail(email: string): Promise<UserDocument> {
    return await this.userModel.findOne({email})
  }

  async addItemToCart(id: string, item: AddItemToCartDto): Promise<UserDocument> {
    const user: UserDocument = await this.userModel.findById(id)
    user.cart = [...user.cart, item]
    return  await this.userModel.findByIdAndUpdate(id, user, {new: true});
  }

  async deleteItemFromCart(id: string, productId: string): Promise<UserDocument> {
    const user: UserDocument = await this.userModel.findById(id);
    user.cart = user.cart.filter(item => item.productId === productId)
    return await this.userModel.findByIdAndUpdate(id, user);
  }
}
