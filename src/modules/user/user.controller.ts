import { Controller, Get, Body, Param, NotFoundException, Delete, Put, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateRequestDto, UserUpdateRequestDto, AddItemToCartDto } from './user.interfaces';

@Controller('user')
export class UserController {
    constructor(
        private readonly service: UserService
    ){}

    @Get()
    getAll(@Body() filters: any) {
        return this.service.getAll(filters)
    }

    @Get(':id')
    async findOneById(@Param('id') id: string) {
        const user = await this.service.findOneById(id)
        if (!user) {
        throw new NotFoundException('not found')
        }
        return user
    }

    @Get('/:id/add-to-cart')
    addItemToCart(@Param('id') id: string, @Body() dto: AddItemToCartDto) {
        this.service.addItemToCart(id, dto)
    }

    @Post('/register')
    createOne(@Body() dto: UserCreateRequestDto) {
        return this.service.createOne(dto)
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() dto: UserUpdateRequestDto) {
        return this.service.updateOne(id, dto)
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return this.service.deleteOne(id)
    }
}