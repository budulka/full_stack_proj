import { Body, Delete, Get, Module, Param, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { PrismaService } from '../../prisma/prisma.service';


@Module({
  providers: [ItemsService, PrismaService],
  controllers: [ItemsController]
})
export class ItemsModule {
}
