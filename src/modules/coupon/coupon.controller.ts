import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CreateCouponRequestDto } from './coupon.interfaces';

@Controller('coupons')
export class CouponController {
    constructor(
        private readonly service: CouponService
    ){}

    @Post()
    createOne(@Body() dto: CreateCouponRequestDto) {
        return this.service.createOne(dto)
    }

    @Get(':id')
    getOneById(@Param('id') id: string) {
        return this.service.findOneById(id)
    }
}