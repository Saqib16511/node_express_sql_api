import { pool } from "../database.js";
// GET USRES
export async function getusers(){
    const getuser = await pool.query('SELECT * FROM users');
    return getuser[0];
};
// GET SINGLE USER
export async function getuser(id){
    const userid = await pool.query('SELECT * FROM users WHERE id = ?',[id]);
    return userid[0];
};

// CREATE USER
export async function createuser(first_name,Email){
    await pool.query(`INSERT INTO users (first_name,Email) VALUES (?,?)`,[first_name,Email])
};

// UPDATE USER ROUTE
export async function updateuser(first_name,last_name,Email,id){
    await pool.query(`UPDATE users SET first_name = ?, last_name = ?, Email = ? WHERE id = ?`,[first_name,last_name,Email,id]);
};

// DELETE USER
export async function deleteuser(id){
    const userid = await pool.query('DELETE FROM  users where id = ?',[id]);
    return userid[0];
};