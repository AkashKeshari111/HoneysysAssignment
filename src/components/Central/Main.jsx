import React from "react";
import style from "./Main.module.css";

function Main({
  title,
  setTitle,
  isEditing,
  handleKeyDown,
  subtitle,
  setSubtitle,
  isEditingSubtitle,
  handleKeyDownSubtitle,
  blob,
}) {
  return (
    <main className={style.main}>
      <section>
        {/*  // product Image */}
        <div>
          <img src={blob} />
        </div>

        <div>
          {/* // Product name    */}
          <div className={style.titleDiv}>
            {isEditing ? (
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <h3>{title}</h3>
            )}
          </div>

          {/* //subtitle */}
          <div className={style.subtitle}>
            {isEditingSubtitle ? (
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                onKeyDown={handleKeyDownSubtitle}
              />
            ) : (
              <p>{subtitle}</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
export default Main;
