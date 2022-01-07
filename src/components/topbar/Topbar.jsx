import React from 'react'
import './topbar.css'

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'>lamaadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIcon">
                        <span><i class="far fa-bell"></i></span>
                        <span className='topbarIconBadge'>2</span>
                    </div>
                    <div className="topbarIcon">
                        <span><i class="fas fa-globe"></i>  </span>
                    </div>
                    <div className="topbarIcon">
                        <span><i class="fas fa-cog"></i></span>
                    </div>
                    <img src="https://picsum.photos/id/237/200/300" className='topAvatar' alt="profile" />
                </div>
            </div>
        </div>
    )
}
