import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderRepository } from './order.repository';
import { orderSchema } from './order.entity';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Orders', schema: orderSchema}])],
    controllers: [OrderController],
    providers: [OrderService, OrderRepository],
    exports: [OrderModule]
})
export class OrderModule {};