import React from 'react'
import './topbar.css'
import { Settings, Language, NotificationsNone } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'>lamaadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIcon">
                        <span className="icon"><NotificationsNone /></span>
                        <span className='topbarIconBadge'>2</span>
                    </div>
                    <div className="topbarIcon">
                        <span className="icon"><Language />  </span>
                    </div>
                    <div className="topbarIcon">
                        <span className="icon"><Settings /> </span>
                    </div>
                    <img src="https://media.istockphoto.com/vectors/portrait-of-a-shorthaired-girl-androgin-lookingwith-asidelongglance-vector-id1190626181?k=20&m=1190626181&s=612x612&w=0&h=cqzcsUXp3pPDeFYJqspZY7amsnGzv9X9ZGQatwUeKEo=" className='topAvatar' alt="profile" />
                </div>
            </div>
        </div>
    )
}
