import {Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {CategoryService} from './category.service';
import { CategoryDocument } from './category.entity';

@Controller('category')
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
  createOne(@Body() dto: CategoryDocument): Promise<any> {
    return this.service.createOne(dto)
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() dto: CategoryDocument): Promise<any> {
    return this.service.updateOne(id, dto)
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): Promise<void> {
    return this.service.deleteOne(id)
  }
}