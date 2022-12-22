import React, { useEffect, useState } from "react";
import img2 from "../../../assets/images/2.png";
import Shape1 from "../../../assets/images/Shape1.png";
import Shape2 from "../../../assets/images/shape2.png";
import Shape3 from "../../../assets/images/shape3.png";
import Shape4 from "../../../assets/images/shape4.png";
import Shape05 from "../../../assets/images/shape05.png";
import Shape06 from "../../../assets/images/shape06.png";
import Shape07 from "../../../assets/images/shape07.png";
import Shape08 from "../../../assets/images/shape08.png";
import GoogleMap from "../../../components/googleMaps";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import history from "ultils/history";
import { getlistLanguageAdminService } from "service/admin/languages";
import { count } from "service/client/visisted";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function Home() {
  const [visited, setVisited] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([])

  useEffect(() => {
    setIsLoading(true)
    getlistLanguageAdminService({
      TotalOrderForOnePage: 9999,
    }).then((response) => {
      setList(response.data.languages)
    }).finally(() => {
      setIsLoading(false)
    })
  }, []);

  useEffect(() => {
    count().then((res) => setVisited(res.data.count))
  }, [])

  return (
    <div className="home">
      <div className="container">
        <div className="home__new-title">
          <h1 className="title-h1">
            WELCOME TO <br />
            LANGUAGE LEARNING PLATFORM
          </h1>
          <div style={{ display: "flex", justifyContent: "left" }}>
            <p className="line"></p>
          </div>
          <div className="title-content">
            <div className="title-content__content-text">
              <h3 className="text-h3"> Our Aims</h3>
              <p className="text-top">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverrae et dolore
                magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                commodo viverra maecenas accumsan lacus vel facilisis. viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, labore et dolore magna aliqua.
              </p>
              <p className="text-bottom">
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverrae
                et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                Risus commodo viverra maecenas accumsan lacus vel facilisis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="title-content__content-img">
              <img alt="img" className="img-right" src={img2} />
            </div>
          </div>
          <div className="title-show">
            <div className="title-show__table">
              <h1 className="table-h1">
                {
                  <CountUp
                    start={0}
                    end={numberWithCommas(visited)}
                    duration={2}
                  >
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                }
              </h1>
              <p className="table-p">People Visits</p>
            </div>
            <div className="title-show__table">
              <h1 className="table-h1">
                {
                  <CountUp start={0} end={30} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                }
                +
              </h1>
              <p className="table-p">Countries</p>
            </div>
            <div className="title-show__table">
              <h1 className="table-h1">
                {!isLoading && (
                  <CountUp start={0} end={list.length} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                )}
              </h1>
              <p className="table-p">Languages</p>
            </div>
          </div>
          <div className="content-button">
            <div className="button-more">
              <button onClick={() => history.push("/about-us")}>
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* google-map code here*/}
      <div className="map">
        <div className="container">
          <h1 className="map__h1">SORT BY REGION</h1>
          <div className="map__gg-map">
            <GoogleMap />
          </div>
        </div>
      </div>

      <div className="home__sort-module">
        <h3 className="sort-title"
         onClick={() => history.push("/select-language")}
        >SORT BY MODULE</h3>
        <div className="container">
          <div className="sort-div">
            <div
              className="sort-div__list"
              onClick={() => history.push("/select-language")}
            >
              <div className="list-img">
                <img alt="img" className="img-list" src={Shape1} />
              </div>
              <p className="list-text">
                20 Most frequently
                <br /> used phrases{" "}
              </p>
            </div>
            <div
              className="sort-div__list"
              onClick={() => history.push("/select-language")}
            >
              <div className="list-img">
                <img alt="img" className="img-list" src={Shape2} />
              </div>
              <p className="list-text" style={{ marginTop: "13px" }}>
                Directions{" "}
              </p>
            </div>
            <div
              className="sort-div__list"
              onClick={() => history.push("/select-language")}
            >
              <div className="list-img">
                <img alt="img" className="img-list" src={Shape3} />
              </div>
              <p className="list-text">
                Numbers <br />& Classifiers{" "}
              </p>
            </div>
            <div
              className="sort-div__list"
              onClick={() => history.push("/select-language")}
            >
              <div className="list-img">
                <img alt="img" className="img-list" src={Shape4} />
              </div>
              <p className="list-text" style={{ marginTop: "13px" }}>
                Time{" "}
              </p>
            </div>
          </div>
          <div className="sort-div">
            <div
              className="sort-div__list"
              onClick={() => history.push("/select-language")}
            >
              <div className="list-img">
                <img alt="img" className="img-list" src={Shape05} />
              </div>
              <p className="list-text" style={{ marginTop: "13px" }}>
                Alphabet{" "}
              </p>
            </div>
            <div
              className="sort-div__list"
              onClick={() => history.push("/select-language")}
            >
              <div className="list-img">
                <img alt="img" className="img-list" src={Shape06} />
              </div>
              <p className="list-text" style={{ marginTop: "13px" }}>
                Hand Gestures{" "}
              </p>
            </div>
            <div
              className="sort-div__list"
              onClick={() => history.push("/select-language")}
            >
              <div className="list-img">
                <img alt="img" className="img-list" src={Shape07} />
              </div>
              <p className="list-text" style={{ marginTop: "13px" }}>
                Finger Counting{" "}
              </p>
            </div>
            <div
              className="sort-div__list"
              onClick={() => history.push("/select-language")}
            >
              <div className="list-img">
                <img alt="img" className="img-list" src={Shape08} />
              </div>
              <p className="list-text" style={{ marginTop: "13px" }}>
                Quiz{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="div-lorem">
        <div className="lorem">
          <p className="lorem-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="lorem-title"> - Stephen P.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
