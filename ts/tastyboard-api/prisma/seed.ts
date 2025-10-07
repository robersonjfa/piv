import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.recipe.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  const author = await prisma.user.create({ data: { name: 'Chef Ana', email: 'ana.chef@tastyboard.dev' } });
  const massas = await prisma.category.create({ data: { name: 'Massas' } });
  const saladas = await prisma.category.create({ data: { name: 'Saladas' } });

  await prisma.recipe.createMany({
    data: [
      {
        title: 'Spaghetti à Bolonhesa',
        description: 'Massa com molho de carne e tomates.',
        imageUrl: 'https://placehold.co/800x500?text=Spaghetti',
        ingredients: ['Espaguete','Carne moída','Tomate'] as any,
        steps: ['Refogar','Cozinhar massa','Misturar e servir'] as any,
        authorId: author.id, categoryId: massas.id
      },
      {
        title: 'Salada Mediterrânea',
        description: 'Folhas, pepino, tomate, azeitonas e feta.',
        imageUrl: 'https://placehold.co/800x500?text=Salada',
        ingredients: ['Alface','Pepino','Tomate'] as any,
        steps: ['Cortar','Misturar','Temperar'] as any,
        authorId: author.id, categoryId: saladas.id
      }
    ]
  });
  console.log('Seed concluída.');
}

main().catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
