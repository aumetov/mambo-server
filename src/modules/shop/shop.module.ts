import {Module} from '@nestjs/common'
import { ShopService } from './shop.service';
import { ShopRepository } from './shop.repository';
import { ShopController } from './shop.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { shopSchema } from './shop.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Shops', schema: shopSchema}])],
  controllers: [ShopController],
  providers: [ShopService, ShopRepository],
  exports: [ShopModule]
})
export class ShopModule {

}
