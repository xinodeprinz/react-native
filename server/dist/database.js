import { createPool } from 'mysql';
const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'blog',
    connectionLimit: 10,
};
const pool = createPool(options);
export default pool;
