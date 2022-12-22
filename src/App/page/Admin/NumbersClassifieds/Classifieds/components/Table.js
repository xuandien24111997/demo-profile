import moment from "moment";
import React from "react";
import Swal from "sweetalert2";

export default function Table({
  data,
  setIsVisibleModal,
  setClassifides,
  deleteClassifiedAction,
}) {
  const alertsDeleteAttribute = (Id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      deleteClassifiedAction(Id);
    });
  };

  return (
    <>
      <tr className="table-component__title">
        <td className="title-tbody">{data.word}</td>
        <td className="title-tbody">{data.spelling}</td>
        <td className="title-tbody">
          <textarea value={data.description} cols="70" rows="8" disabled />
        </td>
        <td className="title-tbody action">
          <button onClick={() => alertsDeleteAttribute(data._id)}>
            <img
              src={require("assets/images/table/delete.svg").default}
              alt="img"
            />
          </button>
          <button
            onClick={() => {
              setIsVisibleModal(true);
              setClassifides(data);
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
