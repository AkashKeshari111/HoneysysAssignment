import React from "react";
import style from "./Sidebar.module.css";

function Sidebar({
  setIsEditing,
  isEditing,
  setIsEditingSubtitle,
  isEditingSubtitle,
  setFile,
}) {
  return (
    <aside className={style.sidebar}>
      <ul className={style.ul1}>
        {/* //upload Image */}
        <li>
          {" "}
          <label>
            <input
              className={style.imginput}
              type="file"
              onChange={(e) => {
                console.log(e.target.files[0]);
                setFile(e.target.files[0]);
              }}
              accept="image/*"
            />
            Upload Image
          </label>
        </li>

        {/* // Product name btn*/}
        <li onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Save Title" : "Product Name"}
        </li>

        {/* // Subtitle  btn   */}
        <li onClick={() => setIsEditingSubtitle(!isEditingSubtitle)}>
          {isEditingSubtitle ? "Save Subtitle" : "Subtitle"}
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
