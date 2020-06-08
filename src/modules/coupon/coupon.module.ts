import { Module } from '@nestjs/common';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';
import { CouponRepository } from './coupon.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { couponSchema } from './coupon.entity';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Coupons', schema: couponSchema}])],
    controllers: [CouponController],
    providers: [CouponService, CouponRepository],
})
export class CouponModule {};