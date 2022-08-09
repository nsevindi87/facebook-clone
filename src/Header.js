import logo from './img/Facebook_f_logo_(2019).svg.png'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import {Avatar, IconButton} from "@material-ui/core"
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider'


function Header() {
    const [{ user }, dispatch] = useStateValue();


  return (
    <div className='header'>
        <div className="header_left">
            <img src={logo} alt="Logo"/>
            <div className="header_input">
                <SearchIcon />
                <input type="text" placeholder='Search Facebook'/>
            </div>


        </div>
        <div className="header_center">
            <div className="header_option header_option_active">
                <HomeIcon fontSize="large" />
            </div>
            <div className="header_option ">
                <EmojiFlagsIcon fontSize="large" />
            </div>
            <div className="header_option ">
                <SubscriptionsIcon fontSize="large" />
            </div>
            <div className="header_option ">
                <StorefrontIcon fontSize="large" />
            </div>
            <div className="header_option ">
                <SupervisedUserCircleIcon fontSize="large" />
            </div>
        </div>
        <div className="header_right">
            <div className="header_info">
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
            </div>
            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
            
                
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