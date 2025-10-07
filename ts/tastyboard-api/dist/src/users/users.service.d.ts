import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './types/create-user.dto';
import { UpdateUserDto } from './types/update-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    list(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
    }[]>;
    get(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
    }>;
    create(data: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: UpdateUserDto): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
    }>;
    remove(id: number): Promise<{
        ok: boolean;
    }>;
}
