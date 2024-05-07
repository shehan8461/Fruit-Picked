const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")


const app=express()

app.use(cors())
app.use(express.json())

const PORT=process.env.PORT||8010


 
//Buyer CRUD
const formschema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
   

},{
    timestamps:true

})

const usermodel=mongoose.model("user",formschema)


//user read
app.get("/",async(req,res)=>{
    const data= await usermodel.find({})
  
    res.json({success:true,data:data})
})

//user create
app.post("/create",async(req,res)=>{
    const data=new usermodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


//discount update
app.put("/update",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await usermodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})


//user delete
app.delete("/delete/:id",async(req,res)=>{
const id=req.params.id
const data=await usermodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})


//user fetch updated
app.get("/user/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const user = await usermodel.findById(id);

        if (!user) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        res.send({ success: true, message: "User fetched successfully", data: user });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});


//get count in user table
app.get("/count",async(req,res)=>{
    try{
        const users=await usermodel.find({});

        return res.status(200).json({
            count:users.length,
            data:users
        })

    }catch(err){
            console.log(err.message);
            res.json({success:true,message:"user count successfully",data:data})
    }

})



///////////////////////////////////////////////////////////////////////////////////////////



//Buyer CRUD
const Buisnessprofile=mongoose.Schema({
    ur_name:String,
    b_email:String,
    b_contact:Number,
    permanent_address:String,
    b_code:Number,
    b_name:String,
    b_id:String,
    b_address:String,
    b_branches1:String,
    b_branches2:String,
    b_branches3:String,
},{
    timestamps:true

})

const buisnessmodel=mongoose.model("business_profile",Buisnessprofile)


//user read
app.get("//",async(req,res)=>{
    const data= await buisnessmodel.find({})
  
    res.json({success:true,data:data})
})

//user create
app.post("/create_buisness",async(req,res)=>{
    const data=new buisnessmodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


//discount update
app.put("/update_buisness",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await buisnessmodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})


//user delete
app.delete("/delete_buisness/:id",async(req,res)=>{
const id=req.params.id
const data=await buisnessmodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})


//user fetch updated
app.get("/user_buisness/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const user = await buisnessmodel.findById(id);

        if (!user) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        res.send({ success: true, message: "User fetched successfully", data: user });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});


//get count in user table
app.get("/count_buisness",async(req,res)=>{
    try{
        const users=await buisnessmodel.find({});

        return res.status(200).json({
            count:users.length,
            data:users
        })

    }catch(err){
            console.log(err.message);
            res.json({success:true,message:"user count successfully",data:data})
    }

})

/////////////////////////////////////////////////////////////////////////////////////////////////




//Buyer CRUD
const requestschema=mongoose.Schema({
    r_name:String,
    fruit:String,
    category:String,
    quantity:String,
    quality:String,
    date:String
   

},{
    timestamps:true

})

const requestmodel=mongoose.model("Requests",requestschema)


//request read
app.get("///",async(req,res)=>{
    const data= await requestmodel.find({})
  
    res.json({success:true,data:data})
})

//request create
app.post("/create_request",async(req,res)=>{
    const data=new requestmodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


//request update
app.put("/update_request",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await requestmodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})


//request delete
app.delete("/delete_request/:id",async(req,res)=>{
const id=req.params.id
const data=await requestmodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})


//request fetch updated
app.get("/user_request/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const user = await requestmodel.findById(id);

        if (!user) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        res.send({ success: true, message: "User fetched successfully", data: user });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});


//get count in request table
app.get("/count_request",async(req,res)=>{
    try{
        const users=await requestmodel.find({});

        return res.status(200).json({
            count:users.length,
            data:users
        })

    }catch(err){
            console.log(err.message);
            res.json({success:true,message:"user count successfully",data:data})
    }

})






//Server connection
mongoose.connect("mongodb+srv://shehan:Shehan99@cluster0.t3v3psz.mongodb.net/Users?retryWrites=true&w=majority")
.then(()=>{
  
    console.log(`port number => ${PORT}`)
    app.listen(PORT,()=>console.log("server connection successful (Buyer)(buisness profile)(Request form)"))
}).catch((err)=>{
    console.log(err)
})








