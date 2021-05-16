import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PlantService } from './plant.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly plantService: PlantService) {}

  @Get('plants')
  getAllPlantInventory() {
    return this.plantService.getAllPlants();
  }

  @Get('plants/:id')
  getPlantInventory(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.plantService.getPlantById(id);
  }
}
