import React from "react";
import  ReactDOM  from "react-dom";
import "./Modal.css";

function ModalPortal ({ name, children,isOpen,handleIsOpen }) {
  return ReactDOM.createPortal(
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
    </>,document.getElementById("modalPortal")
  );
}

export default ModalPortal;
