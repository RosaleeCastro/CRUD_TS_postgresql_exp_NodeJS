import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'typescriptdatabase',
    password: 'postgres',
    port: 5432
})