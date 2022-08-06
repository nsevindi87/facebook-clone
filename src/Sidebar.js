import React, { useReducer } from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import User from './img/image.jpeg'
import {FaUserCircle} from 'react-icons/fa'
import {MdLocalHospital} from 'react-icons/md'
import {MdOutlineEmojiFlags} from 'react-icons/md'
import {BsPeopleFill} from 'react-icons/bs'
import {BiChat} from 'react-icons/bi'
import {MdOutlineStorefront} from 'react-icons/md'
import {BsCameraVideo} from 'react-icons/bs'
import {MdOutlineExpandMore} from 'react-icons/md'

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow Icon={<FaUserCircle />} title={"Nizami Sevindi"} />  {/* src=" gönderemiyorum" */}
        <SidebarRow Icon={<MdLocalHospital />} title="Covid-19 Info Center"/>
        <SidebarRow Icon={<MdOutlineEmojiFlags />} title="Pages"/>
        <SidebarRow Icon={<BsPeopleFill />} title="Friends"/>
        <SidebarRow Icon={<BiChat />} title="Messenger"/>
        <SidebarRow Icon={<MdOutlineStorefront />} title="Marketplace"/>
        <SidebarRow Icon={<BsCameraVideo />} title="Videos"/>
        <SidebarRow Icon={<MdOutlineExpandMore />} title="Marketplace"/>

    </div>
  )
}

export default Sidebar
