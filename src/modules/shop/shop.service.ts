import {Injectable} from '@nestjs/common'
import { ShopRepository } from './shop.repository';
import { ShopDocument } from './shop.entity';
import { ShopCreateRequestDto, ShopUpdateRequestDto } from './shop.interfaces';

interface IShopService {
    createOne(shop: ShopDocument): Promise<ShopDocument>
    updateOne(id: string, shop: ShopDocument)
    getAll(filters: any): Promise<any>
    findOneById(id: string): Promise<any>
    deleteOne(id: string): Promise<void>
}

@Injectable()
export class ShopService implements IShopService {
  constructor(
    private readonly repository: ShopRepository,
  ) {
  }

  getAll(filters: any): Promise<any> {
    return this.repository.getAll(filters)
  }

  createOne(shop: ShopCreateRequestDto): Promise<ShopDocument> {
    return this.repository.createOne(shop)
  }

  updateOne(id: string, shop: ShopUpdateRequestDto): Promise<ShopDocument> {
    return this.repository.updateOne(id, shop);
  }

  deleteOne(id: string): Promise<void> {
    return this.repository.deleteOne(id)
  }

  findOneById(id: string): Promise<any | undefined> {
    return this.repository.findOneById(id)
  }
}
