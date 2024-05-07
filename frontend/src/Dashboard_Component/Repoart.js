import { useEffect, useState } from 'react'
import axios from "axios"
import './buyerdashboard.css'
import logo from './young-executive-woman-profile-icon-vector-9692607.jpg'


function Repoart(){
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
  <h3 >Total Fruits:</h3>
            {countlist !== null ? (
                <p>Total Fruits : {countlist}
               
              
                </p>
                
            ) : (
                <p>Loading...
                     </p>
          
               
            )}
</p>
<h3>Fruit Details :</h3>
 

    

                  
                         <table>
                            <tr>
                            
                            <th>Fruit Type</th>
                            <th>Quentity</th>
                            
                            </tr>
<tbody>
    {
customerlist.map((e)=>{
                return(
                            <tr>
                                
                                <td>
                                <h3>Customers need to Fruits type of </h3>{e.fruit}<h3>That are  growing of fruit crops, including nuts, primarily for use as human food. The subject of fruit and nut production deals with intensive culture of perennial plants, the fruits of which have economic significance </h3>
                                </td>
                                <td>
                                <h3>Some Fruit quantities are rapdly changing according to Customers nedded fruits ,Now Quantities of  ---  </h3>{e.quantity}
                                </td>
                               
                             

    
 
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
export default Repoart;