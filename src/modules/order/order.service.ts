import {Injectable} from '@nestjs/common'
import { OrderRepository } from './order.repository';
import { OrderDocument } from './order.entity';
import { OrderCreateRequestDto, OrderUpdateRequestDto } from './order.interfaces';

interface IOrderService {
    createOne(order: OrderDocument): Promise<OrderDocument>
    updateOne(id: string, order: OrderDocument)
    getAll(filters: any): Promise<any>
    findOneById(id: string): Promise<any>
    deleteOne(id: string): Promise<void>
}

@Injectable()
export class OrderService implements IOrderService {
  constructor(
    private readonly repository: OrderRepository,
  ) {
  }

  getAll(filters: any): Promise<any> {
    return this.repository.getAll(filters)
  }

  createOne(order: OrderCreateRequestDto): Promise<OrderDocument> {
    return this.repository.createOne(order)
  }

  updateOne(id: string, order: OrderUpdateRequestDto): Promise<OrderDocument> {
    return this.repository.updateOne(id, order);
  }

  deleteOne(id: string): Promise<void> {
    return this.repository.deleteOne(id)
  }

  findOneById(id: string): Promise<any | undefined> {
    return this.repository.findOneById(id)
  }
}
