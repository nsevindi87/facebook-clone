import logo from './img/fblogo.png'
import logotext from './img/fbtextlogo.png'


function Login() {
  return (
    <div className="login">
        <div className="login_logo">
            <img src={logo} alt="" />
            <img src={logotext} alt="" />
        </div>
    </div>
  )
}

export default Login
