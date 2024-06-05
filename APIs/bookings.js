import { pool } from "../database.js";

// GET bookingS
export async function getbookings(){
    const bookings = await pool.query('SELECT * FROM bookings');
    return bookings[0];
};
// GET SINGLE booking
export async function getbooking(id){
    const bookingid = await pool.query('SELECT * FROM bookings WHERE id = ?',[id]);
    return bookingid[0];
};

// CREATE booking
export async function createBooking(title){
    await pool.query(`INSERT INTO bookings (title) VALUES (?)`,[title])
};

// UPDATE booking ROUTE
export async function updatebooking(title,id){
    await pool.query(`UPDATE bookings SET title = ? WHERE id = ?`,[title,id]);
};

// DELETE SCHEDULE
export async function deletebooking(id){
    const bookingid = await pool.query('DELETE FROM  bookings where id = ?',[id]);
    return bookingid[0];
};