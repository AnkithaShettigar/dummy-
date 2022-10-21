import React, { createContext, useState } from 'react';

export const add = createContext()

 const Details =  (props) =>{
    const [students,setStudents] = useState([
        {   
             "id":"1",
            "Name":"Sush",
            "Age":"25",
            "Course":"MERN",
            "Batch":"2020"
        },
        {   
            "id":"2",
           "Name":"Dish",
           "Age":"25",
           "Course":"MERN",
           "Batch":"2020"
       },
       {   
        "id":"3",
       "Name":"Ankitha",
       "Age":"25",
       "Course":"MERN",
       "Batch":"2020"
      },
      {   
       "id":"4",
       "Name":"Sushmitha",
       "Age":"25",
       "Course":"MERN",
       "Batch":"2020"
   },

    ])
  return (
    <div>
        <add.Provider value={[students,setStudents]}>
            {props.children}
        </add.Provider>
    </div>
  )
}
export default Details;