import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { Editor } from "@tinymce/tinymce-react";
import { checkFileImage, checkSize } from "ultils/checkFile";
import { uploadImage } from "service/admin/uploadFile";
import { BACKEND_URL } from "config"

const Phrases = ({
  updatePhraseSetting,
  phraseSettingLoading,
  detailPhraseSetting,
}) => {
  const [settings, setSettings] = useState({});
  const [language, setLanguage] = useState("");
  const [imgSrc, setImgSrc] = useState({
    formFile: null
  });

  useEffect(() => {
    setLanguage(JSON.parse(localStorage.getItem("idLanguage")));
  }, [
    typeof window !== undefined &&
    JSON.parse(localStorage.getItem("idLanguage")),
  ]);

  useEffect(() => {
    detailPhraseSetting().then((res) => {
      setSettings(res)
    })
  }, [language]);

  const uploadImageSrc = (event) => {
    if (event.target.files && event.target.files[0]) {
      imgSrc.formFile = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        imgSrc.VirtualPath = e.target.result;
        setImgSrc({ ...imgSrc });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const uploadImageReq = async () => {
    const formDataImg = new FormData();
    formDataImg.append("uploadFile", imgSrc.formFile);
    const imageReq = await uploadImage(formDataImg);
    return { image: { ...imageReq.data } };
  };

  const onSubmit = async () => {
    try {
      const res = await uploadImageReq();
      console.log(res)
      updatePhraseSetting({ ...settings, culture_image: res.image.url })
    } catch (error) {
      console.log(error)
    }
  }

  if (phraseSettingLoading) return (
    <div className="loading">
      <CircularProgress />
    </div>
  )

  return (
    <div className="languages">
      <div className="languages__body">
        <div>
          <p className="page-title">Images</p>
          <div>
            {imgSrc?.VirtualPath ? <img src={imgSrc.VirtualPath} alt="setting" /> : settings?.culture_image && <img src={settings.culture_image} alt="setting" />}
            <input
              className="mt-4"
              type="file"
              onChange={uploadImageSrc}
            />
          </div>
        </div>
        <div>
          <p className="page-title">Culture</p>
          <div>
            <textarea className="textarea" value={settings.culture} onChange={(e) => setSettings((prev) => ({ ...prev, culture: e.target.value }))} />
          </div>
        </div>
        <div>
          <p className="page-title">Phrase images</p>
          <div>
            <Editor
              apiKey="0ndozqncn1at1e8tsvk4beszm9wlywfrnmkdor7ik45qnsbw"
              onEditorChange={(data) => setSettings((prev) => ({ ...prev, dialogue_image: data }))}
              value={settings.dialogue_image}
              init={{
                min_height: 250,
                max_height: 400,
                menubar: false,
                images_upload_handler: async (blobInfo, success, failure) => {
                  try {
                    const file = blobInfo.blob();

                    // check file type
                    if (!checkFileImage(file.name)) {
                      throw new Error("File should be png, jpg, jpeg or gif.");
                    }

                    // check file type
                    if (!checkSize(file.size)) {
                      throw new Error("File should be less than 2 MB");
                    }

                    const formDataImg = new FormData();
                    formDataImg.append("uploadFile", blobInfo.blob());
                    const imageResponse = await uploadImage(formDataImg);
                    success(BACKEND_URL + "image/" + imageResponse.data.name);
                  } catch (error) {
                    failure(error.message || error.kind || error);
                  }
                },
                plugins: [
                  "advlist autolink lists link charmap print preview anchor",
                  "searchreplace visualblocks ",
                  "media table paste wordcount image code",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | image code",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; overflow: auto }",
              }}
            />
            <Button
              className="jr-btn btn-block"
              variant="contained"
              style={{
                backgroundColor: "#927c04",
                color: "#FFFFFF",
                textTransform: "none",
                fontFamily: "OpenSans-Regular",
              }}
              aria-label="add"
              onClick={onSubmit}
            >
              <span>Update</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const { updateOrCreatePhraseSettingAction, detailPhraseSettingAction } = require("redux/adminPhraseSettingRedux");
  return {
    updatePhraseSetting: (payload) => dispatch(updateOrCreatePhraseSettingAction(payload)),
    detailPhraseSetting: () => dispatch(detailPhraseSettingAction())
  };
};

const mapStateToProps = (state) => ({
  phraseSettingLoading: state.phraseSetting.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Phrases);
