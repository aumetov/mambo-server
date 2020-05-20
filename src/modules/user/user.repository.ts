import {Injectable} from '@nestjs/common';
import { UserDocument } from './user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCreateRequestDto, UserUpdateRequestDto } from './user.interfaces';

interface IUserRepository {
    createOne(user: UserDocument): Promise<UserDocument>
    updateOne(id: string, user: UserDocument): Promise<UserDocument>
    getAll(req: any): Promise<any>
    findOneById(id: string): Promise<UserDocument>
    deleteOne(id: string): Promise<any>
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
}
