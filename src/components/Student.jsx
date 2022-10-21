import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { add } from './Details';

 const Student = () => {

  const[student] = useContext(add);

  return (
    <div>
        <h1>Student</h1>
        <Link to = '/student/newstudent'><button className='btn1'>Add Student</button></Link>
        <table border='2'>
         <thead>
         <tr>
           <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
           </tr>
         </thead>
           <tbody>
            {student.map((student)=>(<tr key={student.id}>
              <td>{student.Name}</td>
              <td>{student.Age}</td>
              <td>{student.Course}</td>
              <td>{student.Batch}</td>
              <td><Link to={`/student/edit/${student.id}`}>Edit</Link></td>
            </tr>
            ))}
           </tbody>
        </table>
    </div>
  )
}
export default Student;
