import { pool } from "../database.js";

// GET SCHEDULES
export async function getschedules(){
    const schedules = await pool.query('SELECT * FROM schedules');
    return schedules[0];
};
// GET SINGLE SCHEDULE
export async function getschedule(id){
    const scheduleid = await pool.query('SELECT * FROM schedules WHERE id = ?',[id]);
    return scheduleid[0];
};

// CREATE SCHEDULE
export async function createSchedule(first_name){
    await pool.query(`INSERT INTO schedules (first_name) VALUES (?)`,[first_name])
};

// UPDATE SCHEDULE ROUTE
export async function updateschedule(first_name,Email,id){
    await pool.query(`UPDATE schedules SET first_name = ?,email = ? WHERE id = ?`,[first_name,Email,id]);
};

// DELETE SCHEDULE
export async function deleteschedule(id){
    const scheduleid = await pool.query('DELETE FROM  schedules where id = ?',[id]);
    return scheduleid[0];
};