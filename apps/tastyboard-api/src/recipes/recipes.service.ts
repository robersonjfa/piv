import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecipeDto } from './types/create-recipe.dto';
import { UpdateRecipeDto } from './types/update-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  list() { return this.prisma.recipe.findMany({ orderBy: { createdAt: 'desc' } }); }

  async get(id: number) {
    const recipe = await this.prisma.recipe.findUnique({ where: { id } });
    if (!recipe) throw new NotFoundException('Recipe not found');
    return recipe;
  }

  create(data: CreateRecipeDto) { return this.prisma.recipe.create({ data }); }

  async update(id: number, data: UpdateRecipeDto) {
    await this.get(id);
    return this.prisma.recipe.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.get(id);
    await this.prisma.recipe.delete({ where: { id } });
    return { ok: true };
  }
}
