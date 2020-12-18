import React from 'react';
import { Link } from 'react-router-dom';


const Error=()=>{
  return(
    <div>
      <h4>Page does not exist!</h4>
      <Link to="/Todo">Back Home</Link>
    </div>
  );
}
export default Error;
