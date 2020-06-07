import { Controller, Get, UsePipes, ValidationPipe, Body, Param, NotFoundException, Post, Put, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import {FilesInterceptor} from '@nestjs/platform-express';
import { ProductService } from './product.service';
import { ProductUpdateRequestDto, ProductCreateBodyDto, ProductFiltersDto } from './product.interfaces';

@Controller('product')
@UsePipes(new ValidationPipe())
export class ProductController {
    constructor(
        private readonly service: ProductService
    ){}

    @Get()
    getAll(@Body() filters: ProductFiltersDto) {
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

    @Post('/')
    @UseInterceptors(FilesInterceptor('files'))
    async createOne(@UploadedFiles() files: any, @Body() body: ProductCreateBodyDto) {
        return this.service.createOne(body)
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