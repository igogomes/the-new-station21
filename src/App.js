import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from './components/layout/Container/Container';

import Login from './components/pages/Login'
import ForgetPassword from './components/pages/ForgetPassword'
import Dashboard from './components/pages/Dashboard'
import Profile from './components/pages/Profile'
import ManageUsers from './components/pages/ManageUsers'
import RegisterUsers from './components/pages/RegisterUsers'
import EditUsers from './components/pages/EditUsers'
import ManageCourses from './components/pages/ManageCourses'
import RegisterCourse from './components/pages/RegisterCourse'
import ViewCourse from './components/pages/ViewCourse'
import EditCourse from './components/pages/EditCourse'
import RegisterContents from './components/pages/RegisterContents'
import RegisterVideo from './components/pages/RegisterVideo'
import EditVideo from './components/pages/EditVideo'
import RegisterText from './components/pages/RegisterText'
import EditText from './components/pages/EditText'
import RegisterArchive from './components/pages/RegisterArchive'
import EditArchive from './components/pages/EditArchive'
import RegisterLink from './components/pages/RegisterLink'
import EditLink from './components/pages/EditLink'
import RegisterEvaluation from './components/pages/RegisterEvaluation'
import RegisterExercise from './components/pages/RegisterExercise'
import EditExercise from './components/pages/EditExercise'
import RegisterTest from './components/pages/RegisterTest'
import EditTest from './components/pages/EditTest'
import ManageCategories from './components/pages/ManageCategories'
import RegisterCategory from './components/pages/RegisterCategory'
import EditCategory from './components/pages/EditCategory'
import ManageReports from './components/pages/ManageReports'
import ViewCoursesReport from './components/pages/ViewCoursesReport'
import ViewCourseReport from './components/pages/ViewCourseReport'
import AssignedCourses from './components/pages/AssignedCourses'
import MyCourses from './components/pages/MyCourses'
import OtherCourses from './components/pages/OtherCourses'
import RecentCourses from './components/pages/RecentCourses'
import CourseOverview from './components/pages/CourseOverview'
import CourseDashboard from './components/pages/CourseDashboard'
import VideoViewer from './components/pages/VideoViewer'
import TextViewer from './components/pages/TextViewer'
import ExerciseViewer from './components/pages/ExerciseViewer'
import TestViewer from './components/pages/TestViewer'
import ExerciseResultsViewer from './components/pages/ExerciseResultsViewer'
import TestResultsViewer from './components/pages/TestResultsViewer'

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/forgetpassword">Esqueci minha senha</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Meu Perfil</Link></li>
        <li><Link to="/manageusers">Gerenciar Usuários</Link></li>
        <li><Link to="/registerusers">Registrar Usuários</Link></li>
        <li><Link to="/editusers">Editar Usuários</Link></li>
      </ul>
      <Container customClass='minHeight'>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
