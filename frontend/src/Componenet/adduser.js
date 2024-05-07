import {useState}from 'react'
import axios from 'axios'

import './adduser.css'

function Adduser(){
    const [formdata,setformdata]=useState({
        name:"",
        email:"",
        password:"",
    
    
    })
    
    const handleonchange=(e)=>{
        const {value,name}=e.target
          setformdata((preve)=>{
               return{
                ...preve,
                [name]:value
               }
          })
       
        
    }
    
    const handlesubmit=async(e)=>{
     var getvaliddetail=document.getElementById('email-valid');
     var getemail=document.getElementById('email').value;

     if (getemail=="/"||"*"||"<"||","||">"||"="||"-"||"+"){
        getvaliddetail.innerHTML="Please enter valid Email Address!";
        getvaliddetail.style.color='red';
     
     }
     else if(getemail==getemail){
        getvaliddetail.innerHTML=" validated Email Address!";
        getvaliddetail.style.color='green';
     }
     e.preventDefault()
     const data=await axios.post("http://localhost:8010/create",formdata)
        console.log(data)
        alert("sign up successfully!")
  }
      
    
     
    
    return(
        <div className='signpage'>
           <h3 className='border'>
           <p> HAVE AN ACCOUNT? <button>Login</button></p>
           </h3>
            <h2>Join & Connect the Fastest Growing Online Community</h2>
<form onSubmit={handlesubmit}>
    <lable>Name:</lable>
    <input type="text" id="name" name="name" onChange={handleonchange}/><br></br>
    <lable> Email:</lable>
    <input type="text" id="email" name="email" onChange={handleonchange}/><br></br>
    <p id='email-valid'></p>
    <lable>Password:</lable>
    <input type="password" id="password" name="password" onChange={handleonchange}/><br></br> 
    <br></br>
    <br></br>
    <input type="checkbox" />
    
  
    <label> I accept the terms and conditions</label>  <br></br>
   <button className='signup'>Sign Up</button>
  
   </form>
        </div>
    )
    }
export default Adduser
