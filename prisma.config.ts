import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    // Keeping this optional allows `prisma generate` without local database credentials.
    url: process.env['DATABASE_URL'] ?? '',
  },
});
