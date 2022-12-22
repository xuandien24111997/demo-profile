import React, { useRef } from "react";
import PublishIcon from "@material-ui/icons/Publish";
import Button from "@material-ui/core/Button";

const UploadImage = ({ picture, setPicture }) => {
  const fileInputIcon = useRef(null);
  const uploadIcon = (event) => {
    if (event.target.files && event.target.files[0]) {
      picture.formFile = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        picture.VirtualPath = e.target.result;
        setPicture({ ...picture });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="d-flex justify-content-start mt-3">
      <img
        src={
          picture.VirtualPath &&
          picture.VirtualPath.trim().substr(0, 4) === "data"
            ? `${picture.VirtualPath}`
            : `http://${picture.VirtualPath}`
        }
        alt=""
        className="img-thumbnail"
        style={{ width: "100px", height: "100px" }}
      />
      <div className="d-flex align-items-center">
        <input
          ref={fileInputIcon}
          type="file"
          style={{ display: "none" }}
          onChange={(e) => uploadIcon(e)}
        />
        <Button
          onClick={() => fileInputIcon.current.click()}
          className="ml-3"
          variant="contained"
          style={{
            backgroundColor: "#927c04",
            color: "#FFFFFF",
            height: "50%",
          }}
        >
          <div
            className="d-flex align-items-center"
            style={{ textTransform: "capitalize" }}
          >
            <PublishIcon />
            Upload Image
          </div>
        </Button>
      </div>
    </div>
  );
};

export default UploadImage;
