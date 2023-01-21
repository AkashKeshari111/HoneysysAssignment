import React, { useEffect, useState } from "react";
import Main from "./Main";
import Sidebar from "../Sidebar/Sidebar";
import style from "./Main.module.css";

const Container = () => {
  const [title, setTitle] = useState("Title");
  const [isEditing, setIsEditing] = useState(false);
  const [subtitle, setSubtitle] = useState("Subtitle");
  const [isEditingSubtitle, setIsEditingSubtitle] = useState(false);

  const [file, setFile] = useState(null);
  const [blob, setBlob] = useState(null);

  // function onSubmit(e) {
  //   e.preventDefault();

  //   var formdata = new FormData();
  //   formdata.append("image", file, file.name);
  // }

  useEffect(() => {
    try {
      file && setBlob(URL.createObjectURL(file));
    } catch (err) {}
  }, [file]);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(blob);
    };
  }, [blob]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  const handleKeyDownSubtitle = (event) => {
    if (event.key === "Enter") {
      setIsEditingSubtitle(false);
    }
  };

  return (
    <div className={style.container}>
      <Sidebar
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        isEditingSubtitle={isEditingSubtitle}
        setIsEditingSubtitle={setIsEditingSubtitle}
        file={file}
        setFile={setFile}
        blob={blob}
        setBlob={setBlob}
      />
      <Main
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        title={title}
        setTitle={setTitle}
        handleKeyDown={handleKeyDown}
        handleKeyDownSubtitle={handleKeyDownSubtitle}
        isEditingSubtitle={isEditingSubtitle}
        setIsEditingSubtitle={setIsEditingSubtitle}
        subtitle={subtitle}
        setSubtitle={setSubtitle}
        file={file}
        setFile={setFile}
        blob={blob}
        setBlob={setBlob}
      />
    </div>
  );
};

export default Container;
