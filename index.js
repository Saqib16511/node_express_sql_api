
import express from 'express';
import{getuser,getusers,createuser,deleteuser,updateuser} from './APIs/users.js'

// SCHEDULES FUNCTIONS
import {getschedules,getschedule,createSchedule,updateschedule,deleteschedule} from './APIs/schedules.js'

// BOOKINGS FUNCTIONS
import {getbookings,getbooking,createBooking,updatebooking,deletebooking} from './APIs/bookings.js'

import cors from 'cors';


const app = express()
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())
 
// GET USER ROUTE
app.get('/users',async(req,res)=>{
    const users = await getusers()
    res.send(users)
})  

// GET USER BY ID ROUTE
app.get('/user/:id',async(req,res)=>{
    const id = (req.params.id)
    const users = await getuser(id)
    res.send(users)
});

// CREATE USER ROUTE
app.post('/user/create',async(req,res)=>{
    const {first_name,Email} = req.body
    const note = await createuser(first_name,Email);
    res.status(201).send(note)
});

// UPDATE USER ROUTE
app.put('/user/:id',async(req,res)=>{
    const { id } = req.params
    const {first_name,last_name,Email} = req.body
    const note = await updateuser(first_name,last_name,Email,id);
    res.status(200).json(note)
});

// DELETE USER ROUTE
app.delete('/users/delete/:id',async(req,res)=>{
    const id = (req.params.id)
    const users = await deleteuser(id)
    res.send(users)
});



//   SCHEDULE API START

// GET SCHEDULES ROUTE
app.get('/schedules',async(req,res)=>{
    const schedules = await getschedules()
    res.send(schedules)
})  

// GET SCHEDULE BY ID ROUTE
app.get('/schedule/:id',async(req,res)=>{
    const id = (req.params.id)
    const schedulesid = await getschedule(id)
    res.send(schedulesid)
});

// CREATE SCHEDULE ROUTE
app.post('/schedule/create',async(req,res)=>{
    const {first_name} = req.body
    const note = await createSchedule(first_name);
    res.status(201).send(note)
});

// UPDATE schedule ROUTE
app.put('/schedule/:id',async(req,res)=>{
    const { id } = req.params
    const {first_name,email} = req.body
    const note = await updateschedule(first_name,email,id);
    res.status(200).json(note)
});

// DELETE schedule ROUTE
app.delete('/schedule/delete/:id',async(req,res)=>{
    const id = (req.params.id)
    const users = await deleteschedule(id)
    res.send(users)
});
//   SCHEDULE API END



// BOOKING API START

// GET BOOKINGS ROUTE
app.get('/bookings',async(req,res)=>{
    const bookings = await getbookings()
    res.send(bookings)
})  

// GET BOOKING BY ID ROUTE
app.get('/booking/:id',async(req,res)=>{
    const id = (req.params.id)
    const bookingsid = await getbooking(id)
    res.send(bookingsid)
});

// CREATE BOOKING ROUTE
app.post('/booking/create',async(req,res)=>{
    const {title} = req.body
    const note = await createBooking(title);
    res.status(201).send(note)
});

// UPDATE BOOKING ROUTE
app.put('/booking/:id',async(req,res)=>{
    const { id } = req.params
    const {title} = req.body
    const note = await updatebooking(title,id);
    res.status(200).json(note)
});

// DELETE BOOKING ROUTE
app.delete('/booking/delete/:id',async(req,res)=>{
    const id = (req.params.id)
    const bookings = await deletebooking(id)
    res.send(bookings)
});
// BOOKING API END













// ERROR HANDLING
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });

  app.listen(8000,()=>{
    console.log('server is running on port 8000')
  })