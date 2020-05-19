import {Module} from '@nestjs/common'
import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { categorySchema } from './category.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Categories', schema: categorySchema}])],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
  exports: [CategoryModule]
})
export class CategoryModule {

}
