import { useEffect, useState } from 'react'
import axios from "axios"
import './buyerdashboard.css'
import logo from './young-executive-woman-profile-icon-vector-9692607.jpg'


function BuyersDashboard(){
    const [countlist,setcountlist]=useState([]);
    const [customerlist,setcustomerlist]=useState([]);


//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:8010/count_request")
   const { count } = data.data;
   setcountlist(count);//get count
   setcustomerlist(data.data.data);//get table data
 
}catch(err){
    alert(err)
}
}
useEffect(()=>{
    getfetchdata()   
},[])





    
return(
    <div>
           <div className='values'>
           <img className='imgnew1' src={logo} alt='logo2' width="30px"></img>
           
          
</div><br></br>
<div className='buyerdashboard'>
    <p className='total-display'> 
  <h3 >Total Orders:</h3>
            {countlist !== null ? (
                <p>Total Orders : {countlist}
               
              
                </p>
                
            ) : (
                <p>Loading...
                     </p>
          
               
            )}
</p>
<h3>Recent  Orders :</h3>
 

    

                  
                         <table>
                            <tr>
                            <th>Customers</th>
                            <th>Fruit Type</th>
                            <th>Quentity</th>
                            <th>Quality</th>
                            </tr>
<tbody>
    {
customerlist.map((e)=>{
                return(
                            <tr>
                                <td>
                                {e.r_name} 
                                </td>
                                <td>
                                {e.fruit}
                                </td>
                                <td>
                                {e.quantity}
                                </td>
                                <td>
                                {e.quality}
                                </td>
                                <p className='name-display'>
                                    <h4>Requested Customers</h4>
                                     {e.r_name} 
                                </p>

                               
                            
 
                            </tr>
                )
                              })
}
                            </tbody>
                        </table>
                        
            
              

                     
                    
                
                
          
                        </div>  

    </div>
)




}
export default BuyersDashboard;