import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Order } from '../domain/order.model';
import { ParseOrderPipe } from '../shared/parse-order.pipe';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get(':id')
  getOrder(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.ordersService.getOrderById(id);
  }

  @Post()
  createOrder(@Body(ParseOrderPipe) request: Order) {
    return this.ordersService.createOrder(request);
  }
}
