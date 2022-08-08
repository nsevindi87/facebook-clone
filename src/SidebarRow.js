import {Avatar, avatar} from '@material-ui/core'
import React from 'react';
import "./SidebarRow.css"

function SidebarRow({src, Icon, title}) {
  return (
    <div className='sidebarRow'>
        {src && <Avatar src={src}/>}
        <div className='icon'>{Icon}</div>    
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow
