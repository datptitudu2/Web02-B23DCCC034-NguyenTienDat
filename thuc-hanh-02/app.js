const express = require('express');
const app = express();
const port = 3000;

// Middleware để parse JSON
app.use(express.json());

//Endpoint GET
app.get('/hello',(req,res)=> {
    res.json([
        {id:1,name:'nguyen tien dat'},
        {id:2,name:'Nguyen VAN A'}
    ])
})

//Endpoint POST

app.post('/user',(req,res)=> {
    const newUser=req.body;
    res.status(201).json({message:'Nguoi dung moi da duoc tao',user:newUser})
});


//Endpoint PUT
app.put('/hello/:id',(req,res)=> {
    const userID=req.params.id;
    const updatedData= req.body;
    res.json({message:`Nguoi dung co id ${userID} da duoc cap nhat`,updatedData})
});

//Endpoint DELETE

app.delete('/hello/:id',(req,res) =>{
    const userId=req.params.id;
    res.json({message:`Nguoi dung co id ${userId} da bi xoa`})
})

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
})