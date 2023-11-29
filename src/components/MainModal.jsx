import React from "react";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import ModalPortal from "./ModalPortal";

function MainModal() {
  const [isOpen, handleIsOpen] = useModal();
  const [isOpen2, handleIsOpen2] = useModal();
  const [isOpen3, handleIsOpen3] = useModal();
  const [isOpenPortal, handleIsOpenPortal] = useModal();
  return (
    <div>
      <h3>Modals</h3>
      <Modal name={"First Modal"} isOpen={isOpen} handleIsOpen={handleIsOpen}>
        <h3>Modal 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum
          magni impedit tempore dolorem esse quos! Laborum iure illum quibusdam
          error! Deleniti saepe nulla temporibus vitae quidem odio adipisci
          ipsam?
        </p>
        <img src="https://picsum.photos/200/300" alt="img" />
      </Modal>

      <Modal
        name={"Second Modal"}
        isOpen={isOpen2}
        handleIsOpen={handleIsOpen2}
      >
        <h3>Modal 2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error nemo
          fuga rerum id placeat nihil quas temporibus hic aperiam, voluptatum
          odit explicabo, repellendus fugit rem reprehenderit. Asperiores,
          suscipit eligendi? Libero.
        </p>
        <img src="https://picsum.photos/seed/picsum/200/300" alt="img" />
      </Modal>

      <Modal name={"Third Modal"} isOpen={isOpen3} handleIsOpen={handleIsOpen3}>
        <h3>Modal 3</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          facere consequatur ipsum delectus iste, suscipit molestiae aliquid,
          porro earum dolore ad blanditiis deserunt numquam tempora fugiat dolor
          adipisci et libero.
        </p>
        <img src="https://picsum.photos/200/300?grayscale" alt="img" />
      </Modal>

      <ModalPortal name={"Modal portal"} isOpen={isOpenPortal} handleIsOpen={handleIsOpenPortal}>
      <h3>Modal Portal</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          facere consequatur ipsum delectus iste, suscipit molestiae aliquid,
          porro earum dolore ad blanditiis deserunt numquam tempora fugiat dolor
          adipisci et libero.
        </p>
        <img src="https://picsum.photos/id/237/200/300" alt="img" />
      </ModalPortal>
    </div>
  );
}

export default MainModal;
