import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PlantService } from './plant.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly plantService: PlantService) {}

  @Get('plants')
  getAllPlantInventory() {
    return this.plantService.getAllPlants();
  }

  @Get('plants/:id')
  getPlantInventory(@Param('id', ParseIntPipe) id: number) {
    return this.plantService.getPlantById(id);
  }
}
