/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Card, List } from "reactstrap";
import Dropzone from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faFileAlt,
  faFileArchive,
  faFileImage,
  faFilePdf,
  faFileWord,
  // faFill,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
// import ProgressBar from "./ProgressBar";
import { faFile } from "@fortawesome/free-regular-svg-icons";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  // const [status, setStatus] = useState(0);

  const handleDrop = (acceptedFiles) => {
    // setStatus(10);
    // setTimeout(() => {
    //   setStatus(20);
    // }, 1000);
    // setTimeout(() => {
    //   setStatus(30);
    // }, 1000);
    // setTimeout(() => {
    //   setStatus(40);
    // }, 1000);
    // setTimeout(() => {
    //   setStatus(50);
    // }, 1000);
    // setTimeout(() => {
    //   setStatus(60);
    // }, 1000);
    // setTimeout(() => {
    //   setStatus(70);
    // }, 1000);
    // setTimeout(() => {
    //   setStatus(80);
    // }, 1000);
    // setTimeout(() => {
    //   setStatus(90);
    // }, 1000);
    // setTimeout(() => {
    //   setStatus(100);
    // }, 1000);
    setFiles(files.concat(acceptedFiles[0]));
    // move();
  };

  const removeitem = (remove) => {
    const DeleteFile = [...files];
    DeleteFile.map((item, index) => {
      if (item.path === remove.path) {
        DeleteFile.splice(index, 1);
      }
    });
    setFiles(DeleteFile);
  };
  return (
    <div className="App">
      <Card className="card">
        <div className="dropzone-div">
          <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <FontAwesomeIcon className="upload-icon" icon={faDownload} />
                <p>Upload Files</p>
              </div>
            )}
          </Dropzone>
        </div>
      </Card>
      <p className="file-style">Files:</p>

      <ol className="order-list-style">
        {files.map((file) => (
          <div className="list-div">
            <List className="list-card">
              <div className="file-uploaded">
                {file.name.split(".")[1] === "jpg" && (
                  <div>
                    <FontAwesomeIcon className="file-icon" icon={faFileImage} />
                  </div>
                )}
                {file.name.split(".")[1] === "txt" && (
                  <div>
                    <FontAwesomeIcon className="file-icon" icon={faFileAlt} />
                  </div>
                )}
                {file.name.split(".")[1] === "zip" && (
                  <div>
                    <FontAwesomeIcon
                      className="file-icon"
                      icon={faFileArchive}
                    />
                  </div>
                )}
                {file.name.split(".")[1] === "pdf" && (
                  <div>
                    <FontAwesomeIcon className="file-icon" icon={faFilePdf} />
                  </div>
                )}
                {file.name.split(".")[1] === "png" && (
                  <div>
                    <FontAwesomeIcon className="file-icon" icon={faFileImage} />
                  </div>
                )}
                {file.name.split(".")[1] === "docx" && (
                  <div>
                    <FontAwesomeIcon className="file-icon" icon={faFileWord} />
                  </div>
                )}
                {file.name.split(".")[1] === "clsx" && (
                  <div>
                    <FontAwesomeIcon className="file-icon" icon={faFile} />
                  </div>
                )}
                {file.name.split(".")[1] === "ppt" && (
                  <div>
                    <FontAwesomeIcon className="file-icon" icon={faFile} />
                  </div>
                )}

                <li className="list-style">
                  {file.name} ({file.size} )
                </li>

                <FontAwesomeIcon
                  className="remove-icon"
                  onClick={() => removeitem(file)}
                  icon={faWindowClose}
                />
                <div className="progress">
                  <div className="progress-value ">100%</div>
                </div>
              </div>
            </List>
          </div>
        ))}

        {/* <div className="App">
            <h4> Progress </h4>
            <ProgressBar completed={status} />
          </div> */}
      </ol>
    </div>
  );
};
export default FileUpload;
