import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';



function UpdateRequest(){
    const { id } = useParams();
    const [updatediscount,setupdatediscount]=useState({
        r_name:"",
        fruit:"",
        category:"",
        quantity:"",
        quality:"",
        date:"",
    
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:8010/user_request/${id}`);
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
          const response = await fetch(`http://localhost:8010/update_request`, {
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
<lable>Customer Name:</lable>
    <input type="text" id="r_name" name="r_name" value={updatediscount?.r_name }/><br></br>
    <lable> Fruit:</lable>
    <input type="text" id="fruit" name="fruit" onChange={updatediscount?.fruit}/><br></br>
    <lable>Sub Category:</lable>
    <input type="text" id="category" name="category" onChange={updatediscount?.category}/><br></br> 
    <lable>Quantity :</lable>
    <input type="text" id="quantity" name="quantity" onChange={updatediscount?.quantity}/><br></br> 
    <lable>Quality :</lable>
    <input type="text" id="quality" name="quality" onChange={updatediscount?.quality}/><br></br> 
    <lable>Date you want supplies :</lable>
    <input type="date" id="date" name="date" onChange={updatediscount?.date}/><br></br> 
  


  
  
    <button onClick={handleUpdate} >Save Changes</button><br></br> <br></br> 
    </div>
 
        </div>
    )
}
export default UpdateRequest;