#!/bin/sh
# Run pending migrations, then start server
if [ -n "$DATABASE_URL" ]; then
  npx prisma migrate deploy
fi
node dist/main.js
