import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
     <p className='navhead'>
      <Link to='/' className='head1'>Home</Link>
       <Link to='/student' className='head1'>Student</Link>
       <Link to='/contact' className='head1'>Contact</Link>
     </p>
        
    </div>
  )
}
export default  Navbar;