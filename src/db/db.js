const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost:27017/signupform2')
.then(()=>{
    console.log("connected")
})
.catch((error)=>{
    console.log("Error Connecting")
})
