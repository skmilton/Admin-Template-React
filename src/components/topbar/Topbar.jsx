import React from 'react'
import './topbar.css'
import { NotificationsNone,Language,Settings } from '@material-ui/icons';
// import photo from './images (1).png'
export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>Logo</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                    {/* <img src={photo} alt=" " className='topAvatar'/> */}
                </div>
            </div>
        </div>
    )
}
