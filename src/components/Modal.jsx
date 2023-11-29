import React, { useState } from "react";
import "./Modal.css";

function Modal({ name, children,isOpen,handleIsOpen }) {
  return (
    <>
      <div>
        <button onClick={handleIsOpen}>Open {name}</button>
      </div>

      {isOpen && <article className={"modal"}>
        <div className="modal-container">
          <button className="modal-close" onClick={handleIsOpen}>X</button>
          {children}
        </div>
      </article>}
    </>
  );
}

export default Modal;
