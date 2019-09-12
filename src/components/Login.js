import React, {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {RegisterAction} from '../store/actions/index';


const Login = props => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LoginData = useSelector(state=>state.RegisterReducer[0])

  const handleLogin = (evt) => {
      evt.preventDefault();
      console.log(email);
      console.log(password);
      dispatch(RegisterAction(email,password));
      const data ={
     
        email:email,
        password:password
    }

      // fetch('http://localhost:4000/backend/login', {
      //   method: 'POST',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify({data})
      // }).then(function(response) {
      //   if(response.status >= 400) {
      //     throw new Error("Bad response from server");
      //   }
      //   return response.json();
      // }).then((data) =>{
      //   console.log(data);     
      //   if(data){
        
      //      props.history.push('/login');
      //   }   
      // }).catch(function(err) {
      //   console.log(err)
      // });

            setEmail('');
            setPassword('');
}

  return(
    <div>

    <center>
    <div className="loginMain">
      <div className="loginLogo">
        <div className="loginContent">  
        </div>
      </div>
      <div className="registerContent">  
      </div>
      <div className="col-6 inputFields">
          <center>
        <form onSubmit={handleLogin}>
            <div className="">
              <label>
              <input className="form-control" type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email" required/>
              </label>
            </div>

            <div className="">
              <label>
              <input className="form-control" type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password" required/>
              </label>
            </div>

            <div className="inputFields">
            <center><input className="btn-sm login" type="submit" value="Login"/> </center>
            </div>
   
             <p className="nav-link text-dark" >Not yet registerd?
             <Link to='/register'>Signup</Link> </p> 
  
            </form>
        </center>
      </div>
    </div></center>
    
    </div>
  );
}
export default Login;