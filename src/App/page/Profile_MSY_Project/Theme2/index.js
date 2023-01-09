import React, { useState, useEffect } from "react";
import phone from "../../../../assets/images/phone.png";
import message from "../../../../assets/images/mes.png";
import zalo from "../../../../assets/images/zalo.png";
import tele from "../../../../assets/images/tele.png";
import youtube from "../../../../assets/images/youtube.png";
import skype from "../../../../assets/images/skype.png";
import sac from "../../../../assets/images/sac.png";
import MoMo from "../../../../assets/images/MoMo.png";
import viet from "../../../../assets/images/viet.png";
import animebg from "../../../../assets/images/animebg.jpg";
import qrcode from "../../../../assets/images/qr-code.png";
import OpenApp from "react-open-app";
import QRCode from "react-qr-code";

export default function Theme2({data}) {
    const [pageURL, setPageURL] = useState(0);
    const [showQR, setShowQR] = useState(false);
    useEffect(() => {
      setPageURL(window.location.href);
    })
    console.log("pageURL:",pageURL)

    const clickShowQRCode =  () => {
        setShowQR(true)
    }  
    const clickCloseQRCode =  () => {
        setShowQR(false)
    }  

  return (
    <div id="profile" style={{backgroundColor: "#7574c7b5"}}>
        { showQR === true ? ( 
                <div>
                    <div class="show-pr-code" onClick={clickShowQRCode}>
                        <QRCode
                            size={100}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={pageURL}
                            viewBox={`0 0 256 256`}
                        />
                    </div>
                    <div className="back-ground" onClick={clickCloseQRCode}></div>
                </div> ) : ""
        }
        {data.length > 0 && data.map((key, index) => (
            <>
                <div className="background-profile" style={{backgroundImage: `url(${animebg})`}}>
                    
                    <div className='qr-code' onClick={clickShowQRCode}>
                        <img  style={{ height: "40px" }} src={qrcode} alt=""/>
                    </div>

                    <div className="contact-header contact-header-2">
                        <div className="avatar avatar2">
                            <img src={key.image} alt=""/>
                        </div>
                    
                        <div className="user-name user-name-2">
                            <div className="full-name">
                               {key.text1}
                             <br /><br />
                            </div>
                            <div className="nick-name">
                                <small>{key.text2 ? key.text2 : "Xin chao moi nguoi"}♪ ♫</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="other-info other-info-2 row">
                    <div className="item-info-2 col col-6 m-6 c-6">
                        <a className="btn btn-info-contact" target="_blank" href="https://facebook.com/hoangdien.97/" >
                            <div className="icon">
                                <img src="https://637737vnua.github.io/vlance_ID.49048/assets/images/fb_logo.png" alt=""/>
                            </div>
                            <div className="text">
                               {key.text3}
                            </div>
                        </a>
                    </div>
                    <div className="item-info-2 col col-6 m-6 c-6">
                        <a className="btn btn-info-contact" target="_blank" href="https://zalo.me/0387890890" > 
                            <div className="text">
                               {key.text4}
                            </div>
                            <div className="icon">
                                <img src={zalo} style={{ height: "40px" }} alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="item-info-2 col col-6 m-6 c-6">
                        <a className="btn btn-info-contact" target="_blank" href="https://web.telegram.org/k/" > 
                            <div className="icon">
                                <img src={tele} style={{ height: "40px" }} alt="" />
                            </div>
                            <div className="text">
                               {key.text5}
                            </div>
                        </a>
                    </div>
                    <div className="item-info-2 col col-6 m-6 c-6">
                        <a className="btn btn-info-contact" target="_blank" href="https://www.youtube.com/channel/UCXX1PdLLTAB_lk33_Is8FVA" > 
                            <div className="text">
                                {key.text6}
                            </div>
                            <div className="icon">
                            <img src={youtube} style={{ height: "40px" }} alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="item-info-2 col col-6 m-6 c-6">
                        <a className="btn btn-info-contact" target="_blank" href="https://www.skype.com/en/"  > 
                            <div className="icon">
                            <img src={skype} style={{ height: "40px" }} alt="" />
                            </div>
                            <div className="text">
                                {key.text7}
                            </div>
                        </a>
                    </div>
                    <div className="item-info-2 col col-6 m-6 c-6">
                        <a className="btn btn-info-contact"> 
                            <div className="text">
                                {key.text8}
                            </div>
                            <div className="icon">
                            <img src={sac} style={{ height: "40px" }} alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="item-info-2 col col-6 m-6 c-6">
                        <a className="btn btn-info-contact"> 
                            <div className="icon">
                            <img src={MoMo} style={{ height: "40px" }} alt="" />
                            </div>
                            <div className="text">
                                {key.text9}
                            </div>
                        </a>
                    </div>
                    <div className="item-info-2 col col-6 m-6 c-6">
                        <a className="btn btn-info-contact"> 
                            <div className="text">
                                {key.text10}
                            </div>
                            <div className="icon">
                            <img src={viet} style={{ height: "40px" }} alt="" />
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
