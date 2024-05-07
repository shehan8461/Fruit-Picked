import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './updateprofile.css'


function UpdateProfile(){
    const { id } = useParams();
    const [updatediscount,setupdatediscount]=useState({
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

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:8010/user_buisness/${id}`);
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
          const response = await fetch(`http://localhost:8010/update_buisness`, {
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
    <input type="text" id="ur_name" name="ur_name" onChange={handleInputChange} value={updatediscount?.ur_name }/><br></br>
    <lable>Email:</lable>
    <input type="text" id="b_email" name="b_email" onChange={handleInputChange} value={updatediscount?.b_email}/><br></br>
    <lable>Contact:</lable>
    <input type="text" id="b_contact" name="b_contact" onChange={handleInputChange} value={updatediscount?.b_contact}/><br></br> 
    <lable>Permenent Address</lable>
    <input type="text" id="permanent_address" name="permanent_address" onChange={handleInputChange} value={updatediscount?.permanent_address}/><br></br> 
    <lable>Postal Code</lable>
    <input type="text" id="b_code" name="b_code" onChange={handleInputChange} value={updatediscount?.b_code}/><br></br> 
    <lable>Buisness Name</lable>
    <input type="text" id="b_name" name="b_name" onChange={handleInputChange} value={updatediscount?.b_name}/><br></br> 
    <lable>Buisness Registration Id</lable>
    <input type="text" id="b_id" name="b_id" onChange={handleInputChange} value={updatediscount?.b_id}/><br></br> 
  
    <lable>Address</lable>
    <input type="text" id="b_address" name="b_address" onChange={handleInputChange} value={updatediscount?.b_address}/><br></br> 
    <lable>Branches 1</lable>
    <input type="text" id="b_branches1" name="b_branches1" onChange={handleInputChange} value={updatediscount?.b_branches1}/><br></br> 
    <lable>Branches 2</lable>
    <input type="text" id="b_branches2" name="b_branches2" onChange={handleInputChange} value={updatediscount?.b_branches2}/><br></br> 
    <lable>Branches 3</lable>
    <input type="text" id="b_branches3" name="b_branches3" onChange={handleInputChange} value={updatediscount?.b_branches3}/><br></br> 
  
  
    <button onClick={handleUpdate} >Save Changes</button><br></br> <br></br> 
    </div>
 
        </div>
    )
}
export default UpdateProfile;