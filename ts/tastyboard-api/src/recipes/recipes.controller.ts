import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './types/create-recipe.dto';
import { UpdateRecipeDto } from './types/update-recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly service: RecipesService) {}

  @Get() list() { return this.service.list(); }
  @Get(':id') get(@Param('id', ParseIntPipe) id: number) { return this.service.get(id); }
  @Post() create(@Body() dto: CreateRecipeDto) { return this.service.create(dto); }
  @Patch(':id') update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateRecipeDto) { return this.service.update(id, dto); }
  @Delete(':id') remove(@Param('id', ParseIntPipe) id: number) { return this.service.remove(id); }
}
