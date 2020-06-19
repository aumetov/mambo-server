import {Injectable} from '@nestjs/common'
import { UserRepository } from './user.repository';
import { UserDocument } from './user.entity';
import { UserCreateRequestDto, UserUpdateRequestDto, AddItemToCartDto } from './user.interfaces';

interface IUserService {
    createOne(user: UserDocument): Promise<UserDocument>
    updateOne(id: string, user: UserDocument)
    getAll(filters: any): Promise<any>
    findOneById(id: string): Promise<UserDocument>
    findOneByEmail(email: string): Promise<UserDocument>
    deleteOne(id: string): Promise<void>
    addItemToCart(id: string, cartItemDto: AddItemToCartDto): Promise<UserDocument>
}

@Injectable()
export class UserService implements IUserService {
  constructor(
    private readonly repository: UserRepository,
  ) {
  }

  getAll(filters: any): Promise<any> {
    return this.repository.getAll(filters)
  }

  createOne(user: UserCreateRequestDto): Promise<UserDocument> {
    return this.repository.createOne(user)
  }
 
  updateOne(id: string, user: UserUpdateRequestDto): Promise<UserDocument> {
    return this.repository.updateOne(id, user);
  }

  deleteOne(id: string): Promise<void> {
    return this.repository.deleteOne(id)
  }

  findOneById(id: string): Promise<UserDocument> {
    return this.repository.findOneById(id)
  }

  findOneByEmail(email: string): Promise<UserDocument> {
    return this.repository.findOneByEmail(email)
  }

  addItemToCart(id: string, item: AddItemToCartDto) {
    return this.repository.addItemToCart(id, item)
  }
}
