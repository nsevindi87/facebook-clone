import { Button } from '@mui/material'
import logo from './img/fblogo.png'
import logotext from './img/fbtextlogo.png'
import './Login.css'
import  {auth, provider} from "./firebase"
import {actionTypes} from "./reducer"
import { useStateValue } from './StateProvider'


function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //sign in...
        auth
        .signInWithPopup(provider)
        .then((result) =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error)=> alert(error.message))
    }
  return (
    <div className="login">
        <div className="login_logo">
            <img src={logo} alt="" />
            <img src={logotext} alt="" />
        </div>
        <Button type='submit' onClick={signIn}>
            SIGN IN
        </Button>
    </div>
  )
};

export default Login;
