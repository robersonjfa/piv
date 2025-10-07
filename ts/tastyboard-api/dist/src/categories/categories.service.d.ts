import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './types/create-category.dto';
import { UpdateCategoryDto } from './types/update-category.dto';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
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
    create(data: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: UpdateCategoryDto): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        ok: boolean;
    }>;
}
