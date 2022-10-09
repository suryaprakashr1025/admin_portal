import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Topbar from './Topbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./css/sb-admin-2.css"
import "./fontawesome-free/css/fontawesome.css"
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './User';
import { Tab } from 'bootstrap';
import Tables from './tables';

function App() {
  return (
   <BrowserRouter>
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" class="d-flex flex-column">
       <div id="content">
      <Topbar></Topbar>
     
      <Routes>
        <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/Charts"  element={<User></User>}></Route>
        <Route path="/Tables"  element={<Tables></Tables>}></Route>
      </Routes>
     
     
      
      </div>
      </div>
      </div>
  
   </BrowserRouter>
  );
}

export default App;
