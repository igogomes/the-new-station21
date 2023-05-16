import styles from './Sidebar.module.css'

import { Link } from 'react-router-dom';
import { FaThLarge, FaUserFriends, FaPlay, FaChartPie } from 'react-icons/fa'

function Sidebar() {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.icon}><Link to="/dashboard"><FaThLarge/><span>Dashboard</span></Link></li>
        <li className={styles.icon}><Link to="/manageusers"><FaUserFriends/><span>Usuários</span></Link></li>
        <li className={styles.icon}><Link to="/managecourses"><FaPlay/><span>Cursos</span></Link></li>
        <li className={styles.icon}><Link to="/managereports"><FaChartPie/><span>Relatórios</span></Link></li>
      </ul>
    </div>
  );
}

export default Sidebar

/*import ForgetPassword from './components/pages/ForgetPassword'
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

function Sidebar() {
    return (
        <ul>
        <li><Link to="/forgetpassword">Esqueci minha senha</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Meu Perfil</Link></li>
        <li><Link to="/manageusers">Gerenciar Usuários</Link></li>
        <li><Link to="/registerusers">Registrar Usuários</Link></li>
        <li><Link to="/editusers">Editar Usuários</Link></li>
        <li><Link to="/managecourses">Gerenciar Cursos</Link></li>
        <li><Link to="/registercourse">Registrar Curso</Link></li>
        <li><Link to="/viewcourse">Visualizar Curso</Link></li>
        <li><Link to="/editcourse">Editar Curso</Link></li>
        <li><Link to="/registercontents">Registrar Conteúdos</Link></li>
        <li><Link to="/registervideo">Registrar Vídeo</Link></li>
        <li><Link to="/editvideo">Editar Vídeo</Link></li>
        <li><Link to="/registertext">Registrar Texto</Link></li>
        <li><Link to="/edittext">Editar Texto</Link></li>
        <li><Link to="/registerarchive">Registrar Arquivo</Link></li>
        <li><Link to="/editarchive">Editar Arquivo</Link></li>
        <li><Link to="/registerlink">Registrar Link</Link></li>
        <li><Link to="/editlink">Editar Link</Link></li>
        <li><Link to="/registerevaluation">Registrar Avaliação</Link></li>
        <li><Link to="/registerexercise">Registrar Exercício</Link></li>
        <li><Link to="/editexercise">Editar Exercício</Link></li>
        <li><Link to="/registertest">Registrar Prova</Link></li>
        <li><Link to="/edittest">Editar Prova</Link></li>
        <li><Link to="/managecategories">Gerenciar Categorias</Link></li>
        <li><Link to="/registercategory">Registrar Categoria</Link></li>
        <li><Link to="/editcategory">Editar Categoria</Link></li>
        <li><Link to="/managereports">Gerenciar Relatórios</Link></li>
        <li><Link to="/viewcoursesreport">Visualizar Relatórios de Cursos</Link></li>
        <li><Link to="/viewcoursereport">Visualizar Relatório de Curso</Link></li>
        <li><Link to="/assignedcourses">Todos Meus Cursos</Link></li>
        <li><Link to="/mycourses">Meus Cursos</Link></li>
        <li><Link to="/othercourses">Outros Cursos</Link></li>
        <li><Link to="/recentcourses">Cursos Recentes</Link></li>
        <li><Link to="/courseoverview">Visão Geral do Curso</Link></li>
        <li><Link to="/coursedashboard">Visualizar Progresso do Curso</Link></li>
        <li><Link to="/videoviewer">Visualizar Vídeo</Link></li>
        <li><Link to="/textviewer">Visualizar Texto</Link></li>
        <li><Link to="/exerciseviewer">Visualizar Exercício</Link></li>
        <li><Link to="/testviewer">Visualizar Prova</Link></li>
        <li><Link to="/exerciseresultsviewer">Visualizar Resultado do Exercício</Link></li>
        <li><Link to="/testresultsviewer">Visualizar Resultado da Prova</Link></li>
      </ul>*/

        /* Divider */
        /*<Routes>
          <Route path='/forgetpassword' element={<ForgetPassword/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/manageusers' element={<ManageUsers/>}/>
          <Route path='/registerusers' element={<RegisterUsers/>}/>
          <Route path='/editusers' element={<EditUsers/>}/>
          <Route path='/managecourses' element={<ManageCourses/>}/>
          <Route path='/registercourse' element={<RegisterCourse/>}/>
          <Route path='/viewcourse' element={<ViewCourse/>}/>
          <Route path='/editcourse' element={<EditCourse/>}/>
          <Route path='/registercontents' element={<RegisterContents/>}/>
          <Route path='/registervideo' element={<RegisterVideo/>}/>
          <Route path='/editvideo' element={<EditVideo/>}/>
          <Route path='/registertext' element={<RegisterText/>}/>
          <Route path='/edittext' element={<EditText/>}/>
          <Route path='/registerarchive' element={<RegisterArchive/>}/>
          <Route path='/editarchive' element={<EditArchive/>}/>
          <Route path='/registerlink' element={<RegisterLink/>}/>
          <Route path='/editlink' element={<EditLink/>}/>
          <Route path='/registerevaluation' element={<RegisterEvaluation/>}/>
          <Route path='/registerexercise' element={<RegisterExercise/>}/>
          <Route path='/editexercise' element={<EditExercise/>}/>
          <Route path='/registertest' element={<RegisterTest/>}/>
          <Route path='/edittest' element={<EditTest/>}/>
          <Route path='/managecategories' element={<ManageCategories/>}/>
          <Route path='/registercategory' element={<RegisterCategory/>}/>
          <Route path='/editcategory' element={<EditCategory/>}/>
          <Route path='/managereports' element={<ManageReports/>}/>
          <Route path='/viewcoursesreport' element={<ViewCoursesReport/>}/>
          <Route path='/viewcoursereport' element={<ViewCourseReport/>}/>
          <Route path='/assignedcourses' element={<AssignedCourses/>}/>
          <Route path='/mycourses' element={<MyCourses/>}/>
          <Route path='/othercourses' element={<OtherCourses/>}/>
          <Route path='/recentcourses' element={<RecentCourses/>}/>
          <Route path='/courseoverview' element={<CourseOverview/>}/>
          <Route path='/coursedashboard' element={<CourseDashboard/>}/>
          <Route path='/videoviewer' element={<VideoViewer/>}/>
          <Route path='/textviewer' element={<TextViewer/>}/>
          <Route path='/exerciseviewer' element={<ExerciseViewer/>}/>
          <Route path='/testviewer' element={<TestViewer/>}/>
          <Route path='/exerciseresultsviewer' element={<ExerciseResultsViewer/>}/>
          <Route path='/testresultsviewer' element={<TestResultsViewer/>}/>
        </Routes>
    );
}

export default Sidebar*/