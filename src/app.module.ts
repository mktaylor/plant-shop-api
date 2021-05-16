import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory/inventory.module';
import { OrdersModule } from './orders/orders.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [InventoryModule, OrdersModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
