import { Button } from '@mui/material'
import logo from './img/fblogo.png'
import logotext from './img/fbtextlogo.png'
import './Login.css'
import  {auth, provider} from "./firebase"


function Login() {

    const signIn =()=>{
        //sign in...
        auth
        .signInWithPopup(provider)
        .then((result) =>{
            console.log(result)
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
}

export default Login
