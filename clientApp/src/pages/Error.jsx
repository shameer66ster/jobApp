import {Link,useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';
const Error = () => {
    const error = useRouteError();
    if (error.status === 404) {
    return (
        <Wrapper>
            <div>
                <img src={img} alt="not found" />
                <h1>Oops! Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Link to="/dashboard">Back Home</Link>
            </div>
        </Wrapper>
        
      )
    }
  return (
    <Wrapper>
        <h1>Oops! Something went wrong.</h1>
    </Wrapper>
    
  )
}

export default Error