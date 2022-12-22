import React from "react";
import Swal from "sweetalert2";

export default function Table({
  data,
  setIsVisibleModal,
  setQuizzes,
  deleteQuizzesAction,
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
      if (result.isConfirmed) deleteQuizzesAction(Id);
    });
  };
  return (
    <>
      <tr className="table-component__title">
        <td className="title-tbody">{data.question}</td>
        <td className="title-tbody">{data.information}</td>
        <td className="title-tbody">{data.nameAudioShow}</td>
        <td className="title-tbody">
          <p
            style={
              data.answers[0].isAnswer
                ? { fontWeight: "bold", color: "red" }
                : {}
            }
          >
            A. {data.answers[0].text}
          </p>
          <p
            style={
              data.answers[1].isAnswer
                ? { fontWeight: "bold", color: "red" }
                : {}
            }
          >
            B. {data.answers[1].text}
          </p>
          <p
            style={
              data.answers[2].isAnswer
                ? { fontWeight: "bold", color: "red" }
                : {}
            }
          >
            C. {data.answers[2].text}
          </p>
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
              setQuizzes(data);
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
