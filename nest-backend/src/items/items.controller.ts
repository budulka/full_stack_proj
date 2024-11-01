import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors, UsePipes } from '@nestjs/common';
import { ItemsService } from './items.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Item } from '@prisma/client';


@Controller('items')
export class ItemsController {

  constructor(private readonly itemService: ItemsService) {}

  @Get("history")
  getHistory() : Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(":id")
  get(@Param("id") id: number) {
    return this.itemService.get(id);
  }

  @Post("create")
  add_item(@Body() data: {name: string, class: string}) {
    console.log('Received data:', data);
    return this.itemService.create(data)
  }

  @Delete(":id")
  del_item(@Param("id") id: number) {
    return this.itemService.delete(id)
  }

  @Post("predict")
  @UseInterceptors(FileInterceptor('image'))
  predict_class(@UploadedFile() file: Express.Multer.File) {
    return this.itemService.get_predicton(file);
  }
}
