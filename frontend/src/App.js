import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Adduser from './Componenet/adduser';
import BuyerEdit from './Componenet/buyersdetails';
import UpdateBuyer from './Componenet/Buersedit';
import AddProfile from './Biusness_Component/addprofile';
import ProfileDetails from './Biusness_Component/profiledetails';
import UpdateProfile from './Biusness_Component/profileupdate';
import AddRequest from './Request Component/addrequest';
import RequestDetails from './Request Component/requestdetails';
import UpdateRequest from './Request Component/UpdateRequest';
import BuyersDashboard from './Dashboard_Component/buyersdashboards';
import Header from './header';
import Repoart from './Dashboard_Component/Repoart';

function App() {
  return (
    <div className="App">
    
     <Router>
      <Header/>
      <Routes>
     
        <Route path="/" element={<Adduser/>}></Route>
        <Route path="/userdetails" element={<BuyerEdit/>}></Route>
        <Route path="/edituser/:id" element={<UpdateBuyer/>}></Route>

        <Route path="/addprofile" element={<AddProfile/>}></Route>
        <Route path="/profiledetails" element={<ProfileDetails/>}></Route>
        <Route path="/updateprofile/:id" element={<UpdateProfile/>}></Route>

        <Route path="/addrequest" element={<AddRequest/>}></Route>
        <Route path="/requestdetails" element={<RequestDetails/>}></Route>
        <Route path="/updaterequest/:id" element={<UpdateRequest/>}></Route>


        <Route path="/buyerdashboard" element={<BuyersDashboard/>}></Route>
        <Route path="/repoart" element={<Repoart/>}></Route>
      </Routes>
     </Router>
  
    </div>
  );
}

export default App;
