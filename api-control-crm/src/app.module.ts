import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  exports: [PrismaService],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
