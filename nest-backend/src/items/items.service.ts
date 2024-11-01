import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import axios from 'axios';
import * as FormData from 'form-data';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async create(data: {name: string; class: string}) {
    console.log('Creating item with data:', data);
    return this.prisma.item.create({data});
  }

  async delete(id: number) {
    return this.prisma.item.delete({where: {id}});
  }

  async findAll() {
    return this.prisma.item.findMany();
  }

  async get(id: number) {

    return this.prisma.item.findUnique({where: {id}});
  }

  async get_predicton(img: Express.Multer.File) {
    const form = new FormData();
    form.append("image", img.buffer, img.originalname);
    const response = await axios.post("http://backend:3000/predict", form, {
      headers: {
        ...form.getHeaders(),
      },
    });
    const name = img.originalname
    console.log("The response, if it exists is " + response.data)
    const cls: string = response.data
    await this.create({name, class : cls['prediction'][0]});
    return response.data;
  }
}
