import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Edit from './components/Edit';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NewStudent from './components/NewStudent';
import Student from './components/Student';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/contact' element={<Contact/>}/>
      <Route path = '/student' element={<Student/>}/>
      <Route path = '/student/newstudent' element={<NewStudent/>}/>
      <Route path = '/student/edit/:id' element={<Edit/>}/>
     </Routes>
     </BrowserRouter> 
     
    </div>
  );
}

export default App;
