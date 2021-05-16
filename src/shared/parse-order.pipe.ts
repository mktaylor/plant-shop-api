import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { Order } from '../domain/order.model';

@Injectable()
export class ParseOrderPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const orderObj = new Order(value.id, value.customer, value.items);
    return orderObj;
  }
}