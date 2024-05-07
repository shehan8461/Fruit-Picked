import {useState,useEffect}from 'react'
import axios from 'axios'
import './requestdetails.css'

function RequestDetails(){



const [datalist,setdatalist]=useState([]);
const [searchkey,setsearchkey]=useState('');

//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:8010///")
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
    const data=await axios.delete("http://localhost:8010/delete_request/"+id)
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
    const filteredData = datalist.filter(customer =>
        customer.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setdatalist(filteredData);
}


    return(
        
        <div className='request-details'>
            <div className='searchbtn'>
        <input  type="search" onChange={(e)=>setsearchkey(e.target.value)} placeholder='search' className='in'/><br></br><br></br>
        <button  id='search-btn'  onClick={(e)=>handlesearch(e)}> search </button>
        </div>   
     <table>
              
              <tr>
              <th>Customer Name</th>
              <th>Fruit</th>
              <th>Sub Category</th>
              <th>Quantity </th>
              <th>Quality</th>
              <th>Date you want supplies </th>
              <th>Action </th>
            
              </tr>


              <tbody>
                  { 
                     datalist.map((e1)=>{
                      return(
                          <tr> 
                            <td> {e1.r_name}</td> 
                            <td> {e1.fruit}</td> 
                            <td> {e1.category}</td> 
                            <td> {e1.quantity}</td> 
                            <td> {e1.quality}</td> 
                            <td> {e1.date}</td> 
                    
                        
                           
                            <td>
                            <a href={`/updaterequest/${e1._id}`}>Edit Profile</a>
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

export default RequestDetails