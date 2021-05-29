import React, { useContext } from "react";
import "./Modal.scss";
import { GiCancel } from "react-icons/gi";
import Center from "../Center/Center";
import { AuthContext } from "../../context/AuthContext";

const Modal = ({ title, children }) => {
  const handleEvent = (event) => {
    setIsOpened(false);
  };
  const { setIsOpened } = useContext(AuthContext);
  return (
    <>
      <section className={"ModalOverlay"}>
        <Center>
          <div className={"ModalWrapper"}>
            <div className={"ModalWrapper-Info"}>
              {title && <h2 className={"ModalWrapper-Title"}>{title}</h2>}
              <div className={"Icon-Wrapper"}>
                <GiCancel onClick={handleEvent} />
              </div>
            </div>

            {children}
          </div>
        </Center>
      </section>
    </>
  );
};

export default Modal;