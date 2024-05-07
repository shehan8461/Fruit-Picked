import react from 'react'
import './header.css'
import logo from './fruit-icon-logo-design-illustration-free-vector.jpg'
function Header(){
    return(
        <div>
<div class="navbar">
    <img id="nimg" src={logo} alt='Logo2' width="60px"></img>
<h3 className='topic'>Freshly <br></br>Picked</h3>
  <a href="/">Home</a>
  <a href="/userdetails">Buyer Details</a>
  <a href="/addprofile">Add Profile</a>
  <a href="/profiledetails">Profile Details</a>
  <a href="/addrequest">Request Form</a>
  <a href="/requestdetails">Request Details</a>
  <a href="/buyerdashboard">Buyer Dashboard</a>
  <a href="/repoart">See Repoart</a>
</div>

        </div>
    )
}
export default Header