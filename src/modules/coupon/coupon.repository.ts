import {Injectable} from '@nestjs/common';
import { CouponDocument } from './coupon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCouponRequestDto, UpdateCouponRequestDto } from './coupon.interfaces';

interface ICouponRepository {
    createOne(coupon: CreateCouponRequestDto): Promise<CouponDocument>
    updateOne(id: string, coupon: UpdateCouponRequestDto): Promise<CouponDocument>
    getAll(): Promise<Array<CouponDocument>>
    findOneById(id: string): Promise<CouponDocument>
    deleteOne(id: string): Promise<any>
}

@Injectable()
export class CouponRepository implements ICouponRepository {
constructor(@InjectModel('Coupon') private readonly couponModel:Model<CouponDocument>){}
  async getAll(): Promise<Array<CouponDocument>> {
    return await this.couponModel.find()
  }

  async createOne(coupon: CreateCouponRequestDto): Promise<CouponDocument> {
    const newCoupon = new this.couponModel(coupon);
    return await newCoupon.save();
  }

  async updateOne(id: string, coupon: UpdateCouponRequestDto): Promise<CouponDocument> {
    return await this.couponModel.findByIdAndUpdate(id, coupon, {new: true});
  }

  async deleteOne(id: string): Promise<any> {
    return await this.couponModel.findByIdAndRemove(id);
  }

  async findOneById(id: string): Promise<CouponDocument> {
    return await this.couponModel.findOne({_id: id})
  }
}
