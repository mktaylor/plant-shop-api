import { Injectable } from '@nestjs/common';
import { Plant } from '../domain/plant.model';

@Injectable()
export class PlantService {
  plants: Plant[] = [
    new Plant(
      1,
      'Chinese Evergreen',
      'Aglaonema commutatum',
      12.99,
      3,
      'The Chinese evergreen is a staple indoor plant, widely used in interior decorating because of its ability to withstand poor conditions.',
    ),
    new Plant(
      2,
      'Snake Plant',
      'Sansevieria trifasciata',
      23.99,
      5,
      'This is one of the few plants that releases oxygen at night rather than in the day.',
    ),
    new Plant(
      3,
      'Philodendron',
      'Philodendron hederaceum oxycardium',
      35.99,
      1,
      'All parts of this plant are poisonous and can cause severe irritation of the lips, tongue, and throat if eaten or chewed.',
    ),
    new Plant(
      4,
      'English Ivy',
      'Hedera helix',
      18.99,
      8,
      'In ancient Greece, Hippocrates used ivy to prevent intoxication, reduce swelling, and as an anesthetic.',
    ),
    new Plant(
      5,
      'ZZ Plant',
      'Zamioculcas zamiifolia',
      10.99,
      0,
      'Sometimes called eternity plant because it lasts so long, ZZ plant will even grow in low light and can go weeks without water.',
    ),
  ];

  constructor() {}

  getAllPlants() {
    return this.plants;
  }

  getPlantById(id: number): Plant {
    const plant = this.plants.find((plant: Plant) => plant.id === id);
    // TODO: Return 404 status code and proper error
    if (!plant) {
      throw new Error(`Plant not found with id: ${id}`);
    }
    return plant;
  }
}
