import React from 'react'
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
import abc from "../../../../assets/images/abc.gif";
import bgth3 from "../../../../assets/images/bg-th3.gif";

export default function Theme4({data}) {
  return (
    <div className="theme-3" id="profile" >
        {data.length > 0 && data.map((key, index) => (
            <>
                <div className="background-profile" style={{backgroundImage: `url(${abc})`}}>
                    <div className="contact-header contact-header-2 contact-header-3">
                        <div className="avatar avatar2">
                            <img src={key.image} alt=""/>
                        </div>
                    
                        <div className="user-name user-name-2">
                            <div className="full-name">
                               {key.text1}
                             <br /><br />
                            </div>
                            <div className="nick-name">
                                <small>{key.text2} ♪ ♫</small>
                            </div>
                        </div>
                        {/* <div className="contact-control-header row">
                            <div className="btn btn-action-header col col-6">
                                <div className="icon">
                                    <img src={phone} style={{ height: "40px" }} alt="" />
                                </div>
                                <div className="title">{key.text11}</div>
                            </div>
                            <div className="btn btn-action-header col col-6 ">
                                <div className="icon">
                                    <img src={message} style={{ height: "40px" }} alt="" />
                                </div>
                                <div className="title">{key.text12}</div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="other-info other-info-3 row" style={{ backgroundColor: "#a39fa7" , backgroundPosition: "center"}}>
                    <div className="item-info-3 col col-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="text">
                               {key.text3}
                            </div>
                            <div className="icon">
                                <img src="https://637737vnua.github.io/vlance_ID.49048/assets/images/fb_logo.png" alt=""/>
                            </div>
                        </a>
                    </div>
                    <div className="item-info-3 col col-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="icon">
                                <img src={zalo} style={{ height: "40px" }} alt="" />
                            </div>
                            <div className="text">
                               {key.text4}
                            </div>
                        </a>
                    </div>
                    <div className="item-info-3 col col-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="text">
                               {key.text5}
                            </div>
                            <div className="icon">
                                <img src={tele} style={{ height: "40px" }} alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="item-info-3 col col-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="icon">
                            <img src={youtube} style={{ height: "40px" }} alt="" />
                            </div>
                            <div className="text">
                                {key.text6}
                            </div>
                        </a>
                    </div>
                    <div className="item-info-3 col col-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="text">
                                {key.text7}
                            </div>
                            <div className="icon">
                            <img src={skype} style={{ height: "40px" }} alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="item-info-3 col col-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="icon">
                            <img src={sac} style={{ height: "40px" }} alt="" />
                            </div>
                            <div className="text">
                                {key.text8}
                            </div>
                        </a>
                    </div>
                    <div className="item-info-3 col col-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="text">
                                {key.text9}
                            </div>
                            <div className="icon">
                            <img src={MoMo} style={{ height: "40px" }} alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="item-info-3 col col-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="icon">
                            <img src={viet} style={{ height: "40px" }} alt="" />
                            </div>
                            <div className="text">
                                {key.text10}
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
