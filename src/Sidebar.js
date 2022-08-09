import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import foto from "./img/image.jpeg"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider'


function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='sidebar'>
        <SidebarRow src={user.photoURL} title={user.displayName} /> 
        <SidebarRow Icon={<LocalHospitalIcon/>} title="Covid-19 Info Center"/>
        <SidebarRow Icon={<EmojiFlagsIcon />} title="Pages"/>
        <SidebarRow Icon={<PeopleIcon />} title="Friends"/>
        <SidebarRow Icon={<ChatIcon />} title="Messenger"/>
        <SidebarRow Icon={<StorefrontIcon />} title="Marketplace"/>
        <SidebarRow Icon={<VideoLibraryIcon />} title="Videos"/>
        <SidebarRow Icon={<ExpandMoreIcon />} title="Marketplace"/>

    </div>
  )
}

export default Sidebar;
