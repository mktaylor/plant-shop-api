import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get(':id')
  getOrder(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.getOrderById(id);
  }

  @Post()
  createOrder(@Body() request: any) {
    // console.log(request instanceof Order);
    // const order = new Order(request.id, request.customer, request.items);
    // console.log(order);
    return this.ordersService.createOrder(request);
  }
}
