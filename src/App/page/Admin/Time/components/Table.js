import moment from "moment";
import React from "react";
import Swal from "sweetalert2";

export default function Table({
  data,
  setIsVisibleModal,
  setTime,
  setPicture,
  picture,
}) {
  return (
    <>
      <tr className="table-component__title">
        <td className="title-tbody">
          <img
            src={"http://" + data.image.url}
            alt=""
            style={{ height: "5rem", width: "5rem" }}
          />
        </td>
        <td className="title-tbody">
          {data?.group?.length > 0 &&
            data?.group?.map((item, index) => (
              <p>
                Text {index + 1} : {item.word}
              </p>
            ))}
        </td>
        <td className="title-tbody">
          {data?.group?.length > 0 &&
            data?.group?.map((item, index) => (
              <p>
                Text {index + 1} : {item.spelling}
              </p>
            ))}
        </td>
        <td className="title-tbody">
          {data?.group?.length > 0 &&
            data?.group?.map((item, index) => (
              <p>
                Text {index + 1} : {item.means}
              </p>
            ))}
        </td>
        <td className="title-tbody">
          {data?.group?.length > 0 &&
            data?.group?.map((item, index) => (
              <>
                <p className="mb-2">Text {index + 1}</p>
                <audio
                  src={"http://" + item?.audio?.url}
                  controls
                  controlsList="nodownload"
                >
                  Your browser does not support the audio element.
                </audio>
              </>
            ))}
        </td>
        <td className="title-tbody action">
          <button
            onClick={() => {
              setIsVisibleModal(true);
              setTime(data);
              setPicture({ ...picture, VirtualPath: data.image.url });
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
