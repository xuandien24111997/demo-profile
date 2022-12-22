import React from 'react'

export default function Theme4({data}) {
  return (
    <div id="profile">
        <div className="backgroud-profile" style={{backgroundImage: `url('https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940') `}}>
            <div className="btn-menu">
                <label className="btn-menu__img" for="menudrop-1">
                    <img src="./assets/images/menu_icon.png" alt=""/>
                </label>
                <input type="checkbox" hidden="" name="" className="menudrop" id="menudrop-1"/>
                <div className="menu-dropdown header">
                    <div className="menu-dropdown__item">
                        item 1
                    </div>
                    <div className="menu-dropdown__item">
                        item 2
                    </div>
                    <div className="menu-dropdown__item">
                        item 3
                    </div>
                </div>
            </div>
            <div className="contact-header">
                <div className="avatar">
                    <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940" alt=""/>
                </div>
                <div className="btn btn-qr">
                    Tải QR
                </div>
                <div className="user-name">
                    <div className="full-name">
                        Nguyễn Phượng Vĩ
                        <div className="line">
                            <img src="./assets/images/line1.png" alt=""/>
                        </div>
                    </div>
                    <div className="nick-name">
                        <small>Đây là theme 4 ♪ ♫</small>
                    </div>
                </div>
                <div className="contact-control-header row">
                    <div className="btn btn-action-header col l-6 m-6 c-6">
                        <div className="icon">
                            <img src="https://637737vnua.github.io/vlance_ID.49048/assets/images/yt_logo.png" alt=""/>
                        </div>
                        <div className="title">Gọi điện</div>
                    </div>
                    <div className="btn btn-action-header col l-6 m-6 c-6">
                        <div className="icon">
                            <img src="https://637737vnua.github.io/vlance_ID.49048/assets/images/yt_logo.png" alt=""/>
                        </div>
                        <div className="title">Lưu số</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="other-info row">
            <div className="item-info col l-6 m-6 c-6">
                <a href="abc" className="btn btn-info-contact"> 
                    <div className="icon">
                        <img src="https://637737vnua.github.io/vlance_ID.49048/assets/images/yt_logo.png" alt=""/>
                    </div>
                    <div className="text">
                        Facebook
                    </div>
                </a>
            </div>
            <div className="item-info col l-6 m-6 c-6">
                <a href="abc" className="btn btn-info-contact"> 
                    <div className="icon">
                        <img src="https://637737vnua.github.io/vlance_ID.49048/assets/images/yt_logo.png" alt=""/>
                    </div>
                    <div className="text">
                        Zalo
                    </div>
                </a>
            </div>
            <div className="item-info col l-6 m-6 c-6">
                <a href="abc" className="btn btn-info-contact"> 
                    <div className="icon">
                        <img src="https://637737vnua.github.io/vlance_ID.49048/assets/images/yt_logo.png" alt=""/>
                    </div>
                    <div className="text">
                        Tiktok
                    </div>
                </a>
            </div>
            <div className="item-info col l-6 m-6 c-6">
                <a href="abc" className="btn btn-info-contact"> 
                    <div className="icon">
                        <img src="https://637737vnua.github.io/vlance_ID.49048/assets/images/yt_logo.png" alt=""/>
                    </div>
                    <div className="text">
                        Youtube
                    </div>
                </a>
            </div>
        </div>
       
    </div>
  )
}
