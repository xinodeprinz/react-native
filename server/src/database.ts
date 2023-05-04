import { createPool, Pool } from 'mysql';

interface DB {
    host: string,
    port: number,
    user: string,
    password: string,
    database: string,
    connectionLimit: number,
}

const options: DB = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'blog',
    connectionLimit: 10,
}

const pool: Pool = createPool(options);

export default pool;