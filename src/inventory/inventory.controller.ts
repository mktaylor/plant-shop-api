import { Controller, Get, Param } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get('plants')
  getAllPlantInventory() {
    return this.inventoryService.getAllPlantInventory();
  }

  @Get('plants/:id')
  getPlantInventory(@Param('id') id: string) {
    return this.inventoryService.getPlantInventory(id);
  }
}