import React, { useState } from "react";
import { ImFolderUpload } from "react-icons/im";
import Logo from "../assets/logo.png";
import { getId, gettoken } from "../services/apiRequests";

const Fileupload = () => {
  const [postDocument, setPostDocument] = useState(true);
  const [selectedFileCV, setSelectedFileCV] = useState(null);
  const [selectedFileCover, setSelectedFileCover] = useState(null);

  const handleFileChange = (event: any, cv: boolean) => {
    if (cv) {
      setSelectedFileCV(event.target.files[0]);
      setSelectedFileCover(null);
    } else {
      setSelectedFileCover(event.target.files[0]);
      setSelectedFileCV(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFileCV && !selectedFileCover) return;

    const formData = new FormData();
    if (selectedFileCV) formData.append("cv", selectedFileCV);
    if (selectedFileCover) formData.append("cover", selectedFileCover);

    const userData = getId("user");
    const email = userData.email;

    formData.append("email", email);
    const file = selectedFileCV ? "cv" : "cover";

    try {
      let tokens: any = gettoken("tokens");
      const response = await fetch(
        `http://localhost:9000/uploads/${file}?email=${email}&destination=${file}`,
        {
          method: "POST",
          headers: { Authorization: `Basic ${tokens?.accessToken}` },
          body: formData,
        }
      );

      console.log({ uploadresponse: response });
      if (response.ok) {
        console.log("File uploaded successfully");
      } else {
        console.error("Error uploading file");
      }
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  return (
    <div>
      <div
        style={{
          width: "max-content",
          borderRadius: 10,
          display: "inline",
          padding: "10px 15px",
        }}
        className="documentUpload-Button"
        onClick={() => setPostDocument(!postDocument)}
      >
        <span className="icon">
          <ImFolderUpload /> Upload Documents
        </span>
      </div>

      <div>
        {postDocument ? (
          ""
        ) : (
          <div className="applyOverlay">
            <div className="applicationForm">
              <img src={Logo} alt="logo" className="applicationForm-logo" />
              <div
                className="closeButton"
                onClick={() => setPostDocument(!postDocument)}
              >
                X
              </div>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="applicantButtons">
                  <input
                    id="cover"
                    type="file"
                    accept="application/pdf"
                    onChange={(e: any) => {
                      handleFileChange(e, false);
                    }}
                    style={{ display: "none" }}
                  />
                  <label
                    htmlFor="cover"
                    className="uploadcv"
                    style={{
                      backgroundColor: selectedFileCover ? "red" : "#b2e522",
                      color: selectedFileCover ? "white" : "black",
                    }}
                  >
                    upload cover letter
                  </label>
                  <input
                    id="cv"
                    type="file"
                    accept="application/pdf"
                    onChange={(e: any) => {
                      handleFileChange(e, true);
                    }}
                    style={{ display: "none" }}
                  />
                  <label
                    htmlFor="cv"
                    className="uploadcv"
                    style={{
                      backgroundColor: selectedFileCV ? "red" : "#b2e522",
                      color: selectedFileCV ? "white" : "black",
                    }}
                  >
                    upload cv
                  </label>
                </div>
                <button
                  type="submit"
                  className="applicantSubmitButton"

                >
                  submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fileupload;
