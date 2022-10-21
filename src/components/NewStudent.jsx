import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {add} from './Details';

 const NewStudent = () => {

  const[Name,setName] = useState("")
  const[Age,setAge] = useState("")
  const[Course,setCourse] = useState("")
  const[Batch,setBatch] = useState("")
  const[students,setStudents] = useContext(add)

  const ChangeHandler1 = (e) =>{setName(e.target.value)}
  const ChangeHandler2 = (e) =>{setAge(e.target.value)}
  const ChangeHandler3 = (e) =>{setCourse(e.target.value)}
  const ChangeHandler4 = (e) =>{setBatch(e.target.value)}

  const SubmitHandler =() =>{
    setStudents([...students,{Name:Name,Age:Age,Course:Course,Batch:Batch,id:new Date().getTime().toString}])
  }



  return (
    <div className='page1'>
       <form action="">
       <div className='inpt'>
        <input type="text" name="name" id="name" placeholder='Name' value={Name} onChange={ChangeHandler1}/>
        <input type="number" name="age" id="age" placeholder='Age' value={Age} onChange={ChangeHandler2}/>
        <input type="text" name="course" id="course" placeholder='Course' value={Course} onChange={ChangeHandler3}/>
        <input type="number" name="batch" id="batch" placeholder='Batch' value={Batch} onChange={ChangeHandler4}/>
        </div>
        <div className='btn2'>
        <Link to='/student'><button>Cancel</button></Link>
        <Link to='/student' onClick={SubmitHandler}><button>Submit</button></Link>
        </div>
       </form>
    </div>
  )
}
export default NewStudent;
