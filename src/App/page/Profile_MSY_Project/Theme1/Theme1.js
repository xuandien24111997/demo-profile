import React from 'react'


export default function Theme1({data}) {
  return (
    <div id="profile">
       
        {data.length > 0 && data.map((key, index) => (

            <>
                <div className="backgroud-profile" style={{backgroundImage: `url('https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940') `}}>
                    <div className="contact-header">
                        <div className="avatar">
                            <img src={key.image} alt=""/>
                        </div>
                        <div className="btn btn-qr">
                            Tải QR
                        </div>
                        <div className="user-name">
                            <div className="full-name">
                               {key.name}
                                <div className="line" style={{width:"50px"}}>
                                    <img src={key.image1} alt=""/>
                                </div>
                            </div>
                            <div className="nick-name">
                                <small>{key.theme} ♪ ♫</small>
                            </div>
                        </div>
                        <div className="contact-control-header row">
                            <div className="btn btn-action-header col l-6 m-6 c-6">
                                <div className="icon">
                                    <img src="https://637737vnua.github.io/vlance_ID.49048/assets/images/fb_logo.png" alt=""/>
                                </div>
                                <div className="title">{key.abc}</div>
                            </div>
                            <div className="btn btn-action-header col l-6 m-6 c-6">
                                <div className="icon">
                                    <img src="https://637737vnua.github.io/vlance_ID.49048/assets/images/fb_logo.png" alt=""/>
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
                                <img src="https://637737vnua.github.io/vlance_ID.49048/assets/images/fb_logo.png" alt=""/>
                            </div>
                            <div className="text">
                               {key.phone}
                            </div>
                        </a>
                    </div>
                    <div className="item-info col l-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="icon">
                                <img src="https://637737vnua.github.io/vlance_ID.49048/assets/images/fb_logo.png" alt=""/>
                            </div>
                            <div className="text">
                                {key.facebook}
                            </div>
                        </a>
                    </div>
                    <div className="item-info col l-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="icon">
                                <img src="https://637737vnua.github.io/vlance_ID.49048/assets/images/fb_logo.png" alt=""/>
                            </div>
                            <div className="text">
                                {key.zalo}
                            </div>
                        </a>
                    </div>
                    <div className="item-info col l-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="icon">
                                <img src="https://637737vnua.github.io/vlance_ID.49048/assets/images/fb_logo.png" alt=""/>
                            </div>
                            <div className="text">
                                {key.youtube}
                            </div>
                        </a>
                    </div>
                </div>
            </>
        )
        )}
    </div>
  )
}
