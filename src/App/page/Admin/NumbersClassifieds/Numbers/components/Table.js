import React from "react";
import Swal from "sweetalert2";

export default function Table({
  data,
  setIsVisibleModal,
  setNumbers,
  deleteNumberAction,
}) {
  const alertsDelete = (Id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) deleteNumberAction(Id);
    });
  };
  return (
    <>
      <tr className="table-component__title">
        <td className="title-tbody">{data.means}</td>
        <td className="title-tbody">{data.spelling}</td>
        <td className="title-tbody">{data.word}</td>
        <td className="title-tbody"
         dangerouslySetInnerHTML={{
          __html: data.note,
        }}
        >
          
        </td>
        <td className="title-tbody">
          <audio
            src={"http://" + data.audio.url}
            controls
            controlsList="nodownload"
          >
            Your browser does not support the audio element.
          </audio>
        </td>
        <td className="title-tbody action">
          <button onClick={() => alertsDelete(data._id)}>
            <img
              src={require("assets/images/table/delete.svg").default}
              alt="img"
            />
          </button>
          <button
            onClick={() => {
              setIsVisibleModal(true);
              setNumbers(data);
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
