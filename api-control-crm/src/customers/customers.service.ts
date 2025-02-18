import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async create(CreateCustomerDto: CreateCustomerDto) {
    return this.prisma.customer.create({
      data: {
        name: CreateCustomerDto.name,
        email: CreateCustomerDto.email,
        phone: CreateCustomerDto.phone,
        address: CreateCustomerDto.address,
        type_of_customer: CreateCustomerDto.type_of_customer,
        document: CreateCustomerDto.document,
      },
    });
  }

  async findAll() {
    return this.prisma.customer.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        address: true,
        type_of_customer: true,
        document: true,
      },
    });
  }

  async findOne(id) {
    return this.prisma.customer.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        address: true,
        type_of_customer: true,
        document: true,
      },
    });
  }

  async update(id, updateCustomerDto: UpdateCustomerDto) {
    return this.prisma.customer.update({
      where: { id },
      data: updateCustomerDto,
    });
  }

  async remove(id: string) {
    return this.prisma.customer.delete({
      where: { id: String(id) },
    });
  }
}
