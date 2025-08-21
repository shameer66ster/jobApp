import {Link,useRouteError } from 'react-router-dom';
const Error = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <div>
        <h1>Oops! Something went wrong.</h1>
        <Link to="/">Go back to Home</Link>
    </div>
    
  )
}

export default Error