import { Controller, Get, Param } from '@nestjs/common';
import { PlantService } from './plant.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly plantService: PlantService) {}

  @Get('plants')
  getAllPlantInventory() {
    return this.plantService.getAllPlants();
  }

  @Get('plants/:id')
  getPlantInventory(@Param('id') id: string) {
    return this.plantService.getPlantById(id);
  }
}