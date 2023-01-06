import React from "react";

const Go3 = ({ classified }) => {
  return (
    <>
      {/* GO3 */}
      <div className="go3">
        <h1 className="h1-go3">
          <span className="span-go3">{classified.word}</span>{" "}
          {classified.spelling}
        </h1>
        <div className="apply-img" style={{ padding: "0" }}>
          <div className="orthography inCantonese">
            <p className="p-go3">{classified.description}</p>
          </div>
        </div>

        <div className="apply-img nounsAnimal">
          <div className="list-title">
            <div
              className="list-title__header english "
              style={{
                color: "white",
              }}
            >
              <p> Phrases in English </p>
            </div>
            <div
              className="list-title__header romanisation "
              style={{
                color: "white",
              }}
            >
              <p> Orthography 1 </p>
            </div>
            <div
              className="list-title__header orthography "
              style={{
                color: "white",
              }}
            >
              <p> Orthography 2</p>
            </div>
          </div>
          {classified.classifiers &&
            classified.classifiers.map((list, index) => {
              return (
                <div className="list-content" key={index}>
                  <div
                    className="content-text list-content__english"
                    style={{ paddingRight: "1vw" }}
                    dangerouslySetInnerHTML={{
                      __html: list.means,
                    }}
                  ></div>
                  <div className=" content-text list-content__roma">
                    <div
                      className="roma-title"
                      dangerouslySetInnerHTML={{
                        __html: list.spelling,
                      }}
                    ></div>
                    <div className="roma-play">
                      <i
                        className="fas fa-play-circle"
                        onClick={() => {
                          const audio = document.getElementById(
                            "audio__oclock__1-" + list._id
                          );
                          audio.play();
                        }}
                      ></i>
                      <audio
                        id={"audio__oclock__1-" + list._id}
                        src={"http://" + list.audio.url}
                        controls
                        controlsList="nodownload"
                        style={{ display: "none" }}
                      ></audio>
                    </div>
                  </div>
                  <div
                    className="content-text list-content__orth"
                    dangerouslySetInnerHTML={{
                      __html: list.word,
                    }}
                  ></div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Go3;
