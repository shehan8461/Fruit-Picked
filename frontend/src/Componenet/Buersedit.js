import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './buyeredit.css'


function UpdateBuyer(){
    const { id } = useParams();
    const [updatediscount,setupdatediscount]=useState({
        name:"",
        email:"",
        password:"",
    
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:8010/user/${id}`);
            const data = await response.json();
            console.log(data);
    
            if (data.success) {
                setupdatediscount(data.data);
            } else {
              console.error(data.message);
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, []);



      const handleInputChange = (e) => {
        setupdatediscount({
          ...updatediscount,
          [e.target.name]: e.target.value,
        });
      };
      const handleUpdate = async () => {
        try {
          const response = await fetch(`http://localhost:8010/update`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: updatediscount._id,
              ...updatediscount,
            }),
          });
    
          const data = await response.json();
    
          if (data.success) {
            console.log('User updated successfully');
           alert("updated successfully");

          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error updating user:', error);
        }
      };


    return(
        <div >

<h2>FreshRoute</h2>



<div className='buyer-update '>
    <lable>Name:</lable>
    <input type="text" id="name" name="name" onChange={handleInputChange} value={updatediscount?.name }/><br></br>
    <lable>Email:</lable>
    <input type="text" id="email" name="email" onChange={handleInputChange} value={updatediscount?.email}/><br></br>
    <lable>Password:</lable>
    <input type="password" id="password" name="password" onChange={handleInputChange} value={updatediscount?.password}/><br></br> 
  


  
  
    <button onClick={handleUpdate} >Save Changes</button><br></br> <br></br> 
    </div>
 
        </div>
    )
}
export default UpdateBuyer;