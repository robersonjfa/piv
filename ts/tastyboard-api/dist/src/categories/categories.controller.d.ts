import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './types/create-category.dto';
import { UpdateCategoryDto } from './types/update-category.dto';
export declare class CategoriesController {
    private readonly service;
    constructor(service: CategoriesService);
    list(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    get(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(dto: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, dto: UpdateCategoryDto): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        ok: boolean;
    }>;
}
