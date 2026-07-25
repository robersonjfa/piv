import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './types/create-category.dto';
import { UpdateCategoryDto } from './types/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  list() { return this.prisma.category.findMany({ orderBy: { name: 'asc' } }); }

  async get(id: number) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  create(data: CreateCategoryDto) { return this.prisma.category.create({ data }); }

  async update(id: number, data: UpdateCategoryDto) {
    await this.get(id);
    return this.prisma.category.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.get(id);
    await this.prisma.category.delete({ where: { id } });
    return { ok: true };
  }
}
