import moment from "moment";
import React from "react";
import Swal from "sweetalert2";

export default function Table({
  data,
  setIsVisibleModal,
  setLanguage,
  deleteLanguageAdminAction,
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
      deleteLanguageAdminAction(Id);
    });
  };

  return (
    <>
      <tr className="table-component__title">
        <td className="title-tbody">{data.name}</td>
        <td className="title-tbody">
          {moment(new Date(data.createdAt)).format("DD/MM/YYYY")}
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
              setLanguage(data);
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
