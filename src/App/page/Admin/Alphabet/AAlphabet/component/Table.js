import React from "react";

export default function Table({ index, data, setIsVisibleModal, setAlphabet }) {
  return (
    <>
      <tr className="table-component__title">
        <td className="title-tbody">
          {data && (
            <p>
                {data.word}
            </p>
          )}
        </td>

        <td className="title-tbody">
          {data &&
              <>
               
                <audio
                  src={"http://" + data.audio.url}
                  controls
                  controlsList="nodownload"
                >
                  Your browser does not support the audio element.
                </audio>
              </>
            }
        </td>
        <td className="title-tbody action">
          <button
            onClick={() => {
              setIsVisibleModal(true);
              setAlphabet(data);
            }}
          >
            <img
              src={require("assets/images/table/edit.svg").default}
              alt="img"
            />
          </button>
        </td>
      </tr>
    </>
  );
}
