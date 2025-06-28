import mysql from 'mysql2/promise';
const pool = mysql.createPool({    
    host: 'localhost',
    port: 3300,
    user: 'root',
    database: 'clinica',
    password: 'admi',
    waitForConnections: true
});

export default pool;
