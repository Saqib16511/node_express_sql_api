
import express from 'express';
import{getuser,getusers,createuser,deleteuser,updateuser} from './database.js'


const app = express()
app.use(express.json());
app.use(express.urlencoded())

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
app.delete('/users/:id',async(req,res)=>{
    const id = (req.params.id)
    const users = await deleteuser(id)
    res.send(users)
});

// ERROR HANDLING
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });

  app.listen(8000,()=>{
    console.log('server is running on port 8000')
  })
