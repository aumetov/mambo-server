import {Injectable} from '@nestjs/common';
import { OrderDocument } from './order.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderCreateRequestDto, OrderUpdateRequestDto } from './order.interfaces';

interface IOrderRepository {
    createOne(order: OrderDocument): Promise<OrderDocument>
    updateOne(id: string, order: OrderDocument): Promise<OrderDocument>
    getAll(req: any): Promise<any>
    findOneById(id: string): Promise<OrderDocument>
    deleteOne(id: string): Promise<any>
}

@Injectable()
export class OrderRepository implements IOrderRepository {
constructor(@InjectModel('Orders') private readonly orderModel:Model<OrderDocument>){}
  async getAll(filters: any): Promise<any> {
    return await this.orderModel.find()
  }

  async createOne(order: OrderCreateRequestDto): Promise<OrderDocument> {
    const newOrder = new this.orderModel(order);
    return await newOrder.save();
  }

  async updateOne(id: string, order: OrderUpdateRequestDto): Promise<any> {
    return await this.orderModel.findByIdAndUpdate(id, order, {new: true});
  }

  async deleteOne(id: string): Promise<any> {
    return await this.orderModel.findByIdAndRemove(id);
  }

  async findOneById(id: string): Promise<OrderDocument> {
    return await this.orderModel.findOne({_id: id})
  }
}
