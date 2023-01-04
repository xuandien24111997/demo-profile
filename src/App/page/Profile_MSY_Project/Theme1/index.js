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

export default function Theme1({data}) {
  return (
    <div id="profile">
        {data.length > 0 && data.map((key, index) => (
            <>
                <div className="background-profile" style={{backgroundImage: `url('https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940') `}}>
                    <div className="contact-header">
                        <div className="avatar">
                            <img src={key.image} alt=""/>
                        </div>
                    
                        <div className="user-name">
                            <div className="full-name">
                               {key.text1}
                             <br /><br />
                            </div>
                            <div className="nick-name">
                                <small>{key.text2} ♪ ♫</small>
                            </div>
                        </div>
                        <div className="contact-control-header row">
                            <div className="btn btn-action-header col col-6 m-6 c-6">
                                <div className="icon">
                                    <img src={phone} style={{ height: "40px" }} alt="" />
                                </div>
                                <div className="title">{key.text11}</div>
                            </div>
                            <div className="btn btn-action-header col col-6 m-6 c-6">
                                <div className="icon">
                                    <img src={message} style={{ height: "40px" }} alt="" />
                                </div>
                                <div className="title">{key.text12}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="other-info row">
                    <div className="item-info col col-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="icon">
                                <img src="https://637737vnua.github.io/vlance_ID.49048/assets/images/fb_logo.png" alt=""/>
                            </div>
                            <div className="text">
                               {key.text3}
                            </div>
                        </a>
                    </div>
                    <div className="item-info col col-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="icon">
                                <img src={zalo} style={{ height: "40px" }} alt="" />
                            </div>
                            <div className="text">
                               {key.text4}
                            </div>
                        </a>
                    </div>
                    <div className="item-info col col-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="icon">
                                <img src={tele} style={{ height: "40px" }} alt="" />
                            </div>
                            <div className="text">
                               {key.text5}
                            </div>
                        </a>
                    </div>
                    <div className="item-info col col-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="icon">
                            <img src={youtube} style={{ height: "40px" }} alt="" />
                            </div>
                            <div className="text">
                                {key.text6}
                            </div>
                        </a>
                    </div>
                    <div className="item-info col col-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="icon">
                            <img src={skype} style={{ height: "40px" }} alt="" />
                            </div>
                            <div className="text">
                                {key.text7}
                            </div>
                        </a>
                    </div>
                    <div className="item-info col col-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="icon">
                            <img src={sac} style={{ height: "40px" }} alt="" />
                            </div>
                            <div className="text">
                                {key.text8}
                            </div>
                        </a>
                    </div>
                    <div className="item-info col col-6 m-6 c-6">
                        <a href="abc" className="btn btn-info-contact"> 
                            <div className="icon">
                            <img src={MoMo} style={{ height: "40px" }} alt="" />
                            </div>
                            <div className="text">
                                {key.text9}
                            </div>
                        </a>
                    </div>
                    <div className="item-info col col-6 m-6 c-6">
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
