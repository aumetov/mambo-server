import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {CategoryService} from './category.service';
import { CategoryCreateRequestDto, CategoryUpdateRequestDto } from './category.interfaces';

@Controller('categories')
@UsePipes(new ValidationPipe())
export class CategoryController {
  constructor(
    private readonly service: CategoryService
  ) {
  }

  @Get()
  getAll(@Body() filters: any) {
    return this.service.getAll(filters)
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    const category = await this.service.findOneById(id)
    if (!category) {
      throw new NotFoundException('not found')
    }
    return category
  }

  @Post()
  createOne(@Body() dto: CategoryCreateRequestDto) {
    return this.service.createOne(dto)
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() dto: CategoryUpdateRequestDto) {
    return this.service.updateOne(id, dto)
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.service.deleteOne(id)
  }
}