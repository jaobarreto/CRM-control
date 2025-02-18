import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [UsersModule, CustomersModule],
  exports: [PrismaService],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
