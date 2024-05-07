import {useState}from 'react'
import axios from 'axios'
import './addrequest.css'
import logo from './young-executive-woman-profile-icon-vector-9692607.jpg'

function AddRequest(){
    const [formdata,setformdata]=useState({
    r_name:"",
    fruit:"",
    category:"",
    quantity:"",
    quality:"",
    date:"",
    
    
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
       const data=await axios.post("http://localhost:8010/create_request",formdata)
          console.log(data)
          alert("sign up successfully!")
    
    }    
    
    return(
        <div className='reqpage'>
            <div className='values'>
            <a href=""><h2>Freshly Picked</h2></a><br></br><br></br>
 


</div><br></br>
           
<img className='imgnew1' src={logo} alt='logo2' width="30px"></img>
<form onSubmit={handlesubmit} className='req-form'>
<h2>Customer Order</h2><br></br>
    <lable>Customer Name:</lable>
    <input type="text" id="r_name" name="r_name" onChange={handleonchange}/><br></br>
    <lable> Fruit:</lable>
    <input type="text" id="fruit" name="fruit" onChange={handleonchange}/><br></br>
    <lable>Sub Category:</lable>
    <input type="text" id="category" name="category" onChange={handleonchange}/><br></br> 
    <lable>Quantity :</lable>
    <input type="text" id="quantity" name="quantity" onChange={handleonchange}/><br></br> 
    <lable>Quality :</lable>
    <input type="text" id="quality" name="quality" onChange={handleonchange}/><br></br> 
    <lable>Date you want supplies :</lable>
    <input type="date" id="date" name="date" onChange={handleonchange}/><br></br> 
    <br></br> 
  
    
  
  
   <button className='signup'>Submit</button>
  
   </form>
        </div>
    )
    }
export default AddRequest
