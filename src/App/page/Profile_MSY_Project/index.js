import React, { useEffect, useState } from "react";
import Theme1 from "./Theme1";
import Theme2 from "./Theme2";
import Theme3 from "./Theme3";
import Theme4 from "./Theme4";
 

const ThemeChoose = () => {
  const [chooseTheme, setChooseTheme] = useState("info-template-3")
 
  const data = [
    {
      image : "https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg",
      image1 : "https://i.9mobi.vn/cf/images/2015/03/nkk/anh-gai-xinh-4.jpg",
      text1 : "Nguyễn Phước Thu",
      text2: "Developer in Kozocom Da Nang",
      text3: "Jely Facebook",
      text4: "Jely Zalo",
      text5: "Jely Telegram",
      text6: "Jely Youtube",
      text7: "Jely Skype",
      text8: "Jely Sacombank",
      text9: "Jely Momo",
      text10: "Jely Vietinbank",
      text11: "Jely Phone",
      text12: "Jely Message",
    }
]

  const chooseThemeShow = (value) => {
    switch (value) {
      case "info-template-1":
        return <Theme1 data={data} />;
      case "info-template-2":
        return <Theme2 data={data}/>;
      case "info-template-3":
        return <Theme3 data={data}/>;
      case "info-template-4":
        return <Theme4 data={data}/>;
      default:
        return <Theme1 data={data}/>;
    }
  };

  return (
    <>
     {/* <select name="theme" id="theme" value={chooseTheme} onChange={ (e) => {setChooseTheme( e.target.value )}  } >
        <option value="info-template-1">Theme 1</option>
        <option value="info-template-2">Theme 2</option>
        <option value="info-template-3">Theme 3</option>
        <option value="info-template-4">Theme 4</option>
      </select> */}
      <div className="info-msy" >{chooseThemeShow(chooseTheme)} </div>
    </>
  );
};

export default ThemeChoose;
