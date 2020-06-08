import {Injectable} from '@nestjs/common'
import { CouponRepository } from './coupon.repository';
import { CouponDocument } from './coupon.entity';
import { CreateCouponRequestDto, UpdateCouponRequestDto } from './coupon.interfaces';

interface ICouponService {
    createOne(coupon: CreateCouponRequestDto): Promise<CouponDocument>
    updateOne(id: string, coupon: UpdateCouponRequestDto)
    getAll(): Promise<Array<CouponDocument>>
    findOneById(id: string): Promise<CouponDocument>
    deleteOne(id: string): Promise<void>
}

@Injectable()
export class CouponService implements ICouponService {
  constructor(
    private readonly repository: CouponRepository
  ) {
  }

  getAll(): Promise<Array<CouponDocument>> {
    return this.repository.getAll()
  }

  createOne(coupon: CreateCouponRequestDto): Promise<CouponDocument> {
    return this.repository.createOne(coupon)
  }

  updateOne(id: string, coupon: UpdateCouponRequestDto): Promise<CouponDocument> {
    return this.repository.updateOne(id, coupon);
  }

  deleteOne(id: string): Promise<void> {
    return this.repository.deleteOne(id)
  }

  findOneById(id: string): Promise<CouponDocument> {
    return this.repository.findOneById(id)
  }
}
