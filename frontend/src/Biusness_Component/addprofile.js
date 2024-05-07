import {useState}from 'react'
import axios from 'axios'
import './addprofile.css'
import logo from './young-executive-woman-profile-icon-vector-9692607.jpg'


function AddProfile(){
    const [formdata,setformdata]=useState({
    ur_name:"",
    b_email:"",
    b_contact:"",
    permanent_address:"",
    b_code:"",
    b_name:"",
    b_id:"",
    b_address:"",
    b_branches1:"",
    b_branches2:"",
    b_branches3:"",
       
    
    
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
     
       e.preventDefault()
       const data=await axios.post("http://localhost:8010/create_buisness",formdata)
          console.log(data)
          alert("sign up successfully!")
    
    }    
    
    return(
        <div className='sign-buisssness-page'>
           
<form onSubmit={handlesubmit}>



<img className='imgnew' src={logo} alt='logo1' width="50px"></img>
<img className='imgnew1' src={logo} alt='logo2' width="30px"></img>
<div class='leftside-form'>
  

    <h2>Edit Profile</h2>
    <lable>Your Name:</lable>
    <input type="text" id="ur_name" name="ur_name" onChange={handleonchange}/><br></br>
    <lable> Email:</lable>
    <input type="text" id="b_email" name="b_email" onChange={handleonchange}/><br></br>
    <lable>Contact:</lable>
    <input type="text" id="b_contact" name="b_contact" onChange={handleonchange}/><br></br> 
    <lable>Permenent Address:</lable>
    <input type="text" id="permanent_address" name="permanent_address" onChange={handleonchange}/><br></br> 
    <lable>Postal Code:</lable>
    <input type="text" id="b_code" name="b_code" onChange={handleonchange}/><br></br>
  </div>
    <br></br>
    <div class='rightside-form'>
    <lable>Buisness Name:</lable>
    <input type="text" id="b_name" name="b_name" onChange={handleonchange}/><br></br>
    <lable>Buisness Registration Id:</lable>
    <input type="text" id="b_id" name="b_id" onChange={handleonchange}/><br></br>
    <lable>Address:</lable>
    <input type="text" id="b_address" name="b_address" onChange={handleonchange}/><br></br>
    <lable>Branches:</lable>
    <input type="text" id="b_branches1" name="b_branches1" onChange={handleonchange}/><br></br>
    <input type="text" id="b_branches2" name="b_branches2" onChange={handleonchange}/><br></br>
    <input type="text" id="b_branches3" name="b_branches3" onChange={handleonchange}/><br></br>
    <br></br>
    <br></br>
    <button >Save Changes</button>
    </div>
    <br></br>
    <br></br>
  
    
  
   
  
  
   </form>
        </div>
    )
    }
export default AddProfile
