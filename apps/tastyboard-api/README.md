# TastyBoard API — NestJS + Prisma + PostgreSQL (com Swagger e Vercel)

## Local
1) `.env` baseado em `.env.example`
2) `npm install`
3) `npm run prisma:generate`
4) `npm run prisma:migrate`
5) `npm run db:seed` (opcional)
6) `npm run dev` → http://localhost:3001  (Swagger: /docs)

## Deploy na Vercel (Docker)
- Adicione `DATABASE_URL` nas Environment Variables (Production/Preview)
- A Vercel usa o `Dockerfile` deste projeto.
- Migrações rodam automaticamente via `prisma migrate deploy` no `entrypoint.sh`.

Sugestão de banco gerenciado: Neon, Railway, Supabase ou Render.
