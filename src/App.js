import HomePage from './pages/home';
import './App.css';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/themify-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup'
import EmailPass from './pages/emailpass'
import NewPassword from './pages/newpass'
import Jobs from './pages/jobs'
import PostAJob from './pages/postajob';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountInfo from './pages/accountinfo';
import JobDetail from './component/jobdetail';

function App() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/enter-email-pass' element={<EmailPass/>}/>
            <Route path='/reset-password' element={<NewPassword/>}/>
            <Route path='/myAccount' element={<AccountInfo/>}/>
            <Route path='/jobs' element={<Jobs/>}/>
            <Route path='/postajob' element={<PostAJob/>}/>
            <Route path='/jobdetail' element={<JobDetail/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
