import React from 'react'
import './NotFound.css';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className='notfound'>
<h1>Page Not Found</h1>

<button> <Link to="/">Back to Home</Link> </button>
    </div>
  )
}

export default NotFound