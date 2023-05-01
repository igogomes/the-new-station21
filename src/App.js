import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from './components/layout/Container/Container';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Sidebar from "./components/layout/Sidebar/Sidebar";

import Login from './components/pages/Login' 
import Dashboard from './components/pages/Dashboard'
import ManageUsers from './components/pages/ManageUsers'
import ManageCourses from './components/pages/ManageCourses'
import ManageReports from './components/pages/ManageReports'

function App() {
  return (
    <Router>
      <Container customClass='dashboardScreen'>
        <Container customClass='header'>
          <Navbar />
          <Routes>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </Container>
        <Container customClass='body'>
          <Container customClass='sideBar'>
            <Sidebar />
          </Container>
          <Container customClass='mainCanvas'>
            <Routes>
              <Route exact path='/' element={<Dashboard/>} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/manageusers' element={<ManageUsers/>} />
              <Route path='/managecourses' element={<ManageCourses/>} />
              <Route path='/managereports' element={<ManageReports/>} />
            </Routes>
          </Container>
        </Container>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
