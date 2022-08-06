import logo from './img/Facebook_f_logo_(2019).svg.png'
import "./Header.css";
import {BsSearch} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {AiFillFlag} from 'react-icons/ai'
import {MdOutlineSubscriptions} from 'react-icons/md'
import {MdOutlineStorefront} from 'react-icons/md'
import {MdSupervisedUserCircle} from 'react-icons/md'
import {FaUserCircle} from 'react-icons/fa'
import {MdAdd} from 'react-icons/md'
import {MdForum} from 'react-icons/md'
import {MdNotificationsActive} from 'react-icons/md'
import {MdExpandMore} from 'react-icons/md'

function Header() {
  return (
    <div className='header'>
        <div className="header_left">
            <img src={logo} alt="Logo"/>
            <div className="header_input">
                <BsSearch />
                <input type="text"/>
            </div>


        </div>
        <div className="header_center">
            <div className="header_option ">
                <AiFillHome fontSize="large" />
            </div>
            <div className="header_option ">
                <AiFillFlag fontSize="large" />
            </div>
            <div className="header_option ">
                <MdOutlineSubscriptions fontSize="large" />
            </div>
            <div className="header_option ">
                <MdOutlineStorefront fontSize="large" />
            </div>
            <div className="header_option ">
                <MdSupervisedUserCircle fontSize="large" />
            </div>
        </div>
        <div className="header_right">
            <div className="header_info">
                <FaUserCircle />
                <h4>Username</h4>
            </div>
            <div className='header_option'>
                <MdAdd/>
            </div>
            <div className="header_option ">
                <MdForum/>
            </div>
            <div className="header_option ">
                <MdNotificationsActive />
            </div>
            <div className="header_option ">
                <MdExpandMore/>
            </div>
                
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