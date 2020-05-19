import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {CategoryService} from './category.service';
import { CategoryDocument } from './category.entity';
import { CategoryCreateRequestDto, CategoryUpdateRequestDto } from './category.interfaces';

@Controller('category')
@UsePipes(new ValidationPipe())
export class CategoryController {
  constructor(
    private readonly service: CategoryService
  ) {
  }

  @Get()
  getAll(@Body() filters: any): Promise<any> {
    return this.service.getAll(filters)
  }

  @Get(':id')
  async findOneById(@Param('id') id: string): Promise<any> {
    const category = await this.service.findOneById(id)
    if (!category) {
      throw new NotFoundException('not found')
    }
    return category
  }

  @Post()
  createOne(@Body() dto: CategoryCreateRequestDto): Promise<any> {
    return this.service.createOne(dto)
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() dto: CategoryUpdateRequestDto): Promise<any> {
    return this.service.updateOne(id, dto)
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): Promise<void> {
    return this.service.deleteOne(id)
  }
}