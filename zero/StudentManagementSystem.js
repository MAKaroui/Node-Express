const express = require('express')
const app = express()
const port = 3000
 


var students= [
    {id: 1,firstname: 'Amine',lastname:'Karoui',email:'amin',class: 'CS1'},
    {id:2,firstname:'Eya',lastname:'Chafter',email:'eya',class:'CS2'}
]



function create(id,FN,LN,email,cl){
  var obj= {
      id: id,
      firstname: FN,
      lastname: LN,
      email: email,
      class: cl
  }  
    return obj
}




app.get('/students',(req,res) =>{

res.send(students)
res.status(200)
})

app.post('/students',(req,res) =>{
    console.log(req.body)
    res.send("student created")
    
})  
app.listen(port)