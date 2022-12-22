import React from "react";
import Swal from "sweetalert2";

export default function Table({
  data,
  setIsVisibleModal,
  setHand,
  deleteHandAction,
  setImage,
  image,
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
      if (result.isConfirmed) deleteHandAction(Id);
    });
  };
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
        <td className="title-tbody">{data.title}</td>
        <td className="title-tbody">
          <textarea value={data.question} cols="70" rows="8" disabled />
        </td>
        <td className="title-tbody">{data.note}</td>
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
              setHand(data);
              setImage({ ...image, VirtualPath: data.image.url });
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
