import {Link} from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import FormRow from '../components/FormRow';

const Register = () => {
  return (
    <Wrapper>
        <form className='form'>
            <logo />
            <h4>Register</h4>
            < FormRow type= 'text' name= 'name' defaultValue='john' />
            < FormRow type= 'text' name= 'lastName' labelText='last name' defaultValue='smith' />
            < FormRow type= 'text' name= 'location' defaultValue='earth' />
            < FormRow type= 'email' name= 'email' defaultValue='john@email.com' />
            < FormRow type= 'password' name= 'password' defaultValue='secret@123' />
            <button type='submit' className='btn btn-block'>Submit</button>
            <p>
                Already a member?
                <Link to='/login' className='member-btn'>Login</Link>
            </p>
        </form>
    </Wrapper>
    
  )
}

export default Register