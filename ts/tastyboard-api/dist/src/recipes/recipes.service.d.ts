import { PrismaService } from '../prisma/prisma.service';
import { CreateRecipeDto } from './types/create-recipe.dto';
import { UpdateRecipeDto } from './types/update-recipe.dto';
export declare class RecipesService {
    private prisma;
    constructor(prisma: PrismaService);
    list(): import(".prisma/client").Prisma.PrismaPromise<{
        title: string;
        description: string;
        imageUrl: string | null;
        videoUrl: string | null;
        ingredients: import("@prisma/client/runtime/library").JsonValue;
        steps: import("@prisma/client/runtime/library").JsonValue;
        authorId: number | null;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    get(id: number): Promise<{
        title: string;
        description: string;
        imageUrl: string | null;
        videoUrl: string | null;
        ingredients: import("@prisma/client/runtime/library").JsonValue;
        steps: import("@prisma/client/runtime/library").JsonValue;
        authorId: number | null;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(data: CreateRecipeDto): import(".prisma/client").Prisma.Prisma__RecipeClient<{
        title: string;
        description: string;
        imageUrl: string | null;
        videoUrl: string | null;
        ingredients: import("@prisma/client/runtime/library").JsonValue;
        steps: import("@prisma/client/runtime/library").JsonValue;
        authorId: number | null;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: UpdateRecipeDto): Promise<{
        title: string;
        description: string;
        imageUrl: string | null;
        videoUrl: string | null;
        ingredients: import("@prisma/client/runtime/library").JsonValue;
        steps: import("@prisma/client/runtime/library").JsonValue;
        authorId: number | null;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        ok: boolean;
    }>;
}
