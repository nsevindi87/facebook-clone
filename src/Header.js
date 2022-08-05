import logo from './img/Facebook_f_logo_(2019).svg.png'
import "./Header.css";

function Header() {
  return (
    <div className='Header'>
        <div className="header_left">
        <img src={logo} alt="Logo"/>

        </div>
        <div className="header_middle">

        </div>
        <div className="header_right">

        </div>
    </div>
  )
}

export default Header

/* Reactin hizli element yazmasi icin ayarlara git. sol altta
ayarlar acilinca sag yukaridaki döngü butonuna tikla. json dosyasi acilinca 
"emmet.includeLanguages": {
        "javascript": "javascriptreact"
    }
    konutunu ekle */