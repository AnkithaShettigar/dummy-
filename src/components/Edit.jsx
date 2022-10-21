import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { add } from './Details';

 const Edit = () =>{

  const[name,setName] = useState("");
  const[age,setAge] = useState("");
  const[course,setCourse] = useState("");
  const[batch,setBatch] = useState("");

  const {id} = useParams();

  const[students,setStudents] = useContext(add);

  const ChanegeHandleName = (e) =>{setName(e.target.value)};
  const ChanegeHandleAge = (e) =>{setAge(e.target.value)};
  const ChanegeHandleCourse = (e) =>{setCourse(e.target.value)};
  const ChanegeHandleBatch = (e) =>{setBatch(e.target.value)};

  useEffect(()=>{
    students.forEach((contact) =>{
      if(contact.id === id){
        setName(contact.Name);
        setAge(contact.Age);
        setCourse(contact.Course);
        setBatch(contact.Batch);


      }

    });
  },[id,students]);

  const SubmitHandler = () =>{
    setStudents((previousV) =>
    previousV.map((add) =>
    add.id === id
    ?{
      id:id,
      Name:name,
      Age:age,
      Batch:batch,
      Course:course,
    }
    :add
    )
    );
  };
  
  return (
    <div  className='page1'>
       <form action="">
       <div className='inpt'>
        <input type="text" name="name" id="name" placeholder='Name' value={name} onChange={ChanegeHandleName}/>
        <input type="number" name="age" id="age" placeholder='Age' value={age} onChange={ChanegeHandleAge}/>
        <input type="text" name="course" id="course" placeholder='Course' value={course} onChange={ChanegeHandleCourse}/>
        <input type="Bach" name="batch" id="batch" placeholder='Batch' value={batch} onChange={ChanegeHandleBatch}/>
        </div>
        <div className='btn2'>
        <Link to='/student'><button>Cancel</button></Link>
        <Link to='/student' onClick={SubmitHandler}><button>Update</button></Link>
        </div>
       </form>
    </div>
  )
}
export default Edit;