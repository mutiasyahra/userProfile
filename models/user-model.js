const db = require('../config/db');

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
}

const getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id=?', id);
    return rows;
}

const addUser = async (user) => {
    const {name,email,phone} = user
    const [result] = await 
    db.query('insert into user (name,email,phone) values(?,?,?)', [name,email,phone])
    return result.insertId
}

const deleteUser  = async (userId) => {
    const connection = await mysql.createConnection(dbConfig);
    try {
        const [result] = await connection.execute('DELETE FROM user WHERE id = ?', [userId]);
        return result.affectedRows > 0; // Mengembalikan true jika pengguna berhasil dihapus
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    } finally {
        await connection.end();
    }
};
module.exports = { getAllUsers, getUserById, addUser, deleteUser };