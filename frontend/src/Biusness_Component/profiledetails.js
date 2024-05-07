import {useState,useEffect}from 'react'
import axios from 'axios'
import './profiledetails.css'


function ProfileDetails(){



const [datalist,setdatalist]=useState([]);
const [searchkey,setsearchkey]=useState('');

//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:8010//")
    console.log(data.data.success)
    if(data.data.success){
        setdatalist(data.data.data)
    }
}catch(err){
    alert(err)
}
}
useEffect(()=>{
    getfetchdata()   
},[])



//delete

const handledelete= async(id)=>{
    const data=await axios.delete("http://localhost:8010/delete_buisness/"+id)
    if(data.data.success){
        getfetchdata()
        console.log(data.data.message)
        alert("Deleted User Successfully!")
    }
}
const handlesearch = (e) => {

    filterdata(searchkey);
}
const filterdata = (searchKey) => {
    const filteredData = datalist.filter(buisness =>
        buisness.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setdatalist(filteredData);
}


    return(
        
        <div className='profile-details'>
             
            <div className='searchbtn'>
        <input  type="search" onChange={(e)=>setsearchkey(e.target.value)} placeholder='search' className='in'/><br></br><br></br>
        <button  id='search-btn'  onClick={(e)=>handlesearch(e)}> search </button>
        </div>  <br></br> 
        <h2>Buyers Details</h2><br></br> 
       <div></div>
     <table>
              
              <tr>
              <th>Your Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Permenent Address</th>
              <th>Postal Code</th>
              <th>Buisness Name</th>
              <th>Buisness Registration Id</th>
              <th>Address</th>
              <th>Branches1</th>
              <th>Branches2</th>
              <th>Branches3</th>
              <th>Action</th>
            
              </tr>


              <tbody>
                  { 
                     datalist.map((e1)=>{
                      return(
                          <tr> 
                            <td> {e1.ur_name}</td> 
                            <td> {e1.b_email}</td> 
                            <td> {e1.b_contact}</td> 
                            <td> {e1.permanent_address}</td> 
                            <td> {e1.b_code}</td> 
                            <td> {e1.b_name}</td> 
                            <td> {e1.b_id}</td> 
                            <td> {e1.b_address}</td> 
                            <td> {e1.b_branches1}</td> 
                            <td> {e1.b_branches2}</td> 
                            <td> {e1.b_branches3}</td> 
                        
                           
                            <td>
                            <a href={`/updateprofile/${e1._id}`}>Edit Profile</a>
                            <button onClick={()=>handledelete(e1._id)}>delete</button>
                            </td>
                          </tr>
                      )

              })
                  }
              </tbody>
  </table>
        </div>
    )
}

export default ProfileDetails