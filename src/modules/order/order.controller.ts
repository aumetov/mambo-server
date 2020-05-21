import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderCreateRequestDto, OrderUpdateRequestDto } from './order.interfaces';

@Controller('order')
export class OrderController {
    constructor(
        private readonly service: OrderService
    ){}

    @Get()
    getAll(@Body() filters: any) {
        return this.service.getAll(filters)
    }

    @Get(':id')
    async findOneById(@Param('id') id: string) {
        const order = await this.service.findOneById(id)
        if (!order) {
            throw new NotFoundException('not found')
        }
        return order
    }

    @Post()
    createOne(@Body() order: OrderCreateRequestDto) {
        return this.service.createOne(order)
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() order: OrderUpdateRequestDto) {
        return this.service.updateOne(id, order)
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return this.service.deleteOne(id)
    }
}