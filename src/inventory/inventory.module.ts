import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { PlantService } from './plant.service';

@Module({
  imports: [],
  controllers: [InventoryController],
  providers: [PlantService],
})
export class InventoryModule {}
