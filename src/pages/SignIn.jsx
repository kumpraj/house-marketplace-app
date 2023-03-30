import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'


function SignIn() {
  const [showPassword, setShowpassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password} = formData;

  const navigate = useNavigate();

  const onChange = (e) => {

  }


    return (
      <>
        <div className="pageContainer">
          <header>
            <p className="pageHeader">
              Welcome Back!
            </p>
          </header>

          
            <form >
              <input type="email"
                className="emailInput"
                value={email}
                id='email'
                placeholder="Email"
                onChange={onChange} />

              <div className="passwordInputDiv">
                <input type={showPassword ? 'text': 'password'}
                 className="passwordInput"
                 placeholder="Password"
                 value={password}
                 id='password'
                 onChange={onChange} />

                 <img src={visibilityIcon}
                 alt="show password"
                 className='showPassword'
                 placeholder="Password"
                 onClick={() => setShowpassword((prevState) => !prevState)} />
              </div>

              <Link to='/forgot-password' className="forgotPasswordLink">
                Forgot Password
              </Link>

              <div className="signInBar">
                <p className="signInText">Sign In</p>
                <button className="signInButton">
                  <ArrowRightIcon fill="#fffff" width='34px' height='34px'/>
                </button>
              </div>
            </form>
            {/* OAuth */}

            <Link to='/sign-up' className="registerLink">
              Sign Up Instead
            </Link>          
        </div>
      </>
    )
  }
  
  export default SignIn