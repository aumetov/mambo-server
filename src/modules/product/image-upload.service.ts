import {Injectable} from '@nestjs/common'
import { ProductRepository } from './product.repository';
import { ProductDocument } from './product.entity';
import { ProductCreateRequestDto, ProductUpdateRequestDto } from './product.interfaces';

interface IImageUploadService {
    upload(files: any): void
}

@Injectable()
export class ImageUploadService implements IImageUploadService {
  upload(files: any): void {
    console.log(files)
  }
}
