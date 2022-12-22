import moment from "moment";
import React from "react";
import Swal from "sweetalert2";

export default function Table({
  data,
  setIsVisibleModal,
  setFingerCountingData,
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
        <td className="title-tbody">
          {data.image.map((item, index) => {
            return (
              <img
                className="img"
                style={{ width: 130, height: 130 }}
                src={`http://${item.url}`}
              />
            );
          })}
        </td>
        <td className="title-tbody">{data.number}</td>
        <td className="title-tbody action">
          <button
            onClick={() => {
              setIsVisibleModal(true);
              setFingerCountingData(data);
            }}
          >
            <img
              style={{ width: 38, height: 38 }}
              src={require("assets/images/table/edit.svg").default}
              alt="img"
            />
          </button>
        </td>
      </tr>
    </>
  );
}
