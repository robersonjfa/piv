import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './types/create-user.dto';
import { UpdateUserDto } from './types/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  list() { return this.prisma.user.findMany({ orderBy: { createdAt: 'desc' } }); }

  async get(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  create(data: CreateUserDto) { return this.prisma.user.create({ data }); }

  async update(id: number, data: UpdateUserDto) {
    await this.get(id);
    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.get(id);
    await this.prisma.user.delete({ where: { id } });
    return { ok: true };
  }
}
