import { Controller, Get, UsePipes, ValidationPipe, Body, Param, NotFoundException, Post, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductCreateRequestDto, ProductUpdateRequestDto } from './product.interfaces';

@Controller('product')
@UsePipes(new ValidationPipe())
export class ProductController {
    constructor(
        private readonly service: ProductService
    ){}

    @Get()
    getAll(@Body() filters: any) {
        return this.service.getAll(filters)
    }

    @Get(':id')
    async findOneById(@Param('id') id: string) {
        const product = await this.service.findOneById(id)
        if (!product) {
        throw new NotFoundException('not found')
        }
        return product
    }

    @Post()
    createOne(@Body() dto: ProductCreateRequestDto) {
        return this.service.createOne(dto)
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() dto: ProductUpdateRequestDto) {
        return this.service.updateOne(id, dto)
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return this.service.deleteOne(id)
    }
}