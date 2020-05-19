import { Controller, Get, UsePipes, ValidationPipe, Body, Post, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopCreateRequestDto, ShopUpdateRequestDto } from './shop.interfaces';

@Controller('shop')
@UsePipes(new ValidationPipe())
export class ShopController {
    constructor(
        private readonly service: ShopService
    ){ 
    }

    @Get()
    getAll(@Body() filters: any) {
        return this.service.getAll(filters)
    }

    @Get(':id')
    async findOneById(@Param('id') id: string) {
        const shop = await this.service.findOneById(id)
        if (!shop) {
        throw new NotFoundException('not found')
        }
        return shop
    }

    @Post()
    createOne(@Body() dto: ShopCreateRequestDto) {
        return this.service.createOne(dto)
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() dto: ShopUpdateRequestDto) {
        return this.service.updateOne(id, dto)
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return this.service.deleteOne(id)
    }
}