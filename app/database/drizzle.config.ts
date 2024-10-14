import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/schema',
  dialect: 'sqlite',
  dbCredentials: {
    url: "file:../dist/slagg.db",
  },
});